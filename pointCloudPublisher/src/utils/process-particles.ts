import fs from "fs/promises";

// TODO:
// let's do this in pointCloudIngestor

const DUMB_POINT_CLOUD = "0.0, 0.0, 0.0, 0.0, 0.0, 0.0";

const parseParticles = (value: string) => {
  // "[0.05963346, -0.09947117, -0.83398753, 116.13638, 78.33872, 10.219751],[0.0, 0.0, 0.0, 0.0, 0.0, 0.0],"
  const regex = /\[([^\]]+)\]/g;
  const arrays = [];
  let match;

  while ((match = regex.exec(value)) !== null) {
    if (match[1] === DUMB_POINT_CLOUD) {
      continue;
    }

    // match[1] contains the contents inside the brackets
    arrays.push(match[1].split(",").map(Number));
  }

  // arrays are the batch that you need to store into database!
  return arrays;
};

export const processParticles = (value: string) => {
  try {
    const start = performance.now();
    const particlesBatch = parseParticles(value);

    const end = performance.now();
    console.log(`Time taken: ${(end - start) / 1000}s`);

    // await fs.appendFile("output.json", `${value}\n\n`);
    return particlesBatch;
  } catch (err) {
    console.error("Error appending to file", err);
  }
};
