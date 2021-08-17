import React from "react";
import { List, SemanticICONS } from "semantic-ui-react";
import { Helmet } from "react-helmet";
import useNavigation from "../useNavigation";
import {
  CONTACT_URL,
  EMAIL_ADDRESS,
  GITHUB_URL,
  GOODREADS_URL,
  LINKEDIN_URL,
  RESUME_URL,
  WEB_URL,
} from "../mappings";

interface ExternalContactProps {
  name: string;
  username: string;
  url: string;
  icon: SemanticICONS;
}
function ExternalContact({ name, username, url, icon }: ExternalContactProps) {
  return (
    <List.Item>
      <List.Icon
        onClick={() => window.open(url, "_blank", "noreferrer")}
        link
        name={icon}
        size="large"
        verticalAlign="middle"
      />
      <List.Content>
        <List.Header>
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="header-link"
          >
            {name}
          </a>
        </List.Header>
        <List.Description>
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="header-link"
          >
            <span>{username}</span>
          </a>
        </List.Description>
      </List.Content>
    </List.Item>
  );
}

function Contact() {
  useNavigation(CONTACT_URL);

  const contacts: ExternalContactProps[] = [
    {
      name: "GitHub",
      username: "njuro",
      url: GITHUB_URL,
      icon: "github",
    },
    {
      name: "LinkedIn",
      username: "juraj-noge",
      url: LINKEDIN_URL,
      icon: "linkedin",
    },
    {
      name: "GoodReads",
      username: "njuro",
      url: GOODREADS_URL,
      icon: "goodreads",
    },
    {
      name: "E-mail",
      username: EMAIL_ADDRESS,
      url: `mailto:${EMAIL_ADDRESS}`,
      icon: "mail",
    },
    {
      name: "Web",
      username: WEB_URL.replace("https://", ""),
      url: WEB_URL,
      icon: "globe",
    },
    {
      name: "Phone",
      username: "[request via other channels]",
      url: "/#",
      icon: "phone",
    },
    {
      name: "Resume",
      username: "[download my resume]",
      url: RESUME_URL,
      icon: "briefcase",
    },
  ];
  return (
    <div style={{ fontSize: "18px" }}>
      <Helmet title="Contact" />
      <List divided relaxed>
        {contacts.map((contact) => (
          <ExternalContact
            name={contact.name}
            username={contact.username}
            url={contact.url}
            icon={contact.icon}
            key={contact.name}
          />
        ))}
      </List>
    </div>
  );
}

export default Contact;
