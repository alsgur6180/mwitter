import React, { useState } from "react";

const Home = () => {
  const [mweet, setMweet] = useState("");
  const onSubmit = (event) => {
    event.preventDefault();
  };
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setMweet(value);
  };
  return (
    <div>
      <fomr>
        <input
          onChange={onChange}
          type="text"
          placeholder="What is your mind?"
          maxLength={120}
        />
        <input onSubmit={onSubmit} type="submit" value="Mweet" />
      </fomr>
    </div>
  );
};
export default Home;
