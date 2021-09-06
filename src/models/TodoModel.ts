import { Model, STRING, INTEGER, BOOLEAN } from 'sequelize';
import sequelize from '@/db';

class Todo extends Model {}

Todo.init({
  id: {
    type: INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: STRING,
  finished: BOOLEAN,
}, {
  sequelize,
})

export default Todo;