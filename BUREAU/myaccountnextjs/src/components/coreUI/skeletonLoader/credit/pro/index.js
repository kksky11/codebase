import React, {  }      from 'react';

import IntroducingBalancePowerSkeleton from "../savings/IntroducingBalancePowerSkeleton";
import UnparallelBenefitsSkeleton      from "../savings/UnparallelBenefitsSkeleton";
import 'skeletonLoader/styles/LoaderSkeleton.scss';
import './styles/Pro.scss';

function CreditSavingsSkeleton (props){
    return (
        <div className="loaderSkeleton creditSavingsSkeleton">           
            <IntroducingBalancePowerSkeleton />
            <UnparallelBenefitsSkeleton items={3} />
        </div>
    );
}

export default CreditSavingsSkeleton;