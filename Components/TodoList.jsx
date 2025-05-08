import React from "react";
import { List, ListItem, ListItemText, IconButton, Checkbox } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const TodoList = ({ todos, onToggle, onDelete }) => (
  <List>
    {todos.map((todo, index) => (
      <ListItem key={index} secondaryAction={
        <IconButton edge="end" aria-label="delete" onClick={() => onDelete(index)}>
          <DeleteIcon />
        </IconButton>
      }>
        <Checkbox checked={todo.completed} onChange={() => onToggle(index)} />
        <ListItemText primary={todo.title} secondary={todo.description} sx={{ textDecoration: todo.completed ? 'line-through' : 'none' }} />
      </ListItem>
    ))}
  </List>
);

export default TodoList;
