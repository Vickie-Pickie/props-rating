import React from 'react';
import PropTypes from 'prop-types';
import Star from './Star';

function Stars(props) {
  const { count } = props;
  if ( count < 1 || count > 5 || !Number(count) ) {
    return (
      <></>
    );
  }

  const renderStars = () => {
    const res = [];
    for ( let i = 0; i < count; i += 1) {
      res.push(<Star key={i} />);
    }
    return res;
  }

  return (
    <ul className="card-body-stars">
      {
        renderStars()
      }
    </ul>
  )
}

export default Stars;

Stars.defaultProps = {
  count: 0,
};

Stars.propTypes = {
  count: PropTypes.number,
};
