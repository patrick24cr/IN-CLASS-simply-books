import React from 'react';
import { useRouter } from 'next/router';

export default function DynamicRoute() {
  const router = useRouter();
  const { firebaseKey } = router.query;
  return (
    <div>Dynamic Route</div>
  );
}
