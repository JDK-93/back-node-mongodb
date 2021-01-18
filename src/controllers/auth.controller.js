import User from "../models/User";
import jwt from "jsonwebtoken";
import config from "../config";

export const signUp = async (req, res) => {
  // Si no exite el usuario, lo creo, sino no
  const { username, email, password, roles } = req.body;

  const newUser = new User({
    username,
    email,
    password: User.encryptPassword(password),
  });
  console.log(newUser)
  
  const savedUser = await newUser.save();

  const token = jwt.sign({ id: savedUser._id }, config.SECRET, {
    expiresIn: 86400, // 24hs
  });
  res.status(200).json({token});
};

export const signIn = async (req, res) => {
  const products = await Product.find();
  res.status(200).json(products);
};
