const {expectRevert} = require('@openzeppelin/test-helpers');
const BloodyFace = artifacts.require("BloodyFace");

contract("BloodyFace", function (accounts) {
  let [alice, bob] = accounts;

  it("should be deployed", async function () {
    await BloodyFace.deployed();
    return assert.isTrue(true);
  });
  it("user should be able to mint a BloodyFace", async () => {
    const instance = await BloodyFace.new(),
          tokenURI = "#";

    const mintingReturn = await instance.mintBloodyFace(tokenURI);
    const tokenId = mintingReturn.logs[0].args.tokenId.toNumber();

    const balance = await instance.balanceOf.call(alice);
    const tokenOwner = await instance.ownerOf.call(tokenId);

    assert.equal(balance.toNumber(), 1, "User balance should return 1.");
    assert.equal(tokenOwner, alice, "NFT should be owned by the user.");
  });
  it("user should not be able to mint more than one BloodyFace", async () => {
    const instance = await BloodyFace.new(),
          tokenURI = "#";

    await instance.mintBloodyFace(tokenURI);

    await expectRevert(instance.mintBloodyFace(tokenURI), "You already own a Bloody Face.");
  });
  // TODO : Create test to verify that users cannot create more than Total Supply.
});
