import React, { useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { Header } from "semantic-ui-react";
import useNavigation from "../useNavigation";
import { HOME_URL, NOT_FOUND_URL } from "../mappings";

function NotFound() {
  useNavigation(undefined);
  const history = useHistory();

  useEffect(() => history.push(NOT_FOUND_URL), [history]);

  return (
    <div style={{ textAlign: "center" }}>
      <Header as="h1" style={{ textAlign: "center" }}>
        404 - Not Found
      </Header>
      <p style={{ fontSize: "18px", marginTop: "30px" }}>
        Unfortunately I don&apos;t have this page set up (yet). May I offer you
        a link to{" "}
        <Link to={HOME_URL} className="content-link">
          Home
        </Link>{" "}
        instead?
      </p>
    </div>
  );
}

export default NotFound;
