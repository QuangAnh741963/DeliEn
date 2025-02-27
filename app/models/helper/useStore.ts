import { createContext, useContext } from "react";
import { RootStoreModel } from "../RootStore";

const RootStoreContext = createContext(RootStoreModel.create());

export const RootStoreProvider = RootStoreContext.Provider;
export const useStore = () => useContext(RootStoreContext);
