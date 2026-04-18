import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDb from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/user.routes.js'
import productRouter from './routes/product.routes.js'
import cartRouter from './routes/cart.routes.js'
import orderRouter from './routes/order.routes.js'

//App Config
const app = express()
const port = process.env.PORT || 4000     
connectDb()  
connectCloudinary() 
 
//middlewares

const allowedOrigins = process.env.FRONTEND_URLS.split(", "); 
app.use(cors({
    origin: function(origin, callback) {
  if (!origin || allowedOrigins.includes(origin)) {        
    callback(null, true);
  } else {
    callback(new Error("Not allowed by CORS"));       
  }
}
}))
app.use(express.json())           

//api endpoints 
app.get('/',(req,res)=>{
    res.send("Api working") 
})
 
app.use('/api/user', userRouter)
app.use('/api/product', productRouter)
app.use('/api/cart', cartRouter) 
app.use('/api/order', orderRouter)

app.listen(port, ()=>{ 
    console.log(`Server is running on port ${port}`)
})        
