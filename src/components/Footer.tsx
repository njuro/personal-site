import React from "react";
import { Icon, Segment, SegmentProps } from "semantic-ui-react";
import styled from "styled-components";

const FooterContainer: React.FC<SegmentProps> = styled(Segment)`
  height: 80px;
  text-align: center;
  font-size: 14px;
  width: 100%;
  margin-top: 20px;
  display: block;
  color: gray;

  a {
    color: white;
  }
`;
function Footer() {
  return (
    <FooterContainer inverted vertical as="footer">
      Created with&nbsp;
      <Icon name="heart" />
      and&nbsp;
      <a href="https://reactjs.org" target="_blank" rel="noreferrer">
        React
      </a>
      , template by{" "}
      <a
        href="https://github.com/semantic-ui-forest"
        target="_blank"
        rel="noreferrer"
      >
        @Semantic-UI-Forest
      </a>
      . &copy; 2021 Juraj Noge
    </FooterContainer>
  );
}

export default Footer;