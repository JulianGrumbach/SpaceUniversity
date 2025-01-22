export interface dict<T> {
  [userId: string]: T;
}

export interface Identifyable {
  id: string;
}
