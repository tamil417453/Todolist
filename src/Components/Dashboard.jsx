import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Fab,
  Dialog,
  DialogContent,
  TextField,
  Button,
  IconButton,
  Card,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';

const COLORS = ['#6200ea', '#ff4081', '#00bcd4', '#cddc39', '#ffeb3b'];

export default function StyledTodoDashboard() {
  const [todos, setTodos] = useState([]);
  const [open, setOpen] = useState(false);
  const [newTask, setNewTask] = useState('');
  const navigate = useNavigate(); // ⬅️ Needed for logout

  // Load from localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('styledTodos')) || [];
    setTodos(stored);
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('styledTodos', JSON.stringify(todos));
  }, [todos]);

  const handleAddTask = () => {
    if (newTask.trim()) {
      const task = {
        id: Date.now(),
        text: newTask,
        color: COLORS[todos.length % COLORS.length],
      };
      setTodos([task, ...todos]);
      setNewTask('');
      setOpen(false);
    }
  };

  const handleDelete = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/');
  };

  return (
    <Box
      sx={{
        minHeight: '100dvh',
        width: '100dvw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        pt: 6,
        backgroundColor: '#f9f9f9',
        position: 'relative',
      }}
    >
      {/* Logout Button */}
      <Button
        variant="contained"
        color="secondary"
        onClick={handleLogout}
        sx={{ position: 'absolute', top: 16, right: 16 }}
      >
        Logout
      </Button>

      {/* Heading */}
      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 3 }}>
        Todo-List <span style={{ color: '#6200ea' }}>Tasks</span>
      </Typography>

      {/* Task Card */}
      <Card
        sx={{
          width: '80%',
          maxWidth: 600,
          p: 3,
          borderRadius: 4,
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
          Your Tasks
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 2,
            width: '100%',
          }}
        >
          {todos.map((todo) => (
            <Box
              key={todo.id}
              sx={{
                backgroundColor: todo.color,
                color: 'white',
                p: 2,
                borderRadius: '25px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                fontWeight: 'bold',
                fontSize: '16px',
                minWidth: '120px',
                maxWidth: '160px',
                position: 'relative',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
            >
              {todo.text}
              <IconButton
                onClick={() => handleDelete(todo.id)}
                size="small"
                sx={{ color: 'white' }}
              >
                <DeleteIcon fontSize="small" />
              </IconButton>
            </Box>
          ))}
        </Box>
      </Card>

      {/* Floating Add Button */}
      <Fab
        color="secondary"
        aria-label="add"
        sx={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          backgroundColor: '#ff4081',
          color: 'white',
          '&:hover': {
            backgroundColor: '#f50057',
          },
        }}
        onClick={() => setOpen(true)}
      >
        <AddIcon />
      </Fab>

      {/* Add Task Dialog */}
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogContent>
          <TextField
            autoFocus
            label="New Task"
            fullWidth
            variant="outlined"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            sx={{ mb: 2 }}
          />
          <Button
            variant="contained"
            onClick={handleAddTask}
            fullWidth
            sx={{ backgroundColor: '#6200ea' }}
          >
            Add Task
          </Button>
        </DialogContent>
      </Dialog>
    </Box>
  );
}
