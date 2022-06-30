export interface SuccessFetch<T> {
  message: null;
  result: T;
}

export interface FailFetch {
  description: string;
  statusCode: string;
  message: string;
}
