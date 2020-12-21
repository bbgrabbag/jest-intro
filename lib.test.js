const {sum} = require('./lib');

describe('Sum function', () => {
    it('Should add 2 and 2 to equal 4', () =>{
        const actual = sum(2, 2);
        expect(actual).toBe(4);
    });

    it('Should add 0, 0 to equal 0', () =>{
        const actual = sum(0, 0);
        expect(actual).toBe(0);
    })

    it('Should add 5, 5 to equal 10', () =>{
        const actual = sum('5', '5');
        expect(actual).toBe(10);
    })
});
