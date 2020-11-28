import PropTypes from 'prop-types';
import style from './FriendList.module.css';
export default function FriendList({ props: friends }) {
  return (
    <ul className={style.friend__list}>
      {friends.map(elem => {
        return (
          <li className={style.item} key={elem.name}>
            <span
              className={elem.isOnline ? style.status_true : style.status_false}
            ></span>
            <img
              className={style.avatar}
              src={elem.avatar}
              alt="photo our avatar"
              width="280"
            />
            <p className={style.name}>{elem.name}</p>
          </li>
        );
      })}
    </ul>
  );
}

FriendList.propTypes = {
  props: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }),
  ),
};
