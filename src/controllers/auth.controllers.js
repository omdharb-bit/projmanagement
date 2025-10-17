import { User } from "../models/user.model.js";
import { ApiResponse } from "../utils/api-response.js";
import { ApiError } from "../utils/api-error.js";
import { asynchandler } from "../utils/async-handler.js";



const registerUser = asynchandler(async (req, res) => {
  const { email, username, password, role } = req.body
  
const existedUser=await User.findOne({
  $or:[{username},{email}]
})
  
  if (existedUser) {
  throw new ApiError(409,"User with email or username already exists",[])
  }
  
 const user=await User.create({
    email,
    password,
    username,
    isEmailVerified: false
 })
  
 const { unHashedToken, hashedToken, tokenExpiry }= user.generateTemporarayToken()
  
})