import dynamic from 'next/dynamic';
import { useState } from 'react';
import styles from './styles/faqs.module.scss';
const SectionHeading = dynamic(() => import('@coreComponents/sectionHeading'), { loading: () => '', });

const TopQuestions = dynamic(() => import('@components/views/support/faqs/TopQuestions'), { loading: () => '', });
const UnsubscribeArticle = dynamic(() => import('@components/views/support/faqs/UnsubscribeArticle'), { loading: () => '', });
//const CommonFaqs  = dynamic(() => import('@components/views/faqs/CommonFaqs'), {loading: () => '',});
//const DeleteAccountConfirmation   = dynamic(()=>import('@components/views/faqs/DeleteAccountConfirmation'));
//const SubscribeAccountConfirmation   = dynamic(()=>import('@components/views/faqs/SubscribeAccountConfirmation'));

import { useSelector, useDispatch } from 'react-redux';
import { setFaqQuesName, selectFaqsReducer } from '@store/slices/faqsSlice';

export const FaqsPage = (props) => {
    //const faqsQuesName = useSelector(selectFaqsReducer);
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
        <div className={styles.faqContainer}>
            <SectionHeading className="pageHeading" sourceComponent={"faqsHeading"} heading={"Frequently Asked Questions"} tag={"Everything you need to know"} />
            <TopQuestions {...props} {...faqState} actionHandler={actionHandler} />
            <UnsubscribeArticle {...props} {...faqState} actionHandler={actionHandler} />
            {/* <CommonFaqs         {...props} {...faqState} actionHandler={actionHandler} /> */}
        </div>
    );
}

export default FaqsPage;