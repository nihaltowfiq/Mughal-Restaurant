import React from "react";
import dateFormat from "dateformat";

const LoadComments = (props) => {
  return props.comments.map((comment) => {
    return (
      <div key={comment.id}>
        <h6 className="mt-1">{comment.author}</h6>
        <p className="mb-0">{comment.comment}</p>
        <small>
          {dateFormat(comment.date, "dddd, mmmm dS, yyyy, h:MM TT")}
        </small>
      </div>
    );
  });
};

export default LoadComments;
