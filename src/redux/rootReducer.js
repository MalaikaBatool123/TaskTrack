import { APP_KEY, appReducer } from "./appRedux/app.reducer";

import {combineReducers} from "redux"

let rootReducer = combineReducers({
    [APP_KEY]:appReducer
})

export {rootReducer}