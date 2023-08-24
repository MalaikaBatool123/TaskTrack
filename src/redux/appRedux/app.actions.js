import { ADD_ITEM, UPDATE_STATUS } from "./app.actionTypes";


export const add_items = (item) => {
    return {
        type: ADD_ITEM,
        payload: item
    }
}
export const update_status = (index, newStatus) => {
    return {
        type: UPDATE_STATUS,
        payload: {
            index,
            newStatus
        }
    }
}