import React                    from "react";
import PropTypes                from 'prop-types';
import './style/slide.scss';

{/* <SlideCard
    className       = {string} // pass only when required
    slideDirection  = {string} // left,right,up,down
    isActive        = {bool}   // requided only when to show slide based on condition
>
    {children}
</SlideCard> */}

const SlideCard = (props) => {
    const { children, className, innerDivClassName, slideDirection, isActive = true } = props;
    return(
        isActive && <div className={`sliderCard ${className}`}>
            <div className={`animated ${slideDirection} ${innerDivClassName}`}>  {children} </div>
        </div>
    );
};

SlideCard.propTypes = {
    children            :   PropTypes.node,
    innerDivClassName   :   PropTypes.string,
    slideDirection      :   PropTypes.string,
    className           :   PropTypes.string,
    isActive            :   PropTypes.bool
};

export default SlideCard;