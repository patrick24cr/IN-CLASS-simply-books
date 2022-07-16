import React from 'react';
import PropTypes from 'prop-types';

export default function AuthorCard({ authorObj }) {
  const { name } = authorObj;
  return (
    <div>Name: {name}</div>
  );
}

AuthorCard.propTypes = {
  authorObj: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
};
