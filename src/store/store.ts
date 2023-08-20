import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';
import AuthSlice from './Auth/AuthSlice';
import SettingsSlice from './Settings/SettingsSlice';

export function createReduxStore(initialState?: StateSchema) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        auth: AuthSlice,
        settings: SettingsSlice
    };

    return configureStore<StateSchema>({
        reducer: rootReducers,
        preloadedState: initialState,
    });
}
