# BloodyFaces Smart Contract 👊

## Development

First install the local dependencies
`npm install`

Run the unit tests with `truffle test`

To run the project :
- Start Ganache
- Migrate the contract `truffle migrate`
- Interact with the contract `truffle console`

To run the website :
- Go to client/
- Run `yarn start`

## Before Deploying

Remember to change the NFT Total Supply to the actual amount (3333).

Keep a low total supply for development, or the tests will take forever.

Change that supply in the unit tests too and run the tests for a final check.

## Deploying to Firebase

Access the API here : https://bloodyfaces-4dc6b.web.app/api/nft/0

Just run `yarn deploy`

If you only want to deploy the Firebase Functions, run `yarn deploy-functions`

## Specs

Anyone can mint a Bloody Face by calling mintBloodyFace.

A user can only mint 1 NFT.

TODO: Do not allow NFT transfer to a wallet that already owns a Bloody Face.
