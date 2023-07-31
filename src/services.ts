import store from './store';

export const updateModelName = async () => {
  console.log('hello world');
  store.getModelDispatchers('model').setName('bar')
};
