import React, { lazy, Suspense } from "react";
import { getCurrentURL}       from "coreApp/utility";
import "./styles/myAccount.scss"
//const BureauScoreSkeleton  = lazy(() => import('pages/coreUI/skeletonLoader/myAccount/BureauScoreSkeleton'), { loading: () => 'Loading...', });
const ProductBannerSkeleton = lazy(() => import('pages/coreUI/skeletonLoader/myAccount/ProductBannerSkeleton'), { loading: () => 'Loading...', });
const CreditScore = lazy(() => import('pages/myAccount/CreditScore'), { loading: () => 'Loading...', });
const WhatsAppUpdateBanner = lazy(() => import('pages/myAccount/banner/WhatsAppUpdateBanner'), { loading: () => 'Loading...', });
const RectificationBanner = lazy(() => import('pages/myAccount/banner/RectificationBanner'), { loading: () => 'Loading...', });
const CreditFactors = lazy(() => import('pages/myAccount/banner/CreditFactors'), { loading: () => 'Loading...', });
const StepUpCreditCardBanner = lazy(() => import('pages/myAccount/banner/StepUpCreditCardBanner'), { loading: () => 'Loading...', });

function MyAccountDashboard(props) {
    return (
        <Suspense>
            <div className={`${getCurrentURL()}_wrapper`}>
                <CreditScore {...props} />
                {/* <BureauScoreSkeleton /> */}
                <RectificationBanner {...props} />
                <StepUpCreditCardBanner {...props}/>
                <WhatsAppUpdateBanner {...props} />
                <CreditFactors {...props} />
                {/* {JSON.stringify(props?.reportStatus?.bureauList)} */}
                <ProductBannerSkeleton />
            </div>
        </Suspense>
    )
}

export default MyAccountDashboard