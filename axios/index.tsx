import axios from "axios";
import { useState, useEffect } from "react";

export const useAxios = (Url: string) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(Url)
      .then(({ data }) => {
        setUsers(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return users;
};
