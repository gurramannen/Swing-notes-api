import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';
import { User } from './userModel.js';

export const Note = sequelize.define('Note', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  text: {
    type: DataTypes.STRING(300),
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  modifiedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

User.hasMany(Note);
Note.belongsTo(User);
