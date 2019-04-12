const axios = require('axios');

const functions = {
        add: (x,y) => x+y,
        getProduct: async () => {
        const response = await axios.get('http://localhost:5000/api/products/')
        return response
        },
        deleteProduct: async () => {
        await axios.delete('http://localhost:5000/api/products/5ca0d9453b6aac1988a59a39')
        },
        updateProduct: async () => {
                const newProduct = {
                        "price": 19
                }
        await axios.put('http://localhost:5000/api/products/5c9fd76dcb8320182c753693',newProduct)
        },
        createProduct: async () => {
        const newProduct = {
                "name": "ali",
                "type": "bane2adm",
                "price": 150
        }
        await axios.post('http://localhost:5000/api/products/',newProduct)
        },
};
module.exports = functions;
