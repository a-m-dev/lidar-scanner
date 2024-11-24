import {useSessionsList} from "../../hooks/useSessionsList";
import {Session} from "../../types";
import SessionComponent from "./Session";

const SessionsList = () => {
  const {isLoading, data} = useSessionsList<Session[]>();

  return (
    <div className="sessions-list">
      <div className="container">
        <div className="title">
          <h1>Available Sessions:</h1>
        </div>

        <div className="list-wrapper">
          {isLoading && <h3>Loading...</h3>}

          {data.length === 0 ? (
            <h3>No Session is available!</h3>
          ) : (
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
