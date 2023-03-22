import { getData } from "../api";
import { ErrorBoundary } from "react-error-boundary";

function DataItem() {
  return (
        <ErrorBoundary>

    <div className="data">
      <p>
        <b>Data received:</b>
      </p>
      <div>{getData()}</div>
      
    </div>
    </ErrorBoundary>

  );
}

export default DataItem;
