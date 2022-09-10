import s from './FriendList.module.css';
import PropTypes from 'prop-types';

function FriendListItem({ id, isOnline, avatar, name }) {
  return (
    <li key={id} className={s.item}>
      <span className={isOnline ? s.online : s.offline}></span>
      <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}

export default function FriendList({ friends }) {
  return (
    <ul className={s.friend_list}>
      {friends.map(({ isOnline, avatar, name }) => (
        <FriendListItem isOnline={isOnline} avatar={avatar} name={name} />
      ))}
    </ul>
  );
}

FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
