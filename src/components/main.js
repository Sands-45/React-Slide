import React, { useState } from "react";

const Main = ({ tasks }) => {
  let initialCount = 0;
  const [count, setCount] = useState(initialCount);
  function list() {
    for (let i = 0; i < tasks.length; i++) {
      if (i === count) {
        return (
          <>
            <h1 className="text-[3em] text-[#fff] font-bold">
              {tasks[i].title}
            </h1>
            <p className="text-[#fff]">{tasks[i].text}</p>
          </>
        );
      }
    }
  }

  function disablePre() {
    if (count === 0) {
      return true;
    }
  }

  function disableNext() {
    if (count === tasks.length - 1) {
      return true;
    }
  }

  return (
    <div className="h-[100vh] bg-[#343da3] flex items-center justify-center select-none">
      <div className="bg-[#5561E5] p-5 flex items-start justify-center flex-col w-6/12 rounded-lg">
        {list()}
        <div className="flex space-x-7">
          <button
            onClick={() => setCount(initialCount)}
            className="p-2 mt-4 bg-[#fff] rounded-md disabled:opacity-50"
            disabled={disablePre()}
          >
            Restart
          </button>
          <button
            onClick={() =>
              setCount((prevCount) =>
                prevCount < tasks.length - 1 ? prevCount + 1 : (prevCount = 2)
              )
            }
            className="p-2 mt-4 bg-[#fff] rounded-md disabled:opacity-50"
            disabled={disableNext()}
          >
            Next
          </button>
          <button
            onClick={() =>
              setCount((prevCount) =>
                prevCount > 0 ? prevCount - 1 : (prevCount = 0)
              )
            }
            className="p-2 mt-4 bg-[#fff] rounded-md disabled:opacity-50"
            disabled={disablePre()}
          >
            Previous
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
