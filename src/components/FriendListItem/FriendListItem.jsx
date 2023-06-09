import PropTypes from 'prop-types';
import { Status } from './FriendListItem.styled';

const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <li key={id} className="item">
      <Status className="status" isOnline={isOnline}></Status>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
