import { configureStore } from '@reduxjs/toolkit';
import CommonReducer from './reducer/common';
export const store = configureStore({
    reducer: {
        common: CommonReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
