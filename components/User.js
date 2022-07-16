import React from 'react';
import PropTypes from 'prop-types';
import { useAuth } from '../utils/context/authContext';

export default function User({
  name, image, email, lastSignInTime
}) {
  const { user } = useAuth();
  return (
    <>
      <div>{name}}</div>
      <div>{image}</div>
      <img
        src="https://lh3.googleusercontent.com/a-/AOh14Gh3H1uwOHwOrEVii0dcudi8hgZ8zcAdb14V4VN2PQ=s96-c"
        alt="new"
      />
      <div>{email}}</div>
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
  name: 'BurnsPatrick',
  image: 'no image',
  email: 'no email',
  lastSignInTime: 'unknown',
};
