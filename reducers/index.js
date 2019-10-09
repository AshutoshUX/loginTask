import { combineReducers } from "redux";
import users from "./users";

const rootReducer = combineReducers({ usersStore : users });

export default rootReducer;