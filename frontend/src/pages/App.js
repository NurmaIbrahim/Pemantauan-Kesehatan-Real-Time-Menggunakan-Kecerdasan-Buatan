import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Navbar from './Navbar';
import AlertPage from './AlertPage';
import UserList from './UserList';

const App = () => {
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', age: 30 },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', age: 25 },
    { id: 3, name: 'Jack Black', email: 'jack@example.com', age: 35 },
  ];
