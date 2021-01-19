import User from "../models/User";

export const createUser = async (req, res) => {
  const { username, email, password, roles } = req.body;
  const newUser = new User({ name, email, price, imgURL });
  const userSaved = await newUser.save();
  res.status(201).json(userSaved);
};

export const getUsers = async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
};

export const getUserById = async (req, res) => {
  const { userId } = req.params;

  const users = await User.findById(userId);
  res.status(200).json(users);
};

export const updateUserById = async (req, res) => {
  const { userId } = req.params;

  const updatedUser = await User.findByIdAndUpdate(userId, req.body, {
    new: true,
  });
  res.status(204).json(updatedUser);
};

export const deleteUserById = async (req, res) => {
  const { userId } = req.params;
  await User.findByIdAndDelete(userId);
  res.status(204).json();
};
