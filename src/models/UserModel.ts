import { Model, STRING, INTEGER } from 'sequelize';
import sequelize from '@/db';

class Todo extends Model {}

Todo.init({
  id: {
    type: INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  
  username: STRING,
  name: STRING,
  avatar: STRING,
  email: STRING,
}, {
  sequelize,
})

export default Todo;