import express from 'express';
import {
  getNotes,
  createNote,
  updateNote,
  deleteNote,
  searchNotes,
} from '../controllers/noteController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.use(protect);

router.get('/', getNotes);
router.post('/', createNote);
router.put('/', updateNote);
router.delete('/', deleteNote);
router.get('/search', searchNotes); // VG-krav

export default router;
