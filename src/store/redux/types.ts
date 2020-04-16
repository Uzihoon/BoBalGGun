import {Map} from 'immutable';

export interface IImmutableMap<T> extends Map<string, any> {
  get<K extends keyof T>(name: K): T[K];
}
