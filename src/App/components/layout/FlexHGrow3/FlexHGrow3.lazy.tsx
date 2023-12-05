import React, { lazy, Suspense } from 'react';

const LazyFlexHGrow3 = lazy(() => import('./FlexHGrow3'));

const FlexHGrow3 = (props:any) => (
  <Suspense fallback={null}>
    <LazyFlexHGrow3 {...props} />
  </Suspense>
);

export default FlexHGrow3;
