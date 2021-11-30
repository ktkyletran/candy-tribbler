import User from '../models/userModel.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const SALT = process.env.SALT;

export const signUp = async (req,res) => {
  const { firstName, lastName, email, password, isCreator } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(404).json({ message: 'User already exist.' });
    const hashedPassword = await bcrypt.hash(password, 12);
    const result = await User.create({ firstName, lastName, email, password: hashedPassword, name: `${firstName} ${lastName}`, isCreator })
    const token = jwt.sign({ email: result.email, id: result._id }, process.env.SECRET, { expiresIn: '1h' });
    res.status(200).json({ userData: result, token })
  } catch (err) {
    console.log(err)
  }
}

export const signIn = async (req,res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (!existingUser) return res.status(404).json({ message: 'User does not exist.' });
    const passwordCheck = await bcrypt.compare(password, existingUser.password);
    if(!passwordCheck) return res.status(400).json({ message: 'Invalid password' });
    const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, process.env.SECRET, { expiresIn: '1h' });
    res.status(200).json({ userData: existingUser, token })
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong. Please try again later.' })
  }
}