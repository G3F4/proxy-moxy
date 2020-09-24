import produce from 'immer';
import { ServerState } from '../../interfaces';
import {
  ClientAction,
  Endpoint,
  HttpStatus,
  Method,
  ServerStateScenario,
} from '../../sharedTypes';
import SocketsClient from '../infrastructure/sockets-client/SocketsClient';
import EndpointsService from '../services/endpoints-service/EndpointsService';
import ServerStateService from '../services/server-state-service/ServerStateService';
import { logInfo } from '../utils/logger';

const DefaultContentType = 'json/application';

export default class MoxyProxyFacade {
  connectedSocketIds: string[] = [];

  constructor(
    private readonly socketsClient: SocketsClient,
    private readonly endpointsService: EndpointsService,
    private readonly serverStateService: ServerStateService,
  ) {}

  connectClient = (socket: WebSocket) => {
    const socketId = this.socketsClient.connect(
      socket,
      this.disconnectClient.bind(this),
    );

    this.connectedSocketIds.push(socketId);
    this.socketsClient.registerMessageHandlers(this.clientMessageHandlers);
    this.sendCurrentStateToClient(socketId);
  };

  sendServerStateInterface() {
    this.socketsClient.broadcastEvent({
      action: 'updateServerStateInterface',
      payload: this.serverStateService.getServerStateInterface(),
    });
  }

  callHandler({
    url = '/',
    method = 'get',
    body = {},
    parameters = {},
  }: {
    url: string;
    method: Method;
    body: Record<string, any>;
    parameters: Record<string, any>;
  }): {
    status: HttpStatus;
    contentType: string;
    requestResponse: string;
  } {
    console.log(['callHandler']);

    const handler = this.endpointsService.getHandler({ url, method });
    const urlParameters = this.endpointsService.getUrlParameters({
      url,
      method,
    });
    const responseStatus = this.endpointsService.getEndpointResponseStatus({
      url,
      method,
    });
    const status = responseStatus ? responseStatus : 200;
    const { requestResponse, serverUpdate } = handler;
    const request = { body, parameters, urlParameters };
    const requestResponseReturn = requestResponse(
      this.serverStateService.getServerState(),
      request,
    );

    this.serverStateService.updateScenarioState({
      serverStateScenarioId: this.serverStateService.getActiveServerStateScenarioId(),
      state: produce(
        this.serverStateService.getServerState(),
        serverUpdate(request),
      ),
    });

    return {
      status,
      contentType: DefaultContentType,
      requestResponse: JSON.stringify(requestResponseReturn),
    };
  }

  private disconnectClient(socketId: string) {
    this.connectedSocketIds = this.connectedSocketIds.filter(
      id => socketId !== id,
    );
  }

  private sendCurrentStateToClient(socketId: string) {
    this.socketsClient.sendEventToSocket(socketId, {
      action: 'updateServerState',
      payload: this.serverStateService.getServerState(),
    });
    this.socketsClient.sendEventToSocket(socketId, {
      action: 'updateServerStateInterface',
      payload: this.serverStateService.getServerStateInterface(),
    });
    this.socketsClient.sendEventToSocket(socketId, {
      action: 'updateServerStateScenarios',
      payload: this.serverStateService.getServerStateScenarioMappings(),
    });
    this.socketsClient.sendEventToSocket(socketId, {
      action: 'updateActiveStateScenarioId',
      payload: this.serverStateService.getActiveServerStateScenarioId(),
    });
    this.socketsClient.sendEventToSocket(socketId, {
      action: 'updateEndpoints',
      payload: this.endpointsService.getEndpoints(),
    });
  }

  private clientMessageHandlers: Record<
    ClientAction,
    (payload: any) => void
  > = {
    persistMockedData: () => {
      this.serverStateService.persistChanges();
    },
    persistEndpoints: () => {
      this.endpointsService.persistChanges();
    },
    addEndpoint: (payload: Endpoint) => {
      this.endpointsService.addEndpoint(payload);
      this.socketsClient.broadcastEvent({
        action: 'updateEndpoints',
        payload: this.endpointsService.getEndpoints(),
      });
    },
    updateEndpoint: (payload: Endpoint) => {
      this.endpointsService.updateEndpoint(payload);
      this.socketsClient.broadcastEvent({
        action: 'updateEndpoints',
        payload: this.endpointsService.getEndpoints(),
      });
    },
    deleteEndpoint: (payload: string) => {
      this.endpointsService.deleteEndpoint(payload);
      this.socketsClient.broadcastEvent({
        action: 'updateEndpoints',
        payload: this.endpointsService.getEndpoints(),
      });
    },
    changeEndpointResponseStatus: (payload: {
      endpointId: string;
      status: HttpStatus | null;
    }) => {
      this.endpointsService.changeEndpointResponseStatus(payload);
      this.socketsClient.broadcastEvent({
        action: 'updateEndpoints',
        payload: this.endpointsService.getEndpoints(),
      });
    },

    addServerStateScenario: (payload: ServerStateScenario) => {
      this.serverStateService.addServerStateScenario(payload);
      this.socketsClient.broadcastEvent({
        action: 'updateServerStateScenarios',
        payload: this.serverStateService.getServerStateScenarioMappings(),
      });
    },
    deleteStateScenario: (payload: string) => {
      this.serverStateService.deleteStateScenario(payload);
      this.socketsClient.broadcastEvent({
        action: 'updateServerStateScenarios',
        payload: this.serverStateService.getServerStateScenarioMappings(),
      });
      this.socketsClient.broadcastEvent({
        action: 'updateActiveStateScenarioId',
        payload: this.serverStateService.getActiveServerStateScenarioId(),
      });
    },
    changeServerStateScenario: (payload: string) => {
      console.log(['changeServerStateScenario'], payload);
      this.serverStateService.changeServerStateScenario(payload);
      this.socketsClient.broadcastEvent({
        action: 'updateServerState',
        payload: this.serverStateService.getServerState(),
      });
    },
    clientUpdatedServer: (payload: {
      state: ServerState;
      serverStateScenarioId: string;
    }) => {
      this.serverStateService.updateScenarioState(payload);
      this.socketsClient.broadcastEvent({
        action: 'updateServerState',
        payload: this.serverStateService.getServerState(),
      });
    },
    resetServerState: (payload: string) => {
      this.serverStateService.resetServerState(payload);
      this.socketsClient.broadcastEvent({
        action: 'updateServerState',
        payload: this.serverStateService.getServerState(),
      });
    },

    ping: () => {
      logInfo(['ping']);
    },
  };
}