import { sum } from "../sum";

test("this function tests the addition of two numbers and returns it ", ()=>{
    const result=sum(6,9);

    expect(result).toBe(15);

})