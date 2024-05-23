export enum RequestStatus {
  IDLE = 'idle',
  LOADING = 'loading',
  SUCCEEDED = 'succeeded',
  FAILED = 'failed',
}
export type RequestStatusType =
  | RequestStatus.IDLE
  | RequestStatus.LOADING
  | RequestStatus.SUCCEEDED
  | RequestStatus.FAILED;
