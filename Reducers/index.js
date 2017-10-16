//This is a pure Function.
//This function will add data to the store.
export default function DataReducer (state={}, action) {
    switch(action.type){
        case 'ADD_DATA':        
        let data = action.payload;
            return {data}
        default:
            return state;
    }
}