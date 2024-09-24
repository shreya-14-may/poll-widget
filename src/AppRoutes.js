import React from "react";
import { Route, Routes , useNavigate } from "react-router-dom";
import AddPoll from "./components/AddPoll";
import PollList from "./components/PollList";
import PollResults from "./components/PollResults";
import { useEffect } from "react";

const AppRoutes = () => {
  const navigate = useNavigate();
  const isAdmin = process.env.REACT_APP_IS_ADMIN === 'true';
  useEffect(()=>{
    if(isAdmin != true){
    navigate(`/poll-widget`);
    }
    },[]);
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
