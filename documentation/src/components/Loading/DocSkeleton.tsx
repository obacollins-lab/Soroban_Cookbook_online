import React from 'react';
import { Skeleton } from './index';

export default function DocSkeleton() {
  return (
    <div style={{ padding: '2rem', border: '2px dashed #ccc', marginTop: '1rem' }}>
      <p style={{ fontWeight: 'bold', color: 'red' }}>[ISSUE #35 PREVIEW MODE]</p>

      {/* This will stay on screen so you can take the screenshot */}
      <Skeleton height="3rem" width="80%" />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '20px' }}>
        <Skeleton height="1.25rem" width="100%" />
        <Skeleton height="1.25rem" width="90%" />
        <Skeleton height="1.25rem" width="95%" />
        <Skeleton height="150px" width="100%" />
      </div>
    </div>
  );
}
