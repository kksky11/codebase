import React, { lazy, Suspense } from "react";
import { useState, useEffect } from 'react';
import './styles/faqs.scss';
const Heading = lazy(() => import('pages/coreUI/heading'), { loading: () => '', });

function TopQuestions(props) {

    const [topQuestionsState, setTopQuestionsState] = useState([]);
    useEffect(() => {
        import("../../coreApp/constants/faqs/topQuestions").then(({ en }) => { setTopQuestionsState(en) });
    }, []);
    return (
        <Suspense>
            <section className={`_accordion_v2 topArticle`}>
                <Heading heading={"Top Questions: "} headingClass="_right" />
                {topQuestionsState?.map((items, index) => {
                    return (
                        <article className={`_article`} key={`article${index}`}  >
                            <label className={`${props?.selectedId === `topQuestions_article${index}` ? "activeArticle" : ""}`} htmlFor="acc-1_a" onClick={(e) => props.actionHandler("activeArticle", { faqs: items, id: `topQuestions_article${index}` })}>{items.ques}</label>
                            <div className={`infoTxt `}>{items?.ans?.map((ans) => (ans))}</div>
                        </article>
                    )
                })}
            </section>
        </Suspense>
    )

}
export default TopQuestions;