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
} from "../mappings";

interface ContactIconProps {
  name: SemanticICONS;
  url: string;
}
function ContactIcon({ name, url }: ContactIconProps) {
  return (
    <Popup
      position="top center"
      size="small"
      inverted
      content={name}
      trigger={
        <Icon
          name={name}
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
      name: "github",
      url: GITHUB_URL,
    },
    {
      name: "linkedin",
      url: LINKEDIN_URL,
    },
    {
      name: "goodreads",
      url: GOODREADS_URL,
    },
    {
      name: "mail",
      url: `mailto:${EMAIL_ADDRESS}`,
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
            name={contact.name}
            url={contact.url}
            key={contact.name}
          />
        ))}
      </FooterContainer>
    </>
  );
}

export default Footer;
