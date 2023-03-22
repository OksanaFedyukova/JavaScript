import { useState, useEffect } from "react";

export const useLoading = (fetchMethod) => {
  const [user, setUsers] = useState(null);

  useEffect(() => {
    setUsers(null);
    fetchMethod().then((res) => {
      setUsers(res);
      console.log("User: ", res);
    });
  }, [fetchMethod]);

  return user;
};
