import React from 'react';
import DataItem from './DataItem';
import ErrorBoundary from './ErrorBoundary';

function DataList() {
  return (
    <div>
      <ErrorBoundary>
        <DataItem />
      </ErrorBoundary>
      <ErrorBoundary >
        <DataItem />
      </ErrorBoundary>
      <ErrorBoundary >
        <DataItem />
      </ErrorBoundary>
    </div>
  );
}

export default DataList;
