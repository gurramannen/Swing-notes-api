import bcrypt from 'bcryptjs';
import { User } from '../models/userModel.js';
import { generateToken } from '../config/jwt.js';

export const signup = async (req, res) => {
  try {
    const { email, password } = req.body;
    const exists = await User.findOne({ where: { email } });
    if (exists) return res.status(400).json({ message: 'Användare finns redan.' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ email, password: hashedPassword });

    res.status(201).json({ token: generateToken(user.id) });
  } catch (err) {
    res.status(500).json({ message: 'Registrering misslyckades', error: err.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(404).json({ message: 'Användare ej hittad.' });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json({ message: 'Fel lösenord.' });

    res.json({ token: generateToken(user.id) });
  } catch (err) {
    res.status(500).json({ message: 'Inloggning misslyckades', error: err.message });
  }
};
