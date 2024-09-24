import React, { useEffect, useState } from "react";
import PollView from "./PollView";
import pollsData from "../polls.json";

const PollList = () => {
  const [polls, setPolls] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pollsPerPage = 3;
  useEffect(() => {
    const storedPolls = JSON.parse(localStorage.getItem("polls"));
    if (!storedPolls || storedPolls.length === 0) {
      localStorage.setItem("polls", JSON.stringify(pollsData));
      setPolls(pollsData);
    } else {
      setPolls(storedPolls);
    }
  }, []);

  const indexOfLastPoll = currentPage * pollsPerPage;
  const indexOfFirstPoll = indexOfLastPoll - pollsPerPage;
  const currentPolls = polls.slice(indexOfFirstPoll, indexOfLastPoll);

  const handleNextPage = () => {
    if (indexOfLastPoll < polls.length) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  return (
    <div className="container-sm container-md container-lg container-xl bottom-fixed">
      <div className="d-flex flex-column align-items-center">
        {currentPolls.map((poll) => (
          <PollView key={poll.id} poll={poll} />
        ))}
      </div>
      <div className="justify-content-between mt-3 pb-2 pt-5">
        <button
          className="pagination-button"
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          className="pagination-button"
          onClick={handleNextPage}
          disabled={indexOfLastPoll >= polls.length}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PollList;
