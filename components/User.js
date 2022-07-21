/* eslint-disable @next/next/no-img-element */
import React from 'react';
import PropTypes from 'prop-types';

export default function User({
  name, image, email, lastSignInTime,
}) {
  return (
    <>
      <div>{name}</div>
      <img
        src={image}
        alt="User"
      />
      <div>{email}</div>
      <div>Last login:</div>
      <div>{lastSignInTime}</div>
    </>
  );
}

User.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  email: PropTypes.string,
  lastSignInTime: PropTypes.string,
};

User.defaultProps = {
  name: 'no name',
  image: 'no image',
  email: 'no email',
  lastSignInTime: 'unknown',
};
