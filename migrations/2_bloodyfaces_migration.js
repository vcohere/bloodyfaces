var BloodyFace = artifacts.require("BloodyFace");

module.exports = async function(deployer) {
  await deployer.deploy(BloodyFace);
};
