import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  test('renders the todo list with initial todos', () => {
    render(<TodoList />);

    // Check if the initial todos are rendered
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
    expect(screen.getByText('Master React Testing')).toBeInTheDocument();
  });

  test('allows users to add a new todo', () => {
    render(<TodoList />);

    const input = screen.getByPlaceholderText('Add a new todo');
    const addButton = screen.getByText('Add Todo');

    // Add a new todo
    fireEvent.change(input, { target: { value: 'Write Tests' } });
    fireEvent.click(addButton);

    // Check if the new todo is added to the list
    expect(screen.getByText('Write Tests')).toBeInTheDocument();
  });

  test('allows users to toggle the completion status of a todo', () => {
    render(<TodoList />);

    const todoItem = screen.getByText('Learn React');

    // Toggle the completion status
    fireEvent.click(todoItem);

    // Check if the todo is marked as completed (line-through style)
    expect(todoItem).toHaveStyle('text-decoration: line-through');

    // Toggle it back to not completed
    fireEvent.click(todoItem);

    // Check if the todo is no longer marked as completed
    expect(todoItem).toHaveStyle('text-decoration: none');
  });

  test('allows users to delete a todo', () => {
    render(<TodoList />);

    const todoItem = screen.getByText('Build a Todo App');
    const deleteButton = todoItem.nextElementSibling;

    // Delete the todo
    fireEvent.click(deleteButton);

    // Check if the todo is removed from the list
    expect(screen.queryByText('Build a Todo App')).not.toBeInTheDocument();
  });
});


export default TodoList.test