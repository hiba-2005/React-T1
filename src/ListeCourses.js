import PropTypes from 'prop-types';

function ListeCourses({ elements }) {
  return (
    <div className="courses-container">
      <ul className="courses-list">
        {elements.map((item, i) => (
          <li className="courses-item" key={i}>
            🛒 {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

ListeCourses.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ListeCourses;