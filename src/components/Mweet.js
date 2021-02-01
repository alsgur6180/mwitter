import { dbService } from "myBase";
import React, { useState } from "react";

const Mweet = ({ mweetObj, isOwner }) => {
  const [editing, setEditing] = useState(false);
  const [newMweet, setNewMweet] = useState(mweetObj.text);
  const onDeleteClick = () => {
    const ok = window.confirm("Are you sure you want to delete this mweet?");
    if (ok) {
      dbService.doc(`mweets/${mweetObj.id}`).delete();
    }
  };
  const toggleMweet = () => setEditing((prev) => !prev);
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewMweet(value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    dbService.doc(`mweets/${mweetObj.id}`).update({ text: newMweet });
    setEditing(false);
  };
  return (
    <div>
      {editing ? (
        <>
          <form onSubmit={onSubmit}>
            <input
              onChange={onChange}
              type="text"
              placeholder="edit your mweet"
              value={newMweet}
              required
            ></input>
            <input type="submit" value="Edit Mweet" />
          </form>
          <button onClick={toggleMweet}>Cancel</button>
        </>
      ) : (
        <>
          <h4>{mweetObj.text}</h4>
          {isOwner && (
            <>
              <button onClick={onDeleteClick}>Delete button</button>
              <button onClick={toggleMweet}>Edit button</button>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Mweet;
