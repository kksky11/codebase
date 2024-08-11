import React, { lazy, Suspense } from "react";
import { getCurrentURL}       from "coreApp/utility";
import "./styles/support.scss"
const BureauScoreSkeleton = lazy(() => import('pages/coreUI/skeletonLoader/myAccount/BureauScoreSkeleton'), { loading: () => 'Loading...', });
function Support(props) {
    return (
        <Suspense>
            <div className={`${getCurrentURL()}_wrapper`}>
                <div className="pageTitle">Support Page</div>
                <BureauScoreSkeleton />
            </div>
        </Suspense>
    )
}

export default Support