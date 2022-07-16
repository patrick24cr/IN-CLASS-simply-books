import React from 'react';
import PropTypes from 'prop-types';

export default function User({ userObj }) {
  const { image } = userObj;
  const { name } = userObj;
  const { email } = userObj;
  const { lastLogin } = userObj;
  return (
    <div>User</div>
  );
}

User.propTypes = {
  userObj: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
    lastLogin: PropTypes.string,
  }).isRequired,
};
