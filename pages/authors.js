import { React, useState, useEffect } from 'react';
import { getAuthors } from '../api/authorData';
import AuthorCard from '../components/AuthorCard';
import { useAuth } from '../utils/context/authContext';

export default function Authors() {
  const [authors, setAuthors] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    getAuthors(user.uid).then(setAuthors);
  }, [user.uid]);
  return (
    <div>
      {authors.map((authorObj) => (
        <AuthorCard key={authorObj.firebaseKey} authorObj={authorObj} />
      ))}
    </div>
  );
}
