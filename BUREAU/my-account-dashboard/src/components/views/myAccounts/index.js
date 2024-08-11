import React,{lazy,Suspense} from 'react';
import styles from './myAccount.scss';
import logo from '@public/launcher_icon-512.png';
// const BureauScoreSkeleton = lazy(() => import('@skeletonLoader/myAccount/BureauScoreSkeleton'), { loading: () => 'Loading...', });
// const ProductBannerSkeleton = lazy(() => import('@skeletonLoader/myAccount/ProductBannerSkeleton'), { loading: () => 'Loading...', });
function MyAccount(props) {
  
  return (
    // <Suspense>
      <div className={styles.myAccountPageWrapper} >
      <img src={logo} className="App-logo" alt="logo" />
       My Account dashboard
      {/* <BureauScoreSkeleton />
      <ProductBannerSkeleton />
      <ProductBannerSkeleton />
      <ProductBannerSkeleton /> */}
    </div>
    // </Suspense>
  )

}
export default MyAccount;