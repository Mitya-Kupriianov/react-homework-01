import s from './FriendList.module.css';
import PropTypes from 'prop-types';

export default function FriendListItem({ id, isOnline, avatar, name }) {
  return (
    <li key={id} className={s.item}>
      <span className={isOnline ? s.online : s.offline}></span>
      <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
};
