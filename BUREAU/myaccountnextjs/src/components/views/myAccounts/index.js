import dynamic from 'next/dynamic';
const BureauScoreSkeleton = dynamic(() => import('@skeletonLoader/myAccount/BureauScoreSkeleton'), { loading: () => 'Loading...', });
const ProductBannerSkeleton = dynamic(() => import('@skeletonLoader/myAccount/ProductBannerSkeleton'), { loading: () => 'Loading...', });
import styles from './myAccount.module.scss';
function MyAccount(props) {
  const actionHandler = (type, data) => {
    // switch (type) {
    //     case 'faq'     : props.redirectToFaqPage(); break;
    // }
  }
  return (
    <div className={styles.myAccountPageWrapper} >
      {/* My Account page */}
      <BureauScoreSkeleton />
      <ProductBannerSkeleton />
      <ProductBannerSkeleton />
      <ProductBannerSkeleton />
    </div>
  )

}
export default MyAccount;