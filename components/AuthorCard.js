import React from 'react';
import PropTypes from 'prop-types';

export default function AuthorCard({ authorObj }) {
  return (
    <>
      <div>Name: {authorObj.first_name} {authorObj.last_name}</div>
      <div>Email: {authorObj.email}</div>
    </>
  );
}

AuthorCard.propTypes = {
  authorObj: PropTypes.shape({
    name: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
};
