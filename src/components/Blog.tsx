import React from "react";
import { Helmet } from "react-helmet";
import { Divider } from "semantic-ui-react";
import useNavigation from "../useNavigation";
import { BLOG_URL } from "../mappings";
import { ArticleId, ARTICLES } from "./articles/articles";
import ArticleOverview from "./articles/base/ArticleOverview";

function Blog() {
  useNavigation(BLOG_URL);

  return (
    <div style={{ fontSize: "18px" }}>
      <Helmet title="Blog" />
      <p>
        Some of my thoughts I found interesting, or at least worth documenting
        for the future. I don&apos;t have fixed schedule for writing, nor
        selected topics. But most of the articles will probably revolve around
        programming and life of software developer in general.
      </p>
      <Divider section />
      {Object.entries(ARTICLES)
        .sort(
          (article1, article2) =>
            article1[1].date.getUTCMilliseconds() -
            article2[1].date.getUTCMilliseconds()
        )
        .map(([id, article]) => (
          <ArticleOverview id={id as ArticleId} article={article} key={id} />
        ))}
    </div>
  );
}

export default Blog;
