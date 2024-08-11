import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
import styles from './styles/faqs.module.scss';
const Heading = dynamic(() => import('@coreComponents/heading'), { loading: () => '', });

function TopQuestions(props) {

    const [topQuestionsState, setTopQuestionsState] = useState([]);
    useEffect(() => {
        import("@constants/faqs/topQuestions").then(({ en }) => { setTopQuestionsState(en) });
    }, []);
    return (
        <section className={`${styles._accordion_v2} ${styles.topArticle}`}>
            <Heading heading={"Top Questions: "} headingClass="_right" className={`${styles.questionsHeading} questionsHeading`} />
            {topQuestionsState?.map((items, index) => {
                return (
                    <article className={`${styles._article}`} key={`article${index}`}  >
                        <label className={`${props?.selectedId == `topQuestions_article${index}` ? styles.activeArticle : ""}`} htmlFor="acc-1_a" onClick={(e) => props.actionHandler("activeArticle",{faqs:items,id:`topQuestions_article${index}`})}>{items.ques}</label>
                        <div className={`${styles.infoTxt} `}>{items?.ans?.map((ans) => (ans))}</div>
                    </article>
                )
            })}
        </section>
    )

}
export default TopQuestions;