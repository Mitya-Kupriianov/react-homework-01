import s from './FriendList.module.css';
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';

export default function FriendList({ friends }) {
  return (
    <ul className={s.friend_list}>
      {friends.map(({ isOnline, avatar, name }) => (
        <FriendListItem isOnline={isOnline} avatar={avatar} name={name} />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
