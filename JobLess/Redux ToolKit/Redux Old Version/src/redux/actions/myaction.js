import { INCREMENT_TYPE, DECREMENT_TYPE } from "../constant"
export function IncrementCounterAction(data) {
    return {
        type: INCREMENT_TYPE,
        payload:data
    }
}

export function DecrementCounterAction() {
    return {
        type: DECREMENT_TYPE,
    }
}

