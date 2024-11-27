import {useSessionsList} from "../../hooks/useSessionsList";
import {Session} from "../../types";
import SessionComponent from "./Session";

const SessionsList = () => {
  const {isLoading, data, reload} = useSessionsList<Session[]>();

  return (
    <div className="sessions-list">
      <div className="container">
        <div className="title">
          <div className="right">
            <div className="logo">
              <img src="https://logosandtypes.com/wp-content/uploads/2024/01/qlik.svg" />
            </div>
            <h1>
              Point Cloud Visualizer
              <span>Available Sessions:</span>
            </h1>
          </div>
          <button onClick={reload}>Reload</button>
        </div>

        <div className="list-wrapper">
          {isLoading && <h3>Loading...</h3>}

          {!isLoading && data.length === 0 && <h3>No Session is available!</h3>}

          {!isLoading && data.length > 0 && (
            <div className="grid-wrapper">
              {data.map((s) => (
                <SessionComponent key={s._id} session={s} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SessionsList;
