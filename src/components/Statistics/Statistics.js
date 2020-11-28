import PropTypes from 'prop-types';
import style from './Statistics.module.css';

export default function Statistics({ props: stats, title }) {
  return (
    <section className={style.statistics}>
      <h2 className={style.stat__title}>{title && title}</h2>
      <ul className={style.stat__list}>
        {stats.map(elem => {
          return (
            <li className={style.stat__item} key={elem.id}>
              <span className="label">{elem.label}</span>
              <span className="percentage">{elem.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  props: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};
