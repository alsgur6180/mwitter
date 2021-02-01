import React from "react";

const Mweet = ({ mweetObj, isOwner }) => (
  <div>
    <h4>{mweetObj.text}</h4>
    {isOwner && (
      <>
        <button>Delete button</button>
        <button>Edit button</button>
      </>
    )}
  </div>
);

export default Mweet;
