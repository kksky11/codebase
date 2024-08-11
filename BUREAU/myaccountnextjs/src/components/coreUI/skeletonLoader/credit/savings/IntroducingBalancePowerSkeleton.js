import React, { } from 'react'

import './styles/Savings.scss'
import '../../styles/LoaderSkeleton.scss'

function IntroducingBalancePowerSkeleton(props) {
    return (
        <div className='introducingBalancePower _commonSkeleton'>
            <div className='infoContainer c-skeleton_body'>
                <div className='heading c-skeleton__text'></div>
                <p className='infoText c-skeleton__text'></p>
            </div>
            <div className='_imageContainer c-skeleton_body'>
                <div className='img c-skeleton__figure'></div>
            </div>
        </div>
    )
}

export default IntroducingBalancePowerSkeleton