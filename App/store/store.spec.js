/**
 * Created by sanjithkumar017 on 16/9/17.
 */
import {counter} from './store'

describe('reducers', ()=> {
    describe('counter', ()=> {

        it('should provide the initial state', ()=> {
            expect(counter(undefined, {})).toEqual({
                count: 0,
                countleft: 41,
                lang: 0,
                date1: null, date2: null, date3: null, date4: null,
                startdate: null,
                enddate: null


            })
        })

        it('should handle increment', ()=> {
            expect(counter({
                count: 2,
                countleft: 39,
                lang: 0,
                date1: null, date2: null, date3: null, date4: null,
                startdate: null,
                enddate: null

            }, {type: 'INCREMENT'})).toEqual({
                count: 3,
                countleft: 38,
                lang: 0,
                date1: null, date2: null, date3: null, date4: null,
                startdate: null,
                enddate: null
            })
        })

        it('should handle reset', ()=> {
            expect(counter({
                count: 2,
                countleft: 39,
                lang: 0,
                date1: null, date2: null, date3: null, date4: null,
                startdate: null,
                enddate: null
            }, {type: 'RESET'})).toEqual({
                count: 0,
                countleft: 41,
                lang: 0,
                date1: null, date2: null, date3: null, date4: null,
                startdate: null,
                enddate: null
            })
        })
        it('should handle unknown operations', ()=> {
            expect(counter({
                count: 2,
                countleft: 39,
                lang: 0,
                date1: null, date2: null, date3: null, date4: null,
                startdate: null,
                enddate: null
            }, {type: 'unknown'})).toEqual({
                count: 2,
                countleft: 39,
                lang: 0,
                date1: null, date2: null, date3: null, date4: null,
                startdate: null,
                enddate: null
            })
        })

        it('should set date1', ()=> {
            expect(counter({
                count: 41,
                countleft: 0,
                lang: 0,
                date1: null, date2: null, date3: null, date4: null,
                startdate: null,
                enddate: null
            }, {type: 'SETNEWDATE'})).toEqual({
                count: 41,
                countleft: 0,
                lang: 0,
                date1: "16th", date2: null, date3: null, date4: null,
                startdate: "16th October",
                enddate: "31st October"
            })
        })

        it('should set date2', ()=> {
            expect(counter({
                count: 41,
                countleft: 0,
                lang: 0,
                date1: "16th", date2: null, date3: null, date4: null,
                startdate: "16th October",
                enddate: "31st October"
            }, {type: 'SETNEWDATE'})).toEqual({
                count: 41,
                countleft: 0,
                lang: 0,
                date1: "16th", date2: "16th", date3: null, date4: null,
                startdate: "16th October",
                enddate: "31st October"
            })
        })

        it('should set date3', ()=> {
            expect(counter({
                count: 41,
                countleft: 0,
                lang: 0,
                date1: "16th", date2: "16th", date3: null, date4: null,
                startdate: "16th October",
                enddate: "31st October"
            }, {type: 'SETNEWDATE'})).toEqual({
                count: 41,
                countleft: 0,
                lang: 0,
                date1: "16th", date2: "16th", date3: "16th", date4: null,
                startdate: "16th October",
                enddate: "31st October"
            })
        })

        it('should set date4', ()=> {
            expect(counter({
                count: 41,
                countleft: 0,
                lang: 0,
                date1: "16th", date2: "16th", date3: "16th", date4: null,
                startdate: "16th October",
                enddate: "31st October"
            }, {type: 'SETNEWDATE'})).toEqual({
                count: 41,
                countleft: 0,
                lang: 0,
                date1: "16th", date2: "16th", date3: "16th", date4: "16th",
                startdate: "16th October",
                enddate: "31st October"
            })
        })

        it('should load up date1', ()=> {
            expect(counter({
                count: 41,
                countleft: 0,
                lang: 0,
                date1: null, date2: null, date3: null, date4: null,
                startdate: null,
                enddate: null
            }, {type: 'SETDATE1', value: "16th"})).toEqual({
                count: 41,
                countleft: 0,
                lang: 0,
                date1: "16th", date2: null, date3: null, date4: null,
                startdate: null,
                enddate: null
            })
        })

        it('should load up date2', ()=> {
            expect(counter({
                count: 41,
                countleft: 0,
                lang: 0,
                date1: "16th", date2: null, date3: null, date4: null,
                startdate: null,
                enddate: null
            }, {type: 'SETDATE2', value: "17th"})).toEqual({
                count: 41,
                countleft: 0,
                lang: 0,
                date1: "16th", date2: "17th", date3: null, date4: null,
                startdate: null,
                enddate: null
            })
        })

        it('should load up date1', ()=> {
            expect(counter({
                count: 41,
                countleft: 0,
                lang: 0,
                date1: "16th", date2: "17th", date3: null, date4: null,
                startdate: null,
                enddate: null
            }, {type: 'SETDATE3', value: "18th"})).toEqual({
                count: 41,
                countleft: 0,
                lang: 0,
                date1: "16th", date2: "17th", date3: "18th", date4: null,
                startdate: null,
                enddate: null
            })
        })

        it('should load up date1', ()=> {
            expect(counter({
                count: 41,
                countleft: 0,
                lang: 0,
                date1: "16th", date2: "17th", date3: "18th", date4: null,
                startdate: null,
                enddate: null
            }, {type: 'SETDATE4', value: "19th"})).toEqual({
                count: 41,
                countleft: 0,
                lang: 0,
                date1: "16th", date2: "17th", date3: "18th", date4: "19th",
                startdate: null,
                enddate: null
            })
        })

    })
})
