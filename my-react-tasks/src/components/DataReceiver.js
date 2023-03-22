import { useState } from "react";
import { getData } from "../api";
import { ErrorBoundary } from "react-error-boundary";

function DataReceiver() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const handleClick = async () => {
    try {
      const newData = await getData();
      setData(newData);
      setError(null);
    } catch (error) {
      setError(error);
    }
  };

  return (
    <ErrorBoundary>
      <div className="data">
        <button onClick={handleClick}>Get new data</button>
        {error ? (
          <div className="error">
            <p>{error.message}</p>
            <button onClick={handleClick}>Try again</button>
          </div>
        ) : (
          <div>{data ?? "Something do Wrong"}</div>
        )}
      </div>
      </ErrorBoundary>
  );
}

export default DataReceiver;
