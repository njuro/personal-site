import React from "react";
import { Link } from "react-router-dom";
import { Header, Segment } from "semantic-ui-react";
import styled from "styled-components";
import { Article, ArticleId } from "../articles";
import { ARTICLE_URL } from "../../../mappings";

const ArticleBox = styled(Segment)`
  padding: 30px !important;
  margin-bottom: 30px !important;
`;
interface ArticleOverviewProps {
  id: ArticleId;
  article: Article;
}
function ArticleOverview({ id, article }: ArticleOverviewProps) {
  return (
    <ArticleBox raised>
      <Header as="h2">
        <Link to={ARTICLE_URL(id)} className="article-link">
          {article.headline}
        </Link>
      </Header>
      <div style={{ marginTop: "40px" }}>
        <em style={{ fontSize: "18px" }}>{article.perex}</em>
        <span
          style={{
            fontSize: " 18px",
            fontFamily: "monospace",
            float: "right",
            color: "gray",
          }}
        >
          {article.date.toLocaleDateString("sk-SK")}
        </span>
      </div>
    </ArticleBox>
  );
}

export default ArticleOverview;
