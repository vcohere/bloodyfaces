const {expectRevert} = require('@openzeppelin/test-helpers');
const BloodyFace = artifacts.require("BloodyFace");

contract("BloodyFace", function (accounts) {
  let [alice, bob] = accounts;

  it("should be deployed", async function () {
    await BloodyFace.deployed();
    return assert.isTrue(true);
  });
  it("owner should be able to mint a BloodyFace", async () => {
    const instance = await BloodyFace.new(),
          amount = 10;

    for (var i = 0; i < amount; i++) {
      await instance.mintBloodyFace("#");
    }

    const balance = await instance.balanceOf.call(alice);

    assert.equal(balance.valueOf(), amount);
  });
  it("non-owner should not be able to mint a BloodyFace", async () => {
    const instance = await BloodyFace.new();

    await expectRevert(instance.mintBloodyFace("#", {from: bob}), "Ownable: caller is not the owner");
  });
  it("owner should not be able to mint more than allowed supply", async () => {
    const instance = await BloodyFace.new(),
          amount = 10;

    for (var i = 0; i < amount; i++) {
      await instance.mintBloodyFace("#");
    }

    await expectRevert(instance.mintBloodyFace("#"), "All the Bloody Faces have been minted.");
  });
});
