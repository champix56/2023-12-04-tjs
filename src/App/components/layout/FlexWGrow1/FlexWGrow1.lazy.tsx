import React, { lazy, Suspense } from 'react';

const LazyFlexWGrow1 = lazy(() => import('./FlexWGrow1'));

const FlexWGrow1 = (props: any) => (
  <Suspense fallback={null}>
    <LazyFlexWGrow1 {...props} />
  </Suspense>
);

export default FlexWGrow1;
