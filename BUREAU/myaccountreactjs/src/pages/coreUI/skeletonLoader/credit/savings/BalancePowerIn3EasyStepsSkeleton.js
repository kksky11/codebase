import React from 'react'

import './styles/Savings.scss'
import '../../styles/LoaderSkeleton.scss'

function BalancePowerIn3EasyStepsSkeleton(props) {
    const { items = 1 } = props
    let count = []
    for (let i = 0; i < items; i++) {
        count.push(i)
    }
    return (
        <div className='BalancePowerIn3EasySteps _commonSkeleton'>
            <div className='_heading c-skeleton__text'></div>
            <div className='_stepsWrapper c-skeleton_body'>
                <div className='_listContainer'>
                    {count.map((item, index) =>
                        <div className='_list' key={index}>
                            <div className='_step c-skeleton__figure'></div>
                            <h3 className='_title c-skeleton__text'></h3>
                            <p className='_infoText c-skeleton__text'></p>
                        </div>)
                    }
                </div>
                <div className='_imageContainer'>
                    <div className='img c-skeleton__figure'></div>
                </div>
            </div>
        </div>
    )
}

export default BalancePowerIn3EasyStepsSkeleton