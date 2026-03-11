import Todo from '../models/Todo';

export const getAllTodos = async () => {
    return await Todo.find({});
};

export const createTodo = async (todoData) => {
    const todo = new Todo(todoData);
    return await todo.save();
};

export const updateTodo = async (id, updateData) => {
    return await Todo.findByIdAndUpdate(id, updateData, { new: true });
};

export const deleteTodo = async (id) => {
    return await Todo.findByIdAndDelete(id);
};