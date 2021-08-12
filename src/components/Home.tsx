import React from "react";
import { Icon, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import useNavigation from "../useNavigation";
import { ABOUT_URL, CONTACT_URL, HOME_URL, PROJECTS_URL } from "../mappings";

function Home() {
  useNavigation(HOME_URL);
  const pronunciation = new Audio("/juraj-noge.mp3");

  return (
    <div style={{ textAlign: "center", fontSize: "18px" }}>
      <Image
        circular
        size="medium"
        src="/images/profile-picture.jpg"
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          marginBottom: "10px",
        }}
        alt="Profile picture"
      />
      <p>
        Hello! My name is <strong>Juraj Noge </strong>
        <Icon
          name="volume up"
          color="grey"
          link
          onClick={() => pronunciation.play()}
        />
        and I am what they call a Software Engineer.
      </p>
      <p>
        I work mostly with <strong>Java</strong>, <strong>Kotlin</strong> and{" "}
        <strong>Spring Framework</strong>, although I am up for any fun
        challenge.
      </p>
      <p>
        So read{" "}
        <Link to={ABOUT_URL} className="content-link">
          About
        </Link>{" "}
        me, check out my{" "}
        <Link to={PROJECTS_URL} className="content-link">
          Projects
        </Link>{" "}
        and feel free to{" "}
        <Link to={CONTACT_URL} className="content-link">
          Contact
        </Link>{" "}
        me!
      </p>
    </div>
  );
}

export default Home;
