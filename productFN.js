const axios = require('axios');

const functions = {
        add: (x,y) => x+y,
        getProduct: async () => {
        const response = await axios.get('http://localhost:3000/api/products/')
        return response
        },
        deleteProduct: async () => {
        await axios.delete('http://localhost:3000/api/products/5caa7906831ae60598e3f1f8')
        },
        updateProduct: async () => {
                const newProduct = {
                        "price": 19
                }
        await axios.put('http://localhost:3000/api/products/5caa78ef831ae60598e3f1f7',newProduct)
        },
        createProduct: async () => {
        const newProduct = {
                "name": "ali",
                "category": "bane2adm",
                "price": 150
        }
        await axios.post('http://localhost:3000/api/products/',newProduct)
        },
};
module.exports = functions;
