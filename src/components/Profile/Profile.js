import PropTypes from 'prop-types';
import s from './Profile.module.css';

const Profile = ({ avatar, name, tag, location, stats }) => {
  const { followers, views, likes } = stats;

  return (
    <div className={s.Profile}>
      <div className={s.Description}>
        <img src={avatar} alt="Аватар пользователя" className={s.Avatar} />
        <p className={s.Name}>{name}</p>
        <p className={s.Tag}>@{tag}</p>
        <p className={s.Location}>{location}</p>
      </div>

      <ul className={s.Stats}>
        <li className={s.UserStats}>
          <span className={s.Label}>Followers</span>
          <span className={s.Quantity}>{followers}</span>
        </li>
        <li className={s.UserStats}>
          <span className={s.Label}>Views</span>
          <span className={s.Quantity}>{views}</span>
        </li>
        <li className={s.UserStats}>
          <span className={s.Label}>Likes</span>
          <span className={s.Quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;
