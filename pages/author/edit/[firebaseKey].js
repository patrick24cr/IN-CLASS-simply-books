import React from 'react';
import { useRouter } from 'next/router';

export default function DynamicRoute2() {
  const router = useRouter();
  const { firebaseKey } = router.query;
  return (
    <div>Dynamic Route 2</div>
  );
}
