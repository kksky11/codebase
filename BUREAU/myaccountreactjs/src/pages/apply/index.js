import React, { lazy, Suspense } from "react";
import { ScrollRestoration } from "react-router-dom";

const FullPageSkeleton = lazy(() => import('pages/coreUI/skeletonLoader/FullPageSkeleton'), { loading: () => 'Loading...', });
function Apply(props) {
    return (
        <Suspense>
            <div className={`${props?.activeURL}_wrapper`}>
                <FullPageSkeleton />
                <ScrollRestoration />
            </div>
        </Suspense>


    )
}

export default Apply