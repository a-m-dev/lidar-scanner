type ParticlesCounterArgs = {
  count: number;
  isLoadComplete: boolean;
};

const ParticlesCounter = ({
  count = 0,
  isLoadComplete = false,
}: ParticlesCounterArgs) => {
  return (
    <div className={`counter ${isLoadComplete ? "load-complete" : ""}`}>
      <span>Points Loaded:</span>
      <span>{count}</span>
    </div>
  );
};

export default ParticlesCounter;
