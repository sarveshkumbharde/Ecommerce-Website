import express from "express";
import { placeOrder, placeOrderStripe, placeOrderRazorpay, allOrders, userOrders, updateStatus, verifyStripe, verifyRazorpay } from "../controllers/order.controller.js";
import adminAuth from "../middleware/adminAuth.js";
import authUser from "../middleware/auth.js";
const orderRouter = express.Router()

//Admin Features
orderRouter.post('/list',adminAuth,allOrders)
orderRouter.post('/status',adminAuth,updateStatus)

//Payment Features
orderRouter.post('/place',authUser,placeOrder)
orderRouter.post('/stripe',authUser,placeOrderStripe)
orderRouter.post('/verify-stripe',authUser,verifyStripe)
orderRouter.post('/razorpay',authUser,placeOrderRazorpay)
orderRouter.post('/verify-razorpay',authUser,verifyRazorpay)


//User Features
orderRouter.post('/userorders',authUser,userOrders)

export default orderRouter
 