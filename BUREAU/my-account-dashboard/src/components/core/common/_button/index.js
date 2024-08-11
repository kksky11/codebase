import React, { Component }     from "react";
import PropTypes                from "prop-types";
import styles from './_button.module.scss';
class Button extends Component {
    render() {
        const { disabled, btnRole, btnType, className, btnClickHandler, buttonText, isLoading, btnLeftIconSrc, btnLeftIcon, btnRightIconSrc, btnRightIcon, ...rest } = this.props;
        return(
            <button 
                name            = "_button"
                disabled        = {disabled ? disabled : false}
                type            = {btnType ? btnType : 'button'}
                role            = {btnRole ? btnRole : 'button'}
                className       = {`${styles._button} ${styles.btn} ${className ? styles[className] : `${styles.blueTheme}`} ${isLoading ? `${styles.loader}` : ""}`}
                onClick         = {btnClickHandler}
                aria-label      = "Center Align"
                aria-haspopup   = 'true'
                aria-expanded   = 'false'
                {...rest}
            >
                {btnLeftIcon  && <img src={btnLeftIconSrc} className={`${styles.btn_before_image} ${styles.btnIcon}`} alt="btn_before_image" />}
                {buttonText   && !isLoading && <span className={styles.btn_text}> {buttonText} </span> }
                {isLoading    && <div className={`${styles.spinner} ${styles.m0A}`}><div className={styles.rect1}></div><div className={styles.rect2}></div><div className={styles.rect3}></div><div className={styles.rect4}></div><div className={styles.rect5}></div></div>}
                {btnRightIcon && btnRightIconSrc && <img src={btnRightIconSrc} className={styles.btn_after_image} alt="btn_after_image" /> }
            </button>
        );
    }
}

Button.propTypes = {
    className               : PropTypes.string,
    buttonText              : PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    isLoading               : PropTypes.bool,
    btnType                 : PropTypes.string,
    btnRole                 : PropTypes.string,
    btnClickHandler         : PropTypes.func,
    disabled                : PropTypes.bool,
    btnLeftIconSrc          : PropTypes.string, 
    btnLeftIcon             : PropTypes.bool, 
    btnRightIconSrc         : PropTypes.string,
    btnRightIcon            : PropTypes.bool,
};

export default Button;

// ----- PROP DESCRIPTION -----
// className - [white-theme || blue-theme]