import React from 'react';
import PropTypes from 'prop-types';

export default function AuthorCard({ authorObj }) {
  const { name } = authorObj;
  return (
    <div>User</div>
  );
}

AuthorCard.propTypes = {
  authorObj: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
};
