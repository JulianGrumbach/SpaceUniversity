// https://stackoverflow.com/questions/62871984/how-to-connect-vue-3-with-vuetify/62887423#62887423
// https://github.com/vuejs/composition-api
import Vue from 'vue';
import VueCompositionAPI from '@vue/composition-api';
Vue.use(VueCompositionAPI);

import { reactive, watch, ref, Ref } from '@vue/composition-api';

export abstract class Store<T extends Record<string, any>> {
  protected state: T;

  constructor(readonly storeName: string) {
    const data = this.data();
    this.state = reactive(data) as T;
  }

  protected abstract data(): T;

  public getState(): T {
    return this.state as T;
  }
}

export abstract class PersistentStore<
  T extends Record<string, any>
> extends Store<T> {
  private _isInitialized = ref(false);

  constructor(readonly storeName: string) {
    super(storeName);
    this.init();
  }

  get isInitialized(): Ref<boolean> {
    return this._isInitialized;
  }

  async init() {
    if (this._isInitialized) {
      const stateFromIndexedDB: string | null = localStorage.getItem(
        this.storeName
      );
      if (stateFromIndexedDB) {
        Object.assign(this.state, JSON.parse(stateFromIndexedDB));
      }
      watch(
        () => this.state,
        val => localStorage.setItem(this.storeName, JSON.stringify(val)),
        { deep: true }
      );
      this._isInitialized.value = true;
    }
  }
}
