import { types } from "mobx-state-tree";

const props = {
  isAuthenticated: types.optional(types.boolean, false),
  authToken: types.maybe(types.string),
  authEmail: types.optional(types.string, ""), 
};

const AuthenticationStoreModel = types
  .model("AuthenticationStore", props) 
  .actions(self => ({
    login: () => {
      self.isAuthenticated = true;
    },
    logout: () => {
      self.isAuthenticated = false;
    },
  }))
  .views(self => ({
    get isLoggedIn() { 
      return self.isAuthenticated;
    },
  }));

export { AuthenticationStoreModel };