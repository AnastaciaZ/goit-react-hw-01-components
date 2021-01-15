import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
  const randomColor = () => Math.floor(Math.random() * 256);
  const randonRGB = () =>
    `rgb(${randomColor()},${randomColor()},${randomColor()})`;

  return (
    <section className={s.Statistics}>
      {title && <h2 className={s.Title}>{title}</h2>}

      <ul className={s.StatList}>
        {stats.map(stat => (
          <li
            className={s.Item}
            style={{ backgroundColor: randonRGB() }}
            key={stat.id}
          >
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
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

export default Statistics;
