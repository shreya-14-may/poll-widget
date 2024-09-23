// src/AppRoutes.js

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AddPoll from './components/AddPoll';
import PollList from './components/PollList';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/add-poll" element={<AddPoll />} />
      <Route path="/poll-widget" element={<PollList />} />
      <Route path="/" element={<PollList />} />
    </Routes>
  );
};

export default AppRoutes;
