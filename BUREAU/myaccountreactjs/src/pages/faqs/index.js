import React, { lazy, Suspense } from "react";
import { useState } from 'react';
import './styles/faqs.scss';
import { useSelector, useDispatch } from 'react-redux';
import { setFaqQuesName, selectFaqsReducer } from 'store/slices/faqsSlice';
const SectionHeading = lazy(() => import('pages/coreUI/sectionHeading'), { loading: () => '', });
const TopQuestions = lazy(() => import('./TopQuestions'), { loading: () => '', });
const UnsubscribeArticle = lazy(() => import('./UnsubscribeArticle'), { loading: () => '', });

export const FaqsPage = (props) => {
    const faqsQuesName = useSelector(selectFaqsReducer);
    const dispatch = useDispatch()

    const [faqState, setFaqState] = useState({
        selectedSection: "topQuestions",
        selectedId: "",
        accountDeleteModal: false,
        subscribeModal: false,
        resubscribeModal: false,
    });

    const actionHandler = (type, data) => {
        switch (type) {
            case 'accountDeleteConfirmationModal':
                setDataToStore({ accountDeleteModal: data });
                break;
            case 'SubscribeAccount':
                setDataToStore({ subscribeModal: data });
                break;
            case 'ResubscribeAccount':
                setDataToStore({ resubscribeModal: data });
                break;
            case 'closeModal': setDataToStore({ accountDeleteModal: false, resubscribeModal: false, subscribeModal: false }); break;
            case 'activeChildArticle':
            case 'activeArticle': dispatch(setFaqQuesName(data?.faqs)); setDataToStore({ selectedId: data?.id }); break;
            case 'selectedSection': setDataToStore({ selectedSection: data?.id }); break;
            default: break;
        }
    }


    const setDataToStore = (currentData) => {
        let storeData = { ...faqState, ...currentData }
        setFaqState(storeData)
        // localstorage.setData('faqState', storeData)
        // log(`faqState=> ${JSON.stringify(storeData)}`)
    }

    return (
        <Suspense>
            <div className={"faqContainer"}>
                <SectionHeading className="pageHeading" sourceComponent={"faqsHeading"} heading={"Frequently Asked Questions"} tag={"Everything you need to know"} />
                <TopQuestions {...props} {...faqState} actionHandler={actionHandler} />
                <UnsubscribeArticle {...props} {...faqState} actionHandler={actionHandler} />
                {console.log(JSON.stringify(faqsQuesName))}
            </div>
        </Suspense>
    );
}

export default FaqsPage;