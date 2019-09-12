import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author="Sam" timeAgo="Today at 4:45PM" commentText="One question at a time." />
      <CommentDetail author="Jane" timeAgo="Today at 6:23AM" commentText="We were never born and we will never die." />
      <CommentDetail author="Alex" timeAgo="Today at 11:15AM" commentText="Of the essence, there is no such thing as death" />
      <CommentDetail author="James" timeAgo="Yesterday at 7:56" commentText="The soul is eternal, you just change form." />
      <CommentDetail author="Michael" timeAgo="Yesterday at 5:48" commentText="Then you come back with a new face on." />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
