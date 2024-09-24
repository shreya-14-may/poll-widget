import React from "react";
import { Route, Routes } from "react-router-dom";
import AddPoll from "./components/AddPoll";
import PollList from "./components/PollList";
import PollResults from "./components/PollResults";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/add-poll" element={<AddPoll />} />
      <Route path="/poll-widget" element={<PollList />} />
      <Route path="/poll-results" element={<PollResults />} />
      <Route path="/" element={<PollList />} />
    </Routes>
  );
};

export default AppRoutes;
