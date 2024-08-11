import React, { lazy, Suspense } from "react";
import { useState, useEffect } from 'react';
import './styles/faqs.scss';
const Heading = lazy(() => import('pages/coreUI/heading'), { loading: () => '', });

function UnsubscribeArticle(props) {
    const [unsubscribeArticleState, setUnsubscribeArticleState] = useState([]);
    useEffect(() => {
        import("coreApp/constants/faqs/unsubscribeArticle").then(({ en }) => { setUnsubscribeArticleState(en) });
    }, []);

    return (
        <Suspense>
            <section className={`_accordion_v2 topArticle`}>
                <Heading heading={"Account-Related Questions"} headingClass="_right" />
                {unsubscribeArticleState?.map((items, index) => {
                    return (
                        <article className={`_article`} key={`article${index}`}>
                            <label className={`${props?.selectedId === `unsubscribeArticle_article${index}` ? "activeArticle" : ""}`} htmlFor={`unsubscribeArticle_article${index}`} id={`unsubscribeArticle_article${index}`} onClick={(e) => props.actionHandler("activeArticle", { faqs: items, id: `unsubscribeArticle_article${index}` })}>{items.ques}</label>
                            <div className={`infoTxt`}>{items?.ans?.map((ans) => (ans))}</div>
                        </article>

                    )
                })}
            </section>
        </Suspense>
    )

}
export default UnsubscribeArticle;