import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import useNavigation from "../useNavigation";
import { NOT_FOUND_URL } from "../mappings";

function NotFound() {
  useNavigation(undefined);
  const history = useHistory();

  useEffect(() => history.push(NOT_FOUND_URL), [history]);

  return <div>404</div>;
}

export default NotFound;
