import dynamic from 'next/dynamic';
const ProductBannerSkeleton = dynamic(() => import('@skeletonLoader/myAccount/ProductBannerSkeleton'), { loading: () => 'Loading...', });
import './query.module.scss';
export const QueryPage = ({ data }) => (
    <div className={"queryPage"}>
        <ProductBannerSkeleton />
    </div>
);

export default QueryPage;