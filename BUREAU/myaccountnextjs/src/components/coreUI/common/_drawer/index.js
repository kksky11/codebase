import React,{useState,useEffect} from "react";
import PropTypes                  from 'prop-types';
import SwipeableDrawer            from '@material-ui/core/SwipeableDrawer'
import './style/drawer.scss';

{/* <Drawer 
    customClass         = {string} 
    anchorDirection     = {string}  [left,right,bottom,top] 
    onCloseHandler      = {func},
    isOpen              = {bool}
    disableSwipeToOpen  = {bool}    //optional
    disableDiscovery    = {bool}    //optional
/> */}

function Drawer(props){
    const {duration={enteringScreen:1,leavingScreen:0}, isOpen, onCloseHandler,customClass, anchorDirection, children, disableSwipeToOpen, disableDiscovery } = props;
    const [isDrawerOpen, setIsDrawerOpen]  = useState(isOpen);
   
    useEffect(() => {
        setIsDrawerOpen(isOpen)
    },[isOpen]);    

    const drawerHandler = () => {
        setIsDrawerOpen(!isDrawerOpen);
        onCloseHandler ? onCloseHandler() : null;
    } 
    return (
        <SwipeableDrawer 
            className          = {`swipeableDrawer ${customClass}`}
            anchor             = {anchorDirection == "none" ? "bottom" : anchorDirection}
            open               = {isDrawerOpen}
            onClose            = {drawerHandler}
            onOpen             = {drawerHandler}
            disableSwipeToOpen = {disableSwipeToOpen ? disableSwipeToOpen: false}
            disableDiscovery   = {disableDiscovery ? disableDiscovery : false}
            //transitionDuration = {{enter: duration.enteringScreen, exit: duration.leavingScreen }}
        >
            {children}
        </SwipeableDrawer>
    );
}

Drawer.propTypes = {
    customClass         :   PropTypes.string, 
    anchorDirection     :   PropTypes.string, 
    children            :   PropTypes.node,
    onCloseHandler      :   PropTypes.func,
    isOpen              :   PropTypes.bool,
    disableSwipeToOpen  :   PropTypes.bool,
    disableDiscovery    :   PropTypes.bool
};

export default Drawer;