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

      const isRecordingURL = `${BASE_URL}/is-recording`;
      const isRecordingResult = await (await fetch(isRecordingURL)).json();

      console.log({
        hasNextPage: result.hasNextPage,
        isRecording: isRecordingResult.status,
      });

      if (result.hasNextPage || isRecordingResult.status) {
        if (result.data.length > 0) {
          page.current += 1;
        }
        await wait(200);
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
