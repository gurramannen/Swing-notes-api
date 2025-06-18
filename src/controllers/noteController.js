import { Note } from '../models/noteModel.js';
import { Op } from 'sequelize';


export const getNotes = async (req, res) => {
  const notes = await Note.findAll({ where: { UserId: req.user.id } });
  res.json(notes);
};

export const createNote = async (req, res) => {
  const { title, text } = req.body;
  if (title.length > 50 || text.length > 300)
    return res.status(400).json({ message: 'För lång titel eller text.' });

  const note = await Note.create({
    title,
    text,
    UserId: req.user.id,
    createdAt: new Date(),
    modifiedAt: new Date(),
  });
  res.status(201).json(note);
};

export const updateNote = async (req, res) => {
  const { id, title, text } = req.body;
  const note = await Note.findByPk(id);

  if (!note || note.UserId !== req.user.id) return res.status(404).json({ message: 'Anteckning ej hittad.' });

  note.title = title;
  note.text = text;
  note.modifiedAt = new Date();
  await note.save();

  res.json(note);
};

export const deleteNote = async (req, res) => {
  const { id } = req.body;
  const note = await Note.findByPk(id);

  if (!note || note.UserId !== req.user.id) return res.status(404).json({ message: 'Anteckning ej hittad.' });

  await note.destroy();
  res.json({ message: 'Anteckning borttagen.' });
};

export const searchNotes = async (req, res) => {
  const { query } = req.query;
  const notes = await Note.findAll({
    where: {
      UserId: req.user.id,
      title: {
        [Op.iLike]: `%${query}%`,
      },
    },
  });
  res.json(notes);
};
