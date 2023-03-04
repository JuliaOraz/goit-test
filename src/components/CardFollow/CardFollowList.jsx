import { useState, useEffect } from "react";

import CardFollowItem from "./CardFollowItem/CardFollowItem";
import users from "../../services/users.json";
import { CardList } from "./CardFollowList.styled";

const CardFollowList = () => {
  const [following, setFollowing] = useState(() => {
    const storedFollowing = window.localStorage.getItem("following");
    return storedFollowing ? JSON.parse(storedFollowing) : [];
  });

  useEffect(() => {
    window.localStorage.setItem("following", JSON.stringify(following));
  }, [following]);

  const onToggleFollowing = (id) => {
    const isFollowing = following.find((user) => user.id === id);
    if (!isFollowing) {
      setFollowing((prevFollowing) => {
        const user = users.find((user) => user.id === id);
        return [...prevFollowing, { id, followers: user.followers + 1 }];
      });
      return;
    }
    setFollowing((prevFollowing) => {
      return prevFollowing.filter((user) => user.id !== id);
    });
  };

  return (
    <CardList>
      <CardFollowItem
        users={users}
        onToggleFollowing={onToggleFollowing}
        following={following}
      />
    </CardList>
  );
};

export default CardFollowList;
