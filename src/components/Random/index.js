import React from 'react'
import styles from './_Random.css'
class Random extends React.Component {
  constructor () {
    super();
    this.state={};
  }
  render() {
    return (
 <div className={styles.browser}>
        <div className={styles.browserheader}>
          <div className={styles.browserbtns}>
            <div className={styles.browserbtn+' '+styles.close} />
            <div className={styles.browserbtn+' '+styles.retract} />
            <div className={styles.browserbtn+' '+styles.expand} />
          </div>
          <ul className={styles.tabs}>
            <li className={styles.tab+' '+styles.active}>Calm<span className={styles.close}>x</span></li>
          </ul>
        </div>
        <div className={styles.browserbar}>
          <input defaultValue='https://www.calm.com' className={styles.address} />
          <div className={styles.button}><i className={styles.fa+' '+styles.fabars} /></div>
        </div>
      <div className={styles.page}><img src='/assets/example_site.jpg' className={styles.screenshot} />
        <div className={styles.tags}>
          <div className={styles.tag}>Learn</div>
          <div className={styles.tag}>Music</div>
          <div className={styles.tag}>Stuff</div>
        </div>
      </div>
 </div>
    )
  }
}
export default Random
