import PropTypes from 'prop-types';
import { FriendListStyled } from './FriendList.styled';
import FriendListItem from 'components/FriendListItem/FriendListItem';

const FriendList = ({ friends }) => {
  return (
    <FriendListStyled className="friend-list">
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
            id={id}
          />
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
