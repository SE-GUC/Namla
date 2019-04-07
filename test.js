const funcs = require('./productFN');
const express = require('express')
const mongoose = require('mongoose')
const passport = require('passport')
const cors = require('cors')

const products = [
    'pot',
    'cup',
    'bracelet',
    'lamp',
    'scarf',
  ];
  
  test('The list of products has pot on it', () => {
    expect(products).toContain('pot');
  });


//Working with async
test('reading a product', async () => {
await funcs.getProduct()
});
  test('deleting a product', async () => {
  await funcs.deleteProduct()
});
  test('updating a product', async () => {
  await funcs.updateProduct()
});
  test('creating a product', async () => {
    await funcs.createProduct()
});    


