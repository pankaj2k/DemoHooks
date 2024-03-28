import {buy_book} from './bookType';

const initialState =  {
    numberOfBooks : 20
}

const BookReducer = (state = initialState, action) => {
    switch(action.type) {
        case buy_book : return {
            ...state, numberOfBooks : state.initialState - 1
        }
        default : return state
    }
}

export default BookReducer;