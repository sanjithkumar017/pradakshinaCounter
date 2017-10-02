/**
 * Created by sanjithkumar017 on 16/9/17.
 */
import {counter} from './store'

describe('reducers', ()=> {
    describe('counter', ()=> {

        it('should provide the initial state', ()=> {
            expect(counter(undefined, {})).toBe(0)
        })

        it('should handle increment', ()=> {
            expect(counter(1, {type: 'INCERMENT'})).toBe(2)
        })
        it('should handle decrement', ()=> {
            expect(counter(1, {type: 'DECERMENT'})).toBe(0)
        })
        it('should handle reset', ()=> {
            expect(counter(99, {type: 'RESET'})).toBe(0)
        })
        it('should handle unknown operations', ()=> {
            expect(counter(9, {type: 'unknown'})).toBe(9)
        })
    })
})
