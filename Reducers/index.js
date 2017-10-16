export default function DataReducer (state={}, action) {
    switch(action.type){
        case 'ADD_DATA':
        debugger;
        let data = action.payload;
            return {data}
        default:
            return state;
    }
}