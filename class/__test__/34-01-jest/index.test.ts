import {add} from '../../pages/34-01-jest/index'
// describe('test', ()=>{
//     it('small test', ()=>{
    
//     })
// })

// it('small test2', ()=>{
    
// })

it('add function test', ()=>{
    const result=add(7, 1)
    expect(result).toBe(8)
})