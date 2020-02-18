/**
 * $ truffle test
 *   OR
 * $ truffle test ./test/hello.js
 */
const Hello = artifacts.require('Hello');

contract('Hello', async (accounts) => {
    /**
     * getName
     */
    it('should initialize name to ethan', async () => {
        const helloInstance = await Hello.deployed();

        // function without argument call
        const name = await helloInstance.getName.call();
        
        // if name was public, it can call like this:
        // const name = await helloInstance.name.call()

        assert.equal(name, 'ethan', 'the name was not ethan');
    });

    /**
     * setName, getName
     */
    it('should set new name to bob', async () => {
        const helloInstance = await Hello.deployed();

        // function with argument call
        await helloInstance.setName('bob');

        // function without argument call
        const name = await helloInstance.getName.call();
        
        assert.equal(name, 'bob', 'new name setted was not bob');
    });

    /**
     * get balance
     */
    it('should initialize owner balance to 5000', async () => {
        const helloInstance = await Hello.deployed();
        
        // property call with key
        const balance = await helloInstance.balance.call(accounts[0])

        assert.equal(
            balance.valueOf(), // valueOf() balance
            5000,
            'the owner balance was not 5000'
        );
    });
})