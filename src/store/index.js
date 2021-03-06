import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'
import movie from './modules/movie'
import category from './modules/category'
import brand from './modules/brand'
import product from './modules/product'
import welProduct from './modules/welProduct'
import post from './modules/post'
import cart from './modules/cart'
import order from './modules/order'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    imgRoot: 'http://img.airtlab.com/productlogo/'
  },
  modules: {
    post,
    user,
    movie,
    category,
    brand,
    product,
    welProduct,
    cart,
    order
  }
})
