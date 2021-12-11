import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import createSecureStore from 'redux-persist-expo-securestore';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducers from './reducers/reducers';

const storage = createSecureStore();

const config = {
  key: 'root',
  storage,
  whitelist: ['reducers'],
};

const persistedReducer = persistReducer(config, reducers);

const store = createStore(
  persistedReducer,
  applyMiddleware(thunk, createLogger()),
);

const persistedStore = persistStore(store);

export { persistedStore, store };
