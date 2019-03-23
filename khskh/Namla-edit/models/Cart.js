const uuid = require('uuid')

class Cart {
  constructor(id) {
    this.id = id,
    this.confirmed = false;
    this.totalPrice = 0;
    this.products = []

  }
}

module.exports = Cart;
