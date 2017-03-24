const initialState = [{
    id: Date.now().toString(),
    item: name
}];

export default function album(state = initialState, action) {
    if (action.type === 'ADD_FAVORITES') {
        return [
            ...state,
            action.payload
        ]
    }

    return state
}
