import {useMemo} from "react";
import * as THREE from "three";
import {Particle} from "../../types";

type PointCloudArgs = {
  data: Particle[];
};

const PointCloud = ({data}: PointCloudArgs) => {
  const attributes = useMemo(() => {
    const positions = new Float32Array(data.length * 3);
    const colors = new Float32Array(data.length * 3);

    data.forEach(({x, y, z, r, g, b}, i) => {
      // Set positions
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      // Normalize and set colors
      colors[i * 3] = r / 255;
      colors[i * 3 + 1] = g / 255;
      colors[i * 3 + 2] = b / 255;
    });

    return {
      positions: new THREE.BufferAttribute(positions, 3),
      colors: new THREE.BufferAttribute(colors, 3),
    };
  }, [data]);

  // Create the PointsMaterial explicitly
  const pointsMaterial = useMemo(() => {
    return new THREE.PointsMaterial({
      vertexColors: true, // Enable vertex colors
      size: 0.002, // Size of the points
      alphaTest: 1,
    });
  }, []);

  return (
    <points>
      <bufferGeometry>
        <primitive attach="attributes-position" object={attributes.positions} />
        <primitive attach="attributes-color" object={attributes.colors} />
      </bufferGeometry>
      <primitive object={pointsMaterial} />
    </points>
  );
};

export default PointCloud;
