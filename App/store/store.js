/**
 * Created by sanjithkumar017 on 16/9/17.
 */
import {createStore} from 'redux';
import moment from 'moment'
import {AsyncStorage} from 'react-native';

const initState = {
    count: 0,
    countleft: 41,
    lang: 0,
    date1: null, date2: null, date3: null, date4: null,
    enddate: null

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
        case 'SETDATE1':

            return Object.assign({}, state, {
                date1: action.value,

            })

        case 'SETDATE2':

            return Object.assign({}, state, {
                date2: action.value
            })
        case 'SETDATE3':

            return Object.assign({}, state, {
                date3: action.value
            })
        case 'SETDATE4':

            return Object.assign({}, state, {
                //date4: moment.utc(new Date()).format('D')
                date4: action.value
            })

        case 'SETNEWDATE':

            let date = moment.utc(new Date()).format('D')
            date = appender(date);

            let edate = moment.utc(new Date(), "DD-MM-YYYY").add(16,'days');
            let finalEDate = edate.format('DD');

            finalEDate = appender(finalEDate);
            finalEDate = finalEDate + " " + edate.format('MMMM')


            if (state.date1 === null) {

                AsyncStorage.setItem("date1", date)
                AsyncStorage.setItem("enddate", finalEDate)

                return Object.assign({}, state, {
                    date1: date,
                    enddate: finalEDate


                })


            }

            if (state.date2 === null) {
                AsyncStorage.setItem("date2", date)
                return Object.assign({}, state, {
                    date2: date

                })
            }

            if (state.date3 === null) {
                AsyncStorage.setItem("date3", date)
                return Object.assign({}, state, {
                    date3: date

                })
            }

            if (state.date4 === null) {
                AsyncStorage.setItem("date4", date)
                return Object.assign({}, state, {
                    date4: date

                })
            }

        case 'SETENDDATE':
            return Object.assign({}, state, {
                enddate: action.value
            })

        default:
            return state;
    }
}

function appender(date) {
    if (date == 1) {
        date = date + "st"
    }
    if (date == 2) {
        date = date + "nd"
    }
    if (date == 3) {
        date = date + "rd"
    }
    if (date > 3) {
        date = date + "th"
    }

    return date;
}

let store = createStore(counter, initState);

export default store;
