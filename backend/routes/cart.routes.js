import express from 'express'
import { addToCart, getUserCart, updateCart } from '../controllers/cart.controller.js'
import authUser from '../middleware/auth.js'

const cartRouter = express.Router()

cartRouter.post('/add-to-cart', authUser, addToCart)
cartRouter.post('/get-cart', authUser, getUserCart)
cartRouter.post('/update-cart', authUser, updateCart)

export default cartRouter