import React from 'react';

function ErrorFallback(props) {
  return (
    <div>
      <p>Error: {props.error.message}</p>
      <button onClick={props.resetErrorBoundary}>Try again</button>
    </div>
  );
}

export default ErrorFallback;
