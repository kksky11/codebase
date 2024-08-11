import styles from './sectionHeading.module.scss';

//Usese
{/* 
    <Heading 
        {...this.props}  
        versionClass = 'v1' / 'v2'
        isLoader     = {boolean}
        actionHandler= {function}
   /> 
*/}

function SectionHeading(props) {
    const {className="",heading,subHeading,sourceComponent="",tag} = props;
    return (
               <div className={`${styles[className]} ${styles.sectionHeading} ${styles[sourceComponent]}`}>
                  { heading && 
                    <div className={styles.heading}>
                      {heading} 
                      {tag ? <span className={styles.tag}>{tag}</span> : ''}
                    </div>
                  }
                  {subHeading && subHeading.map((items, index) => (<p key={`subTitle_${index}`} className={styles.subTitle}>{items}</p>) )}
                </div>  
           );
  }
    
export default SectionHeading;
