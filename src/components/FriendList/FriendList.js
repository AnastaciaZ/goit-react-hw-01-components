import PropTypes from 'prop-types';
import s from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={s.FriendList}>
      {friends.map(friend => (
        <li className={s.Item} key={friend.id}>
          <span className={friend.isOnline ? s.Online : s.Status}>
            {friend.isOnline}
          </span>
          <img className={s.Avatar} src={friend.avatar} alt="" width="48" />
          <p className={s.Name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
};

FriendList.propType = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default FriendList;
