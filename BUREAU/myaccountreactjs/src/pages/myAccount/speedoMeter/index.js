import React, {Fragment,lazy }     from 'react';
import Button                 from 'pages/coreUI/common/_button';
import * as TemplateConstants from 'template/TemplateConstants';

import ScoreInfoTitle         from './ScoreInfoTitle';
import ScoreInfoText          from './ScoreInfoText';
import ScoreInfoMeter         from './ScoreInfoMeter';
import BureauInfoAlert        from './BureauInfoAlert';
import * as ApiConstants      from 'coreApp/constants/apiConstants';
import { Grid }               from '@mui/material';
import './styles/speedoMeter.scss';
const BureauScoreSkeleton  = lazy(() => import('pages/coreUI/skeletonLoader/myAccount/BureauScoreSkeleton'), { loading: () => 'Loading...', });
function Speedometer(props){  
        const {noScoreCriteria, loginType,actionHandler} = props; 
        return (
            <Fragment>             
                <BureauInfoAlert {...props} />
                <ScoreInfoTitle {...props} />                    
                <Grid container rowSpacing={1} direction="row" alignItems="center" justifyContent="space-between" spacing={TemplateConstants.GRID_SPACING} className="scoreContainer">
                    <Grid item xs={12} md={4} className="score">
                        {props?.bureauData  ?<ScoreInfoMeter {...props} />  : <BureauScoreSkeleton   /> }                 
                        {(!noScoreCriteria && loginType !== ApiConstants.CRM_AGENT )
                            && <div className="downloadReport">
                                <Button
                                    className="btn downloadReportBtn"
                                    btnClickHandler={() => actionHandler('downloadReport', {})}
                                    buttonText={'Download Report'}
                                    btnLeftIcon
                                    btnLeftIconSrc={'/images/scoreMeter/download.svg'}
                                    imgHeight={'13px'}
                                    imgWidth={'16px'}
                                />
                            </div>
                        }
                    </Grid>
                    <Grid item xs={12} md={7} ><ScoreInfoText {...props} /> </Grid>
                </Grid>
            </Fragment>                     
          );
}

export default  Speedometer;