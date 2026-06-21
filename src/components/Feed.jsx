import { useEffect } from "react";
import { BASE_URL } from "../utils/constant";
import { useSelector, useDispatch } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import UserCard from"./UserCard";
import axios from'axios';

const Feed = () => {
  const feed = useSelector((store) => store.feed);
  console.log("FeedComponent",feed);
  const dispatch = useDispatch();

  const getFeed = async () => {
    if (feed && Array.isArray(feed) && feed.length) return;
    try {
      const res = await axios.get(BASE_URL + "/feed", {
        withCredentials: true,
      });
      console.log("feed component",res);
      dispatch(addFeed(res?.data?.data));
    } catch (err) {
      //TODO: handle error
    }
  };


  useEffect(() => {
    getFeed();
  }, []);
  return (
    Array.isArray(feed) && feed.length > 0 ? (
      <div className="flex justify-center my-10">
        <UserCard key={feed[0].id ?? feed[0]._id ?? 0} user={feed[0]} />
      </div>
    ) : null
  );
  
};

export default Feed;
