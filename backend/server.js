import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectClaudinary from './config/cloudinary.js'
import userRouter from './routes/userRoute.js'
import productRouter from './routes/productRoute.js'

// App Config
const app = express()
const port = process.env.PORT || 4000
connectDB()
connectClaudinary()

// Middlewares
app.use(express.json())
app.use(cors())

// API EndPoints
app.use('/api/user', userRouter)
app.use('/api/product', productRouter)

app.get('/',(req,res)=>{
    res.send("API Cooking")
})

app.listen(port, ()=>console.log('Server started on PORT : '+ port))