import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import React from 'react';
import CodeEditor from '../../common/CodeEditor';

export default function EndpointCode({
  responseCode,
  serverStateUpdateCode,
  onResponseCodeSave,
  onServerStateUpdateCodeSave,
}: {
  responseCode: string;
  serverStateUpdateCode: string;
  onResponseCodeSave(_code: string): void;
  onServerStateUpdateCodeSave(_code: string): void;
}) {
  return (
    <>
      <ExpansionPanelDetails>
        <CodeEditor
          code={responseCode}
          title="Response"
          onSave={onResponseCodeSave}
        />
      </ExpansionPanelDetails>
      <ExpansionPanelDetails>
        <CodeEditor
          code={serverStateUpdateCode}
          title="Server update"
          onSave={onServerStateUpdateCodeSave}
        />
      </ExpansionPanelDetails>
    </>
  );
}
