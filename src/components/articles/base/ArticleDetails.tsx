import React from "react";
import { Helmet } from "react-helmet";
import { Divider, Header, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import useNavigation from "../../../useNavigation";
import { BLOG_URL } from "../../../mappings";
import { Article } from "../articles";

interface ArticleDetailsProps {
  article: Article;
  children: React.ReactNode;
}
function ArticleDetails({ article, children }: ArticleDetailsProps) {
  useNavigation(BLOG_URL);

  return (
    <div>
      <Helmet title={article.headline} />
      <Header as="h1" style={{ textAlign: "center" }}>
        {article.headline}
      </Header>
      <p style={{ textAlign: "center" }}>
        <span
          style={{
            fontSize: " 18px",
            fontFamily: "monospace",
            color: "gray",
          }}
        >
          {article.date.toLocaleDateString("sk-SK")}
        </span>
      </p>
      <p>
        <em style={{ fontSize: "18px" }}>{article.perex}</em>
      </p>
      <Divider section />
      {children}
      <div style={{ textAlign: "right", fontSize: "16px" }}>
        <em>
          Back to{" "}
          <Link to={BLOG_URL} className="content-link">
            Blog
          </Link>
        </em>{" "}
        <Icon name="arrow right" color="grey" />
      </div>
    </div>
  );
}

export default ArticleDetails;
