import React, {}                 from 'react';
import {withNamespaces }         from 'react-i18next';
import { Container, Grid }       from '@mui/material';
import Router                    from 'components/Router';
import Header                    from "coreUI/navigation/Header";
import MobileStickyNav           from "coreUI/navigation/MobileStickyNav";
import { connect }               from 'react-redux';
import LeftMenuSideBar           from "coreUI/navigation/LeftMenuSideBar";
import * as TemplateConstants    from "template/TemplateConstants";
import './styles/RootTemplate.scss';


function RootTemplate (props){  
        const {actionHandler, router, routes} = props;
        return (
            <div className="RootTemplate">
               <Header          {...props} />
               <MobileStickyNav {...props} />
               <Container fixed className='RootTemplateContainer'>
                <Grid container spacing={TemplateConstants.GRID_SPACING} >
                    <Grid item md={3}  className='sideBarContainer'> <LeftMenuSideBar {...props} /> </Grid>                
                    <Grid item md={9} xs={12} className='mainContainer'> <Router router={router} routes={routes} /> </Grid>
                </Grid>
                </Container>
            </div>                       
          );
}
const mapStateToProps = state => {
    const { userProfileReducer, creditBureauProfileReducer, crossSellOfferReducer, router, languageReducer, creditAlertReducer } = state;
    return {
        creditBureauProfileReducer,userProfileReducer,
        crossSellOfferReducer,router,languageReducer,creditAlertReducer
    }
};
const mapDispatchToProps = (dispatch) => ({
    redirectToOffers(){dispatch(RouterActions.redirectToOffers());},
    redirectToFaqPage(){dispatch(RouterActions.redirectToFaqPage());},
    redirectToContactUsPage(){dispatch(RouterActions.redirectToContactUsPage());},
    redirectToUserProfile(){dispatch(RouterActions.redirectToUserProfile());},
    redirectToReportAnalysisPage(){dispatch(RouterActions.redirectToReportAnalysisPage());},
    redirectToAccountDetails(){dispatch(RouterActions.redirectToAccountDetails());},
    redirectToPersonalDetails(){dispatch(RouterActions.redirectToPersonalDetails());},
    redirectToCreditFactorsPage(){dispatch(RouterActions.redirectToCreditFactorsPage());},
    redirectToCreditPlusDashboard() { dispatch(RouterActions.redirectToCreditPlusDashboard());},
    redirectToCreditHealthDashboard() { dispatch(RouterActions.redirectToCreditHealthDashboard());},
    selectedCreditFactor(value){dispatch(UserActions.selectedCreditFactor(value))},
})
export default  withNamespaces('common')(connect(mapStateToProps, mapDispatchToProps)(RootTemplate));