import PropTypes from 'prop-types';
import { FriendListStyled, Status } from './FriendList.styled';

const FriendList = ({ friends }) => {
  return (
    <FriendListStyled className="friend-list">
      {friends &&
        friends.map(({ avatar, name, isOnline, id }) => {
          console.log(isOnline);
          return (
            <li key={id} className="item">
              <Status className="status" isOnline={isOnline}></Status>
              <img className="avatar" src={avatar} alt={name} width="48" />
              <p className="name">{name}</p>
            </li>
          );
        })}
    </FriendListStyled>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};

export default FriendList;
