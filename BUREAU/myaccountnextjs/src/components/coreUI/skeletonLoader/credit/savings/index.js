import React from 'react'

import './styles/Savings.scss'
import 'skeletonLoader/styles/LoaderSkeleton.scss'
import UnparallelBenefitsSkeleton from './UnparallelBenefitsSkeleton'
import IntroducingBalancePowerSkeleton from './IntroducingBalancePowerSkeleton'
import BalancePowerIn3EasyStepsSkeleton from './BalancePowerIn3EasyStepsSkeleton'

function CreditSavingsSkeleton (){
    return (
        <div className='loaderSkeleton creditSavingsSkeleton'>
            <IntroducingBalancePowerSkeleton />
            <UnparallelBenefitsSkeleton items={3} />
            <BalancePowerIn3EasyStepsSkeleton items={3} />
        </div>
    )
}

export default CreditSavingsSkeleton