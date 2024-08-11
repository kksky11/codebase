import React,{lazy, Suspense} from "react";
import { getCurrentURL}       from "coreApp/utility";
import "./styles/reportDashboard.scss";
const BureauScoreSkeleton = lazy(() => import('pages/coreUI/skeletonLoader/myAccount/BureauScoreSkeleton'), { loading: () => 'Loading...', });
const ProductBannerSkeleton = lazy(() => import('pages/coreUI/skeletonLoader/myAccount/ProductBannerSkeleton'), { loading: () => 'Loading...', });
function ReportDashboard(props) {
    return (
        <Suspense>
            <div className={`${getCurrentURL()}_wrapper`}>
                <div className="pageTitle">Report Dashboard</div>
                <BureauScoreSkeleton />
                <ProductBannerSkeleton />
            </div>
        </Suspense>
    )
}

export default ReportDashboard