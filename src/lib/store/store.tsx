import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slice/slice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      auth: authReducer,
      // Ajoutez d'autres reducers ici
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];