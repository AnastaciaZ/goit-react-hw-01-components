import PropTypes from 'prop-types';
import s from './FriendList.module.css';

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <>
      <span className={isOnline ? s.Online : s.Status}>{isOnline}</span>
      <img className={s.Avatar} src={avatar} alt="" width="48" />
      <p className={s.Name}>{name}</p>
    </>
  );
}

FriendListItem.propType = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.bool.isRequired,
  isOnline: PropTypes.string.isRequired,
};

export default FriendListItem;
