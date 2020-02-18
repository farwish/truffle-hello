pragma solidity >=0.4.21 <0.7.0;

contract Hello {
  string public name;
  mapping (address => uint256) public balance;

  constructor() public {
    name = "ethan";
    balance[msg.sender] = 5000;
  }

  function getName() public view returns (string memory) {
    return name;
  }

  function setName(string memory _name) public {
    name = _name;
  }

}
