import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
  return (
    <section className={s.Statistics}>
      {title && <h2 className={s.Title}>{title}</h2>}

      <ul className={s.StatList}>
        {stats.map(stat => (
          <li className={s.Item} key={stat.id}>
            <span className={s.Label}>{stat.label}</span>
            <span className={s.Percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propType = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default Statistics;
