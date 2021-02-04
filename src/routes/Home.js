import Mweet from "components/Mweet";
import { dbService } from "myBase";
import React, { useEffect, useState } from "react";
import MweetFactory from "components/MweetFactory";

const Home = ({ userObj }) => {
  const [mweets, setMweets] = useState([]);
  useEffect(() => {
    dbService.collection("mweets").onSnapshot((snapshot) => {
      const mweetArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMweets(mweetArray);
    });
  }, []);

  return (
    <div>
      <MweetFactory userObj={userObj} />
      <div>
        {mweets.map((mweet) => (
          <Mweet
            key={mweet.id}
            mweetObj={mweet}
            isOwner={mweet.creatorId === userObj.uid}
          />
        ))}
      </div>
    </div>
  );
};
export default Home;
