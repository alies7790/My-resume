import {createStore} from "redux"
import changeTheme from "./changeTheme"

const store = createStore(changeTheme);

export default store