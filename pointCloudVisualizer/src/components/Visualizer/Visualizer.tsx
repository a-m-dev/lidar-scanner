import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import PointCloud from "./PointCloud";
import ParticlesCounter from "./ParticlesCounter";
import useFetchData from "../../hooks/useFetchData";
import {NavLink} from "react-router";

const Visualizer = () => {
  const {particles, isLoadComplete} = useFetchData();

  return (
    <div>
      <NavLink to="/" className="back">
        <span>{`<- Go Back`}</span>
      </NavLink>
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

export default Visualizer;
