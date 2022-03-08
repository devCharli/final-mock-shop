import axios from "axios";
import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setError(false);
        setIsPending(false);
        setData(res.data);
      })
      .catch((e) => {
        setError("there is error...");
      });
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
