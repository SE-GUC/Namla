const axios = require("axios");

const functions = {
  getCart: async id => {
    
    const cart = await axios.get("http://localhost:5000/api/Cart/" + id);
    return cart;
  },
  createCart: async () => {
    const cart = await axios.post("http://localhost:5000/api/Cart");
    return cart;
  },
  createProduct: async () => {
    const product = await axios.post("http://localhost:5000/api/products", {
      "name": "chips",
      "type": "food",
      "price": 3
    });
    return product;
  },
  updateCart: async (cId, pId) => {
    const cart = await axios.put(
      "http://localhost:5000/api/Cart/" + cId + "/" + pId
    );
    return cart;
  },
  deleteProduct: async(cId,pId) =>{
    const cart = await axios.delete("http://localhost:5000/api/Cart/" + cId + "/" + pId)
    return cart;
  }
};
module.exports = functions;
