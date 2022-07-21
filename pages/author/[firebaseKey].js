import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { viewAuthorDetails } from '../../api/mergedData';
import BookCardLite from '../../components/BookCardLite';

export default function DynamicRoute() {
  const [authorDetails, setAuthorDetails] = useState({});
  const router = useRouter();

  const { firebaseKey } = router.query;

  useEffect(() => {
    viewAuthorDetails(firebaseKey).then((response) => {
      setAuthorDetails(response);
      console.warn(authorDetails);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [firebaseKey]);

  return (
    <>
      <div className="text-white ms-5 details">
        <h5>
          {authorDetails.first_name} {authorDetails.last_name}
          {authorDetails.favorite ? ' 🤍' : ''}
        </h5>
        Email: <a href={`mailto:${authorDetails.email}`}>{authorDetails.email}</a>
        <hr />
      </div>
      <div className="d-flex flex-wrap">
        {authorDetails.books?.map((book) => (
          <BookCardLite key={book.firebaseKey} bookObj={book} />
        ))}
      </div>
    </>
  );
}
