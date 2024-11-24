import {useEffect, useState} from "react";
import {BASE_URL} from "../constants";

export const useSessionsList = <T>() => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<T>([] as T);

  useEffect(() => {
    const fetchSessionsList = async () => {
      try {
        setIsLoading(true);

        const request = await fetch(`${BASE_URL}/session`);
        const result = await request.json();
        setData(result.data);
      } catch (error) {
        console.log(`Error Fetching sessions list`);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSessionsList();
  }, []);

  return {isLoading, data};
};
