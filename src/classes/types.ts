export interface dict<T> {
  [userId: string]: T;
}

export interface Identifyable {
  id: string;
}

export interface Role {
  name: string;
  icon: string;
}
