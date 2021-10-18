export enum ArticleId {
  Interviews = "interviews",
}

export interface Article {
  headline: string;
  perex: string;
  date: Date;
}

export const ARTICLES: Record<ArticleId, Article> = {
  [ArticleId.Interviews]: {
    headline: "Why I like taking interviews as a software developer",
    perex: "There, I said it.",
    date: new Date("2021-10-18"),
  },
};
