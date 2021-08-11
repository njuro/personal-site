import React, { useEffect, useMemo, useState } from "react";
import Parser from "rss-parser";
import moment from "moment";

interface Book {
  title: string;
  author: string;
  year: number;
  started: string;
  [key: string]: unknown;
}
function Goodreads() {
  const CORS_PROXY = "https://api.codetabs.com/v1/proxy/?quest=";
  const url =
    "https://www.goodreads.com/review/list_rss/80333251?shelf=currently-reading";
  const parser = useMemo(
    () =>
      new Parser<{ [key: string]: unknown }, Book>({
        customFields: {
          item: [
            ["author_name", "author"],
            ["book_published", "year"],
            ["user_date_added", "started"],
          ],
        },
        headers: {
          "User-Agent": "",
        },
      }),
    []
  );
  const [book, setBook] = useState<Book | null | undefined>(undefined);

  useEffect(() => {
    parser
      .parseURL(CORS_PROXY + url)
      .then((feed) => {
        if (feed.items.length > 0) {
          const item = feed.items[0];
          setBook({
            title: item.title,
            author: item.author,
            year: item.year,
            started: item.started,
          });
        } else {
          setBook(null);
        }
      })
      .catch(() => setBook(null));
  }, [parser]);

  if (book === undefined) {
    return <>Fetching...</>;
  }

  if (book === null) {
    return (
      <>
        It is shocking, but I am not reading any book at the moment (or maybe I
        just forgot to update it in my GoodReads profile).
      </>
    );
  }

  return (
    <>
      The book I am currently reading is <strong>{book.title}</strong> from{" "}
      <strong>{book.author}</strong> ({book.year}). I started reading it{" "}
      <strong>{moment(book.started).fromNow()}</strong>).
    </>
  );
}

export default Goodreads;
