//SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "hardhat/console.sol";

contract Messenger {
    event newMessage(string message, address sender);

    string private message;

    constructor(string memory _message) {
        console.log("Deploying a Messenger with message:", _message);
        message = _message;
    }

    function readMessage() public view returns (string memory) {
        return message;
    }

    function writeMessage(string memory _message) external {
        console.log("Changing greeting from '%s' to '%s'", message, _message);
        message = _message;
        emit newMessage(_message, msg.sender);
    }
}