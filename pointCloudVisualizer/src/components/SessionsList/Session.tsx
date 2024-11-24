import {NavLink} from "react-router";
import {Session} from "../../types";
import {formatISOTime} from "../../utils/formatISOtime";
import {parseSessionName} from "../../utils/parseSessionName";

type SessionComponentArg = {
  session: Session;
};

export const SessionComponent = ({
  session: {_id, name, createdAt},
}: SessionComponentArg) => {
  return (
    <NavLink to={`viz/${name}`}>
      <div className="session">
        <span>{_id}</span>
        <h4>{parseSessionName(name)}</h4>
        <p>{formatISOTime(createdAt)}</p>
      </div>
    </NavLink>
  );
};

export default SessionComponent;
