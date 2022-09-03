// import { combineReducers } from 'redux';

// import counter from './counter.reducer';

// const rootReducer = combineReducers({
//   counter
// });

// export default rootReducer;
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import todoSlice from "features/todo/todoSlice";

const persistConfig = {
  key: "root",
  // localStorage에 저장합니다.
  storage: storage,
  // 여러개의 reducer 중에 todo reducer만 localstorage에 저장합니다.
  whitelist: ["todo"],
  // blacklist -> 그것만 제외합니다
};

const rootReducer = combineReducers({ todo: todoSlice });
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});
export const persistor = persistStore(store);