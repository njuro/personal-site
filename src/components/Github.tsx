import React, { useEffect, useState } from "react";
import moment from "moment";
import { Segment } from "semantic-ui-react";

interface Commit {
  repository: string;
  date: string;
  message: string;
}
function Github() {
  const url = "https://api.github.com/users/njuro/events?per_page=100";
  const [commit, setCommit] = useState<Commit | undefined | null>(undefined);

  useEffect(() => {
    fetch(url, {
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
    })
      .then((res) => res.json())
      .then((events) => {
        const push = events.find((event: any) => event.type === "PushEvent");
        if (push) {
          setCommit({
            repository: push.repo.name,
            date: push.created_at,
            message: push.payload.commits[0].message,
          });
        }
      })
      .catch(() => setCommit(null));
  }, []);

  if (commit === undefined) {
    return (
      <Segment padded raised style={{ fontSize: "16px" }}>
        Fetching...
      </Segment>
    );
  }

  if (commit === null) {
    return (
      <Segment padded raised style={{ fontSize: "16px" }}>
        Failed to fetch last commit data from GitHub.
      </Segment>
    );
  }
  return (
    <Segment padded raised style={{ fontSize: "16px" }}>
      My last public commit was <strong>{moment(commit.date).fromNow()}</strong>{" "}
      to repository <strong>{commit.repository}</strong> with message{" "}
      <strong>{commit.message}</strong>.
    </Segment>
  );
}

export default Github;
