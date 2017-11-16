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
                date1: "16th November", date2: null, date3: null, date4: null,
                startdate: "16th November",
                enddate: "01st December"
            })
        })

        it('should set date2', ()=> {
            expect(counter({
                count: 41,
                countleft: 0,
                lang: 0,
                date1: "16th November", date2: null, date3: null, date4: null,
                startdate: "16th November",
                enddate: "01st December"
            }, {type: 'SETNEWDATE'})).toEqual({
                count: 41,
                countleft: 0,
                lang: 0,
                date1: "16th November", date2: "16th November", date3: null, date4: null,
                startdate: "16th November",
                enddate: "01st December"
            })
        })

        it('should set date3', ()=> {
            expect(counter({
                count: 41,
                countleft: 0,
                lang: 0,
                date1: "16th November", date2: "16th November", date3: null, date4: null,
                startdate: "16th November",
                enddate: "01st December"
            }, {type: 'SETNEWDATE'})).toEqual({
                count: 41,
                countleft: 0,
                lang: 0,
                date1: "16th November", date2: "16th November", date3: "16th November", date4: null,
                startdate: "16th November",
                enddate: "01st December"
            })
        })

        it('should set date4', ()=> {
            expect(counter({
                count: 41,
                countleft: 0,
                lang: 0,
                date1: "16th November", date2: "16th November", date3: "16th November", date4: null,
                startdate: "16th November",
                enddate: "01st December"
            }, {type: 'SETNEWDATE'})).toEqual({
                count: 41,
                countleft: 0,
                lang: 0,
                date1: "16th November", date2: "16th November", date3: "16th November", date4: "16th November",
                startdate: "16th November",
                enddate: "01st December"
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
            }, {type: 'SETDATE1', value: "16th November"})).toEqual({
                count: 41,
                countleft: 0,
                lang: 0,
                date1: "16th November", date2: null, date3: null, date4: null,
                startdate: null,
                enddate: null
            })
        })

        it('should load up date2', ()=> {
            expect(counter({
                count: 41,
                countleft: 0,
                lang: 0,
                date1: "16th November", date2: null, date3: null, date4: null,
                startdate: null,
                enddate: null
            }, {type: 'SETDATE2', value: "17th November"})).toEqual({
                count: 41,
                countleft: 0,
                lang: 0,
                date1: "16th November", date2: "17th November", date3: null, date4: null,
                startdate: null,
                enddate: null
            })
        })

        it('should load up date3', ()=> {
            expect(counter({
                count: 41,
                countleft: 0,
                lang: 0,
                date1: "16th November", date2: "17th November", date3: null, date4: null,
                startdate: null,
                enddate: null
            }, {type: 'SETDATE3', value: "18th November"})).toEqual({
                count: 41,
                countleft: 0,
                lang: 0,
                date1: "16th November", date2: "17th November", date3: "18th November", date4: null,
                startdate: null,
                enddate: null
            })
        })

        it('should load up date4', ()=> {
            expect(counter({
                count: 41,
                countleft: 0,
                lang: 0,
                date1: "16th November", date2: "17th November", date3: "18th November", date4: null,
                startdate: null,
                enddate: null
            }, {type: 'SETDATE4', value: "19th November"})).toEqual({
                count: 41,
                countleft: 0,
                lang: 0,
                date1: "16th November", date2: "17th November", date3: "18th November", date4: "19th November",
                startdate: null,
                enddate: null
            })
        })

    })
})
