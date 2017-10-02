/**
 * Created by sanjithkumar017 on 16/9/17.
 */
import {createStore} from 'redux';

const initState = {
    count: 0,
    countleft: 41,
    lang: 0

}

export const counter = (state = initState, action) => {
    switch (action.type) {
        case 'INCREMENT':

            return Object.assign({}, state, {
                count: state.count + 1,
                countleft: state.countleft - 1,
            })

        case 'RESET':
            return Object.assign({}, state, {
                count: 0,
                countleft: 41,
            })
        case 'NEXTLANG':

            return Object.assign({}, state, {
                lang: (state.lang + 1) % 1
            })
        default:
            return state;
    }
}

let store = createStore(counter, initState);

export default store;
