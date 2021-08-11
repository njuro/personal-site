import React, { useEffect, useMemo, useState } from "react";
import moment from "moment";

interface Book {
  title: string;
  author: string;
  year: number;
  started: string;
}
function Goodreads() {
  const AUTHOR_PATTERN = useMemo(() => /author:\s+(.+)<br\/?>/i, []);
  const YEAR_PATTERN = useMemo(() => /book published:\s+(.+)<br\/?>/i, []);
  const STARTED_PATTERN = useMemo(() => /date added:\s+(.+)<br\/?>/, []);
  const url =
    "https://api.rss2json.com/v1/api.json?rss_url=https://www.goodreads.com/review/list_rss/80333251?shelf=currently-reading";
  const [book, setBook] = useState<Book | null | undefined>(undefined);

  useEffect(() => {
    fetch(url)
      .then((data) => data.json())
      .then((data) => {
        if (data.items.length > 0) {
          const item = data.items[0];
          const { title, content } = item;
          setBook({
            title,
            author: content.match(AUTHOR_PATTERN)[1],
            year: content.match(YEAR_PATTERN)[1],
            started: content.match(STARTED_PATTERN)[1],
          });
        } else {
          setBook(null);
        }
      })
      .catch(() => setBook(null));
  }, [AUTHOR_PATTERN, STARTED_PATTERN, YEAR_PATTERN]);

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
