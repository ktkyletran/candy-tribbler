import User from '../models/userModel.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const signUp = (req,res) => {
  const { firstName, lastName, email, password, confirmPassword, isCreator  } = req.body;
}