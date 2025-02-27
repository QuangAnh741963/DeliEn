import { types } from "mobx-state-tree";
import { AuthenticationStoreModel } from "./AuthenticationStore";

const RootStoreModel = types.model("RootStore").props({
    authenticationStore: types.optional(AuthenticationStoreModel, {}), 
  });

export { RootStoreModel };