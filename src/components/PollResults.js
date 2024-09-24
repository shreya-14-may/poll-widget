// src/components/PollResults.js
import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Title } from "chart.js";

Chart.register(ArcElement, Title);

const PollResults = () => {
  const polls = JSON.parse(localStorage.getItem("polls")) || [];

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;

  if (polls.length === 0) {
    return <div>No poll data available.</div>;
  }
  const currentPolls = polls.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const handleNext = () => {
    if ((currentPage + 1) * itemsPerPage < polls.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        {currentPolls.map((pollData, pollIndex) => {
          const totalVotes = pollData.options.reduce(
            (acc, option) => acc + option.votes,
            0
          );

          const data = {
            labels: pollData.options.map((option) => option.text),
            datasets: [
              {
                label: "Votes",
                data: pollData.options.map((option) => option.votes),
                backgroundColor: [
                  "rgba(255, 99, 132, 0.6)",
                  "rgba(54, 162, 235, 0.6)",
                  "rgba(255, 206, 86, 0.6)",
                  "rgba(75, 192, 192, 0.6)",
                  "rgba(153, 102, 255, 0.6)",
                ],
                borderColor: [
                  "rgba(255, 99, 132, 1)",
                  "rgba(54, 162, 235, 1)",
                  "rgba(255, 206, 86, 1)",
                  "rgba(75, 192, 192, 1)",
                  "rgba(153, 102, 255, 1)",
                ],
                borderWidth: 1,
              },
            ],
          };

          return (
            <div className="col-md-4 mb-4" key={pollIndex}>
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">{pollData.question}</h5>
                  <div style={{ maxWidth: "200px", margin: "0 auto" }}>
                    {" "}
                    <Pie data={data} />
                  </div>
                  <h6 className="mt-2">Total Votes: {totalVotes}</h6>
                  <ul className="list-group mt-2">
                    {pollData.options.map((option, index) => (
                      <li key={index} className="list-group-item">
                        {option.text}: {option.votes} votes
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="justify-content-between mt-3 fixed-bottom pb-2 pt-2">
        <button
          className="btn btn-primary"
          onClick={handlePrev}
          disabled={currentPage === 0}
        >
          Previous
        </button>
        <button
          className="btn btn-primary"
          onClick={handleNext}
          disabled={(currentPage + 1) * itemsPerPage >= polls.length}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PollResults;
