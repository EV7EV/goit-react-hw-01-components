import PropTypes from 'prop-types';
import { SectionStyled, StatsList } from './Statistics.styled';

const Statistics = ({ title, stats }) => {
  return (
    <SectionStyled>
      {title && <h2 className="title">{title}</h2>}
      <StatsList className="stat-list">
        {stats.map(({ id, label, percentage }) => {
          return (
            <li key={id} className="item">
              <span className="label">{label}</span>
              <span className="percentage">{percentage}</span>
            </li>
          );
        })}
      </StatsList>
    </SectionStyled>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics;
