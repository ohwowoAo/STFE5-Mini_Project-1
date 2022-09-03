import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { getDefaultMiddleware } from '@reduxjs/toolkit';

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, userReducer);

export default configureStore({
    reducer: {
        user : userReducer
    },
    middleware: getDefaultMiddleware({
        serializableCheck: false,
    }),
    
})


