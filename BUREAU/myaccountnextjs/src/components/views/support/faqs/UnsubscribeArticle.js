import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
import styles from './styles/faqs.module.scss';
const Heading = dynamic(() => import('@coreComponents/heading'), { loading: () => '', });

function UnsubscribeArticle(props) {
    const [unsubscribeArticleState, setUnsubscribeArticleState] = useState([]);
    useEffect(() => {
        import("@constants/faqs/unsubscribeArticle").then(({ en }) => { setUnsubscribeArticleState(en) });
    }, []);

    return (
        <section className={`${styles._accordion_v2} ${styles.topArticle}`}>
            <Heading heading={"Account-Related Questions"} headingClass="_right" />
            {unsubscribeArticleState?.map((items, index) => {
                return (
                    <article className={`${styles._article}`} key={`article${index}`}>
                        <label className={`${props?.selectedId == `unsubscribeArticle_article${index}` ? styles.activeArticle : ""}`} htmlFor={`unsubscribeArticle_article${index}`} id={`unsubscribeArticle_article${index}`} onClick={(e) => props.actionHandler("activeArticle", {faqs:items,id:`unsubscribeArticle_article${index}`})}>{items.ques}</label>
                        <div className={`${styles.infoTxt}`}>{items?.ans?.map((ans) => (ans))}</div>
                    </article>

                )
            })}
        </section>
    )

}
export default UnsubscribeArticle;