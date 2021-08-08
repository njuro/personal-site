import React from "react";
import useNavigation from "../useNavigation";
import { ABOUT_URL } from "../mappings";

function About() {
  useNavigation(ABOUT_URL);
  return <div>About</div>;
}

export default About;
