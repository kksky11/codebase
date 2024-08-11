import React, { Component } from 'react';
import Image                from 'coreComponents/common/_image';
import './styles/Tab.scss';

class customTab extends Component{
    constructor(props) {
        super(props);
        this.state = {isActive: this.props.SelectedTab};     
    }

    componentWillMount() {
       this.clickHandler(this.props.SelectedTab);
    };

    clickHandler = (tabs) => {
        const {actionHandler} = this.props;
        this.setState({isActive:tabs});
        actionHandler('TabHandler',tabs);
    }

    render() {
        const {clickHandler} = this;
        const {isActive} = this.state;
        const {tabHeadingIcon,tabId,tabHeading, SelectedTab,tabHeadingLink, tabContant} = this.props;
       
        return (
            <div className={`${tabHeadingLink && tabHeadingLink.length > 0 ? "" : "tabHeadingLink"} TabContainer`}>
                { tabHeading && tabHeading.length > 0  && 
                <div className={`${SelectedTab} tabHeading`} id={tabId}>
                     {
                       tabHeading.map((items, index) => (
                        <label 
                            key={`tabHeading_${index}`} 
                            id={`tabHeading_${index}`} 
                            ref={`tabHeading_${index}`} 
                            onClick = {() => clickHandler(tabHeadingLink[index])} 
                            className={`${tabHeadingLink[index] == isActive ? 'active' : ''} tabLink`}
                        >
                            {tabHeadingIcon && <Image src={`/images/icons/${items.includes('Loans') ? `loanIcon` : items.includes('Cards') ? "cardIcon" : ""}${SelectedTab == items ? 'Active' : ""}.svg`} alt={items} />}
                            {items}
                        </label>
                        ))
                     }
                </div>}
               {tabContant && <div className="tabContant">{tabContant}</div>}
            </div>
            );
        }
}
  

export default customTab;
