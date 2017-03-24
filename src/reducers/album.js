const initialState = [
{
        id: Date.now().toString(),
        item: name
      }];

export default function album(state = initialState, action) {
    if (action.type === 'SEARCH_ALBUM') {
        return [
            ...state,
            action.payload
        ]
    }
    return state
}
