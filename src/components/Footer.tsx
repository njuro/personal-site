import React from "react";
import {
  Icon,
  Popup,
  Segment,
  SegmentProps,
  SemanticICONS,
} from "semantic-ui-react";
import styled from "styled-components";
import {
  EMAIL_ADDRESS,
  GITHUB_URL,
  GOODREADS_URL,
  LINKEDIN_URL,
  RESUME_URL,
} from "../mappings";

interface ContactIconProps {
  icon: SemanticICONS;
  name: string;
  url: string;
}
function ContactIcon({ icon, name, url }: ContactIconProps) {
  return (
    <Popup
      position="top center"
      size="small"
      inverted
      content={name}
      trigger={
        <Icon
          name={icon}
          link
          size="large"
          onClick={() => window.open(url, "_blank", "noreferrer")}
        />
      }
    />
  );
}

const FooterContainer: React.FC<SegmentProps> = styled(Segment)`
  height: 80px;
  text-align: center;
  font-size: 14px;
  width: 100%;
  margin-top: 40px;
  display: block;
  color: gray;

  a {
    color: white;

    :hover,
    :active {
      color: lightgray;
    }
  }
`;
function Footer() {
  const contacts: ContactIconProps[] = [
    {
      icon: "github",
      name: "GitHub",
      url: GITHUB_URL,
    },
    {
      icon: "linkedin",
      name: "LinkedIn",
      url: LINKEDIN_URL,
    },
    {
      icon: "goodreads",
      name: "GoodReads",
      url: GOODREADS_URL,
    },
    {
      icon: "mail",
      name: "E-mail",
      url: `mailto:${EMAIL_ADDRESS}`,
    },
    {
      icon: "briefcase",
      name: "Resume",
      url: RESUME_URL,
    },
  ];

  return (
    <>
      <FooterContainer vertical as="footer">
        Created with&nbsp;
        <Icon name="heart" />
        and&nbsp;
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          React
        </a>
        , UI components by{" "}
        <a
          href="https://react.semantic-ui.com/"
          target="_blank"
          rel="noreferrer"
        >
          Semantic UI
        </a>
        . &copy; 2021 Juraj Noge
        <br />
        {contacts.map((contact) => (
          <ContactIcon
            icon={contact.icon}
            name={contact.name}
            url={contact.url}
            key={contact.icon}
          />
        ))}
      </FooterContainer>
    </>
  );
}

export default Footer;
