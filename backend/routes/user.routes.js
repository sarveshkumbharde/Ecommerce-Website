import express from 'express'
import { loginUser, registerUser, adminLogin } from '../controllers/user.controller.js'

const userRouter = express.Router();

userRouter.post('/login', loginUser);
userRouter.post('/register', registerUser);
userRouter.post('/adminLogin', adminLogin);

export default userRouter; 