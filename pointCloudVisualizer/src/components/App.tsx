import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import {useEffect, useRef, useState} from "react";
import PointCloud from "./PointCloud";
import {Particle} from "../types";
import ParticlesCounter from "./ParticlesCounter";
import {wait} from "../utils/wait";

const App = () => {
  const page = useRef(1);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isLoadComplete, setIsLoadComplete] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const url = `http://localhost:4200/session/1732399670623__roberto_pieraccinis?page=${page.current}`;
      const request = await fetch(url);
      const result = await request.json();
      if (result.hasNextPage) {
        page.current += 1;
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

  return (
    <div>
      <Canvas camera={{position: [0, 0, 2]}}>
        <ambientLight />
        <PointCloud data={particles} />
        <OrbitControls />
      </Canvas>
      <ParticlesCounter
        count={particles.length}
        isLoadComplete={isLoadComplete}
      />
    </div>
  );
};

export default App;
