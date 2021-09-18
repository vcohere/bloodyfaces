var BloodyFaces = artifacts.require("BloodyFaces");

module.exports = async function(deployer) {
  await deployer.deploy(BloodyFaces);
};
