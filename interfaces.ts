export interface ServerState {
  requestCount: number;
  data: Data;
  modified: boolean;
}
export interface Data {
  test?: (string)[] | null;
  a: number;
}
