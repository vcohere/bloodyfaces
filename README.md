# BloodyFaces Smart Contract 👊

## Development

First install the local dependencies
`npm install`

Run the unit tests with `truffle test`

To run the project :
- Start Ganache
- Migrate the contract `truffle migrate`
- Interact with the contract `truffle console`

## Before Deploying

Remember to change the NFT Total Supply to the actual amount (3333).

Keep a low total supply for development, or the tests will take forever.

Change that supply in the unit tests too and run the tests for a final check.

## Specs

Anyone can mint a Bloody Face by calling mintBloodyFace.

A user can only mint 1 NFT.

TODO: Do not allow NFT transfer to a wallet that already owns a Bloody Face.
