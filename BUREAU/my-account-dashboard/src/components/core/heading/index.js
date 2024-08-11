import styles from  './styles/heading.module.scss';

//Usese
{/*@ 
    <Heading 
        {...this.props}  
        versionClass = 'v1' / 'v2'
        isLoader     = {boolean}
        actionHandler= {function}
   /> 
@*/}

function Heading(props) {
    const {className,headingClass,heading,subHeading,sourceComponent,onlyCreditHealthPaid} = props;
    return (
               <div className={`${styles[className]} ${styles[headingClass]} ${styles[sourceComponent]} ${styles.commonHeading}`}>
                  { heading && 
                    <div className={`${styles.heading}`}>
                      {heading} 
                      {onlyCreditHealthPaid ? <span className={styles.tag}>Add-on</span> : ''}
                    </div>
                  }
                  {subHeading && subHeading.map((items, index) => (<p key={`subHeading_${index}`} className={styles.subHeading}>{items}</p>) )}
                </div>  
           );
  }
    
export default Heading;
