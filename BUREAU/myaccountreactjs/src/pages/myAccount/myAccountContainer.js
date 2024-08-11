/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
// import { request } from 'coreApp/services/httpsRequest';
// import { GET_BUREAU_SCORE } from 'coreApp/constants/apiConstants';
import { useSelector, useDispatch } from 'react-redux';
import { setReportStatus, updateActiveCreditBureau, selectReportStatus, selectActiveBureau } from 'store/slices/myAccountSlice';
import MyAccountDashboard from './index';
function MyAccountContainer(props) {
    const dispatch = useDispatch();
    const reportStatus = useSelector(selectReportStatus);
    const activeBureau = useSelector(selectActiveBureau);
    const [myAccountState, setMyAccountState] = useState({
        reportStatus: reportStatus,
        bureauStatus: {},
        tabHeader: [],
        activeBureau: activeBureau,
        bureauData: {}
    });

    useEffect(() => {
        init();
    }, [myAccountState?.reportStatus]);

    const init = async () => {
        try {
            Object.keys(reportStatus).length === 0
                ? import("coreApp/constants/mock/reportStatus.json").then(({ response }) => {
                    setDataToStore({ reportStatus: response });
                    dispatch(setReportStatus(response));
                    dispatch(updateActiveCreditBureau(response?.bureauTabOrderV2?.firstViewBureau || ""));
                })
                : setDataToStore({
                    reportStatus: reportStatus,
                    bureauStatus: reportStatus?.bureauList[reportStatus?.bureauTabOrderV2?.sortedBureauData?.indexOf(reportStatus?.bureauTabOrderV2?.firstViewBureau)]?.response,
                    tabHeader: reportStatus?.bureauTabOrderV2?.sortedBureauData || [],
                    activeBureau: reportStatus?.bureauTabOrderV2?.firstViewBureau || "",
                    bureauData: reportStatus?.bureauList[reportStatus?.bureauTabOrderV2?.sortedBureauData?.indexOf(reportStatus?.bureauTabOrderV2?.firstViewBureau)]?.response?.creditReportInformation?.score?.current || {}
                });
        } catch (e) {
            alert(e);
        }
        // console.log(`myAccountReducer===>: ${JSON.stringify(myAccountReducer)}`);
        // console.log(`reportStatus===>    : ${JSON.stringify(reportStatus)}`);

        // let payload = {
        //     "customerId":"ac667f63-8595-4166-b85a-91c7f9f737bc",
        //     "visitId":"8ca25cf0-f44d-40b3-bfc6-a822a0befb72"
        // }
        // try {
        //     const response = await request(GET_BUREAU_SCORE,'POST',{}, payload );
        //     if (!response.ok) throw new Error(`Error: ${response.status}`);
        //     const data = await response.json();
        //     alert(data.message);
        //   } catch (e) {
        //     alert(e);
        //   }
    }

    const actionHandler = (type, data) => {
        switch (type) {
            case 'selectedSection': setDataToStore({ selectedSection: data?.id }); break;
            case 'updateActiveCreditBureau': getBureauData(data); break;
            default: break;
        }
    }

    const getBureauData = (bureauName) => {
        setDataToStore({
            bureauStatus : reportStatus?.bureauList[reportStatus?.bureauTabOrderV2?.sortedBureauData?.indexOf(bureauName)]?.response,
            tabHeader    : reportStatus?.bureauTabOrderV2?.sortedBureauData || [],
            activeBureau : reportStatus?.bureauTabOrderV2?.firstViewBureau || "",
            bureauData   : reportStatus?.bureauList[reportStatus?.bureauTabOrderV2?.sortedBureauData?.indexOf(bureauName)]?.response?.creditReportInformation?.score?.current || {}
        })
    }

    const setDataToStore = (currentData) => {
        let storeData = { ...myAccountState, ...currentData }
        setMyAccountState(storeData)
        // localstorage.setData('faqState', storeData)
        // log(`faqState=> ${JSON.stringify(storeData)}`)
    }

    return <MyAccountDashboard
        {...props}
        {...myAccountState}
        actionHandler={actionHandler}
    />
}

export default MyAccountContainer