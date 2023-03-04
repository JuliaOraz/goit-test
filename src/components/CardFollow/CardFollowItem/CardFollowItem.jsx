import head from "../../../image/card-head.png";
import logo from "../../../image/card-logo.png";
import {
  CardItem,
  CardHead,
  CardLogo,
  CardBody,
  CardAvatar,
  CardBox,
  CardСounter,
  CardBtn,
  CardBtnActive,
  CardAvatarInner,
  CardAvatarWrapp,
} from "./CardFollowItem.styled";

const CardFollowItem = ({ users, onToggleFollowing, following }) => {
  const isFollowing = (id) => following.find((user) => user.id === id);

  return users.map(({ id, user, tweets, avatar, followers }) => {
    const followerCounter = (id) => {
      const user = following.find((follow) => follow.id === id);
      return user ? user.followers : followers;
    };
    return (
      <CardItem key={id}>
        <CardHead>
          <CardLogo>
            <img src={logo} alt="GOIT" />
          </CardLogo>
          <img src={head} alt="Background head" />
        </CardHead>
        <CardBody>
          <CardAvatarWrapp>
            <CardAvatarInner>
              <CardAvatar src={`./users/${avatar}`} alt={user} />
            </CardAvatarInner>
          </CardAvatarWrapp>
          <CardBox>
            <CardСounter> {tweets} tweets</CardСounter>
            <CardСounter>
              {new Intl.NumberFormat("en-US").format(followerCounter(id))}{" "}
              Followers
            </CardСounter>

            {isFollowing(id) ? (
              <CardBtnActive
                type="button"
                onClick={() => onToggleFollowing(id)}
              >
                Following
              </CardBtnActive>
            ) : (
              <CardBtn type="button" onClick={() => onToggleFollowing(id)}>
                Follow
              </CardBtn>
            )}
          </CardBox>
        </CardBody>
      </CardItem>
    );
  });
};

export default CardFollowItem;
