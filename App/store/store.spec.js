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
                count1: 0, count2: 0, count3: 0, count4: 0
            })
        })

        it('should handle increment', ()=> {
            expect(counter({
                count: 2,
                countleft: 39,
                lang: 0,
                count1: 0, count2: 0, count3: 0, count4: 0
            }, {type: 'INCREMENT'})).toEqual({
                count: 3,
                countleft: 38,
                lang: 0,
                count1: 0, count2: 0, count3: 0, count4: 0
            })
        })

        it('should handle reset', ()=> {
            expect(counter({
                count: 2,
                countleft: 39,
                lang: 0,
                count1: 0, count2: 0, count3: 0, count4: 0
            }, {type: 'RESET'})).toEqual({
                count: 0,
                countleft: 41,
                lang: 0,
                count1: 0, count2: 0, count3: 0, count4: 0
            })
        })
        it('should handle unknown operations', ()=> {
            expect(counter({
                count: 2,
                countleft: 39,
                lang: 0,
                count1: 0, count2: 0, count3: 0, count4: 0
            }, {type: 'unknown'})).toEqual({
                count: 2,
                countleft: 39,
                lang: 0,
                count1: 0, count2: 0, count3: 0, count4: 0
            })
        })
    })
})
