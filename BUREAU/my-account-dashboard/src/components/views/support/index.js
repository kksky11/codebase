import React,{lazy,Suspense} from 'react';
import styles     from './contactUs.module.scss';
import Image      from 'next/image';
const SectionHeading  = lazy(() => import('@coreComponents/sectionHeading'), {loading: () => '',});
function ContactUs(props) {
  const contactData=[
    {
        class   :   "question_v1",
        heading :   "Visit FAQ",
        infoText:   ["For any questions regarding","your Credit report"],
        link    :   "faq"
    },{
        class   :   "email",
        heading :   `Email: contact@christschool.in`,
        infoText:   ["email to us related to your Credit Report"],
        link    :   "mailto:contact@christschool.in"
    },{
        class   :   "headset",
        heading :   `"Toll Free": 9643493605`,
        infoText:   ["Lines are open Mon-Sat from","9:30 am – 4:30 pm"],
        link    :   "tel:9643493605"
    },{
        class   :   "whatsapp_v1",
        heading :   `Whatsapp: 9643493605`,
        infoText:   ["You can even reach out to us via WhatsApp."],
        link    :   true ? "https://web.whatsapp.com/send?phone=9643493605" : "https://api.whatsapp.com/send?phone=9643493605",
    }
  ];
  const actionHandler=(type,data)=>{
    // eslint-disable-next-line default-case
    switch (type) {
        case 'faq'     : props.redirectToFaqPage(); break;
        case 'email'   : window.open(data, '_blank'); break;
        case 'tallFree': window.open(data, '_blank'); break;
        case 'whatsapp': window.open(data, '_blank'); break;
    }
}
    return (
        <Suspense>
           <div className={styles.contactUsContainer}>
                    <SectionHeading className="pageHeading"  heading={"How can we help you?"} subHeading={["It looks like you are experiencing problem with our service. Don’t worry! We’re here to help."]}/> 
                    <div className={styles.contentWrapper}>
                        {contactData.map((items, index) => {
                            return (
                                <div key={`content_${index}`} className={`${styles.content} ${items.class}`} onClick={() => actionHandler(items.class, items.link)}>
                                <div className={`${styles.heading} ${items.class}`}>
                                   <div className={styles.iconContainer}><Image src={`/images/contactUs/${items.class}.svg`} alt={items.class} width={24} height={24} /> </div>
                                    {items.heading}
                                    </div>
                                    <ul className={styles.infoText}>
                                        {items.infoText.map((infoItems, infoIndex) => <li key={`infoIndex_${infoIndex}`}>{infoItems}</li>)}
                                    </ul>
                                </div>
                            )
                        })}
                    </div>
           </div>
           </Suspense>
        )

}
export default ContactUs;