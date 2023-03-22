import { useMemo, useCallback } from "react";
import { useLoading } from "./hooks/useLoading";

function EntityDetails({ fetchMethod, params, propsToDisplay }) {
  const fetchMethodMemo = useMemo(() => fetchMethod, [fetchMethod]);
  const fetchEntity = useCallback(() => fetchMethodMemo(params), [
    fetchMethodMemo,
    params,
  ]);
  const entity = useLoading(fetchEntity);

  return entity ? (
    <div className="center">
      <h3>{entity.name} Details:</h3>
      {Object.entries(propsToDisplay).map((entry) => (
        <div key={entry[1]}>
          {" "}
          {entry[1]}: <strong>{entity[entry[0]]}</strong>
        </div>
      ))}
    </div>
  ) : (
    <p className="center">Loading...</p>
  );
}

export default EntityDetails;
