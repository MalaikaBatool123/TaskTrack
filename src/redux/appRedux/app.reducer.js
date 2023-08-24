import { ADD_ITEM, UPDATE_STATUS } from "./app.actionTypes";

export const APP_KEY = 'appStore'
const initialState = {
    items: []
}

export const appReducer = (state = initialState, action) => {
    let { type, payload } = action;
    switch (type) {
        case ADD_ITEM:
            return {
                ...state,
                items: [...state.items, payload]
            }
        case UPDATE_STATUS:
            const { index, newStatus } = action.payload;
            const updatedItems = [...state.items];
            if (updatedItems[index].status !== 'deleted') {
                updatedItems[index].status = newStatus;
                // updatedItems[index].endDate = Date;
            }
            return {
                ...state,
                items: updatedItems
            }
        default:
            return state;
    }
}
