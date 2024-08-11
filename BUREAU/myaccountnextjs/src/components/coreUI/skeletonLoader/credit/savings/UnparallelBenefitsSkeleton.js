import React from 'react'

import './styles/Savings.scss'
import '../../styles/LoaderSkeleton.scss'

function UnparallelBenefitsSkeleton(props) {
    const { items = 1 } = props
    let count = []
    for (let i = 0; i < items; i++) {
        count.push(i)
    }
    return (
        <div className='UnparallelBenefits _commonSkeleton'>
            <div className='_heading c-skeleton__text'></div>
            <div className='featuresListWrapper c-skeleton_body'>
                {count.map((item, index) =>
                    <div className='_featuresList' key={index}>
                        <div className='_icon c-skeleton__figure'></div>
                        <h3 className='_title c-skeleton__text'></h3>
                        <p className='_infoText c-skeleton__text'></p>
                    </div>)
                }
            </div>
            <div className='buttonContainer'>
                <div className='btn c-skeleton__button'> </div>
            </div>
        </div>
    )
}

export default UnparallelBenefitsSkeleton