const {expectRevert} = require('@openzeppelin/test-helpers');
const BloodyFace = artifacts.require("BloodyFace");

contract("BloodyFace", function (accounts) {
  const nftPrice = 30000000000000000;
  let [alice, bob, charles] = accounts;

  it("should be deployed", async function () {
    await BloodyFace.deployed();
    return assert.isTrue(true);
  });
  it("user should be able to mint a BloodyFace", async () => {
    const instance = await BloodyFace.new();

    const mintingReturn = await instance.mintBloodyFace({value: nftPrice});
    const tokenId = mintingReturn.logs[0].args.tokenId.toNumber();

    const balance = await instance.balanceOf.call(alice);
    const tokenOwner = await instance.ownerOf.call(tokenId);

    assert.equal(balance.toNumber(), 1, "User balance should return 1.");
    assert.equal(tokenOwner, alice, "NFT should be owned by the user.");
  });
  it("user should not be able to mint more than 3 BloodyFace", async () => {
    const instance = await BloodyFace.new();

    await instance.mintBloodyFace({value: nftPrice});
    await instance.mintBloodyFace({value: nftPrice});
    await instance.mintBloodyFace({value: nftPrice});

    await expectRevert(instance.mintBloodyFace({value: nftPrice}), "You already own 3 Bloody Faces.");
  });
  it("users should not be able to mint more than total supply", async () => {
    // Set supply to 5 in the contract to make this test pass
    const instance = await BloodyFace.new();

    await instance.mintBloodyFace({from: alice, value: nftPrice});
    await instance.mintBloodyFace({from: alice, value: nftPrice});
    await instance.mintBloodyFace({from: alice, value: nftPrice});
    await instance.mintBloodyFace({from: bob, value: nftPrice});
    await instance.mintBloodyFace({from: bob, value: nftPrice});

    await expectRevert(instance.mintBloodyFace({from: charles, value: nftPrice}), "All the Bloody Faces have been minted.");
  });
  it("should have a baseURI set", async () => {
    const instance = await BloodyFace.new();

    const baseURI = await instance.getApiUrl();

    assert.equal(baseURI, "https://bloodyfaces.io/api/nft/");
  });
  it("should be able to set a baseURI", async () => {
    const instance = await BloodyFace.new();

    await instance.setApiUrl("#");

    const baseURI = await instance.getApiUrl();

    assert.equal(baseURI, "#");
  });
  it("should withdraw funds from the contract", async () => {
    const instance = await BloodyFace.new();

    await instance.mintBloodyFace({value: nftPrice});

    const balanceBefore = parseInt(await web3.eth.getBalance(alice));
    await instance.withdrawFunds();
    const balanceAfter = parseInt(await web3.eth.getBalance(alice));

    assert.isAtLeast(balanceAfter, balanceBefore);
  });
});
