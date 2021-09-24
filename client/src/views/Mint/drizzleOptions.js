import BloodyFace from "../../contracts/BloodyFace.json";

const options = {
  contracts: [BloodyFace],
  web3: {
    fallback: {
      type: "ws",
      url: "ws://127.0.0.1:9545",
    },
  },
};

export default options;
