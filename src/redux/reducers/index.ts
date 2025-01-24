import { Action } from "../../types/Action"
import { Response } from "../../types/Response"

interface State{
    song: Response[] | [],
}

const initialState: State = {
    song: []
}

const mainReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case "GET_SONGS":
            return{
                ...state,
                song: action.payload
            }
        default:
            return state
    }
}

export default mainReducer