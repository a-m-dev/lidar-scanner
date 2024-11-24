import {useEffect, useState, useRef} from "react";
import {Particle} from "../types";
import {wait} from "../utils/wait";
import {BASE_URL} from "../constants";
import {useParams} from "react-router";

const useFetchData = () => {
  const page = useRef(1);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isLoadComplete, setIsLoadComplete] = useState(false);
  const {sessionId} = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const url = `${BASE_URL}/session/${sessionId}?page=${page.current}`;
      const request = await fetch(url);
      const result = await request.json();
      if (result.hasNextPage) {
        page.current += 1;
        await wait(500);
        fetchData();
      } else {
        setIsLoadComplete(true);
      }
      const pointCloudData = result.data;

      setParticles((prev) => [...prev, ...pointCloudData]);
    };
    fetchData();
  }, []);

  return {particles, isLoadComplete};
};

export default useFetchData;
