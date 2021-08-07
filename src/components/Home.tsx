import React from "react";
import { Icon, Image } from "semantic-ui-react";

function Home() {
  const pronunciation = new Audio("/juraj-noge.mp3");

  return (
    <div style={{ textAlign: "center", fontSize: "18px" }}>
      <Image
        circular
        size="medium"
        src="/profile-picture.jpg"
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          marginBottom: "10px",
        }}
      />
      <p>
        Hello! My name is <strong>Juraj Noge </strong>
        <Icon
          name="volume up"
          color="grey"
          link
          onClick={() => pronunciation.play()}
        />
        and I am what they call an Software Engineer.
      </p>
      <p>
        I work mostly with <strong>Java</strong>, <strong>Kotlin</strong> and{" "}
        <strong>Spring Framework</strong>, although I am up for any fun
        challenge.
      </p>
      <p>So read my Bio, check out my Projects and feel free to Contact me!</p>
    </div>
  );
}

export default Home;
