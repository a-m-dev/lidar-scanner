import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import PointCloud from "./PointCloud";
import ParticlesCounter from "./ParticlesCounter";
import useFetchData from "../../hooks/useFetchData";
import {NavLink, useParams} from "react-router";
import {parseSessionName} from "../../utils/parseSessionName";

const Visualizer = () => {
  const {particles, isLoadComplete} = useFetchData();
  const {sessionId} = useParams();

  return (
    <div>
      <div className="header">
        <NavLink to="/" className="back">
          <span>{`<- Go Back`}</span>
        </NavLink>

        <h1>{parseSessionName(sessionId ?? "Anonymous Viz")}</h1>
      </div>
      <Canvas camera={{position: [-0.75, 0.75, 1]}}>
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
