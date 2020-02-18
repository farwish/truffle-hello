# truffle-hello

This is a demo for truffle getting started flow.

## Choose Editor

Vscode with solidity plugin, Atom with solidity plugin, Remix, Studio, ..

## Installation

```
$ npm install -g truffle
```

Choose ethereum client (Ganache OR truffle build in `truffle develop`)

https://www.trufflesuite.com/docs/truffle/reference/choosing-an-ethereum-client


## Creating a project

```
$ mkdir truffle-hello 

$ cd truffle-hello

$ truffle init　　# without default contract

OR

$ truffle unbox <box-name>　　# box-name like MetaCoin
```
 

## Compiling Contracts

```
$ truffle compile　　# all placed in build/contracts/, dot not edit these .json files
```


## Running Migrations
 
```
$ truffle migrate [--reset]　　# run scripts that located in migrations/，Be sure have Ganache installed and running, default choose Ganache network
``` 

Deployer https://www.trufflesuite.com/docs/truffle/getting-started/running-migrations#deployer
 

## Testing Contracts

 
```
$ truffle test [./tests/hello.js]　　# NOTE:  default network is 'development', so truffle-config.js network configuration need to match the Ganache host and port
``` 

## Writing tests in javascript

```
$ truffle test
```

https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript

 
> demo: https://github.com/farwish/truffle-hello.git

> doc: https://www.trufflesuite.com/docs/truffle/getting-started/installation

> tutorial1/2/3: https://www.youtube.com/watch?v=2fSPn0-8ORs 

> link: https://www.cnblogs.com/farwish/p/12310551.html
