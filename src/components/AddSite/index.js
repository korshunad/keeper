import React from 'react'
import styles from './_AddSite.css'
class AddSite extends React.Component {
  constructor() {
      super();
      this.state = {};
        }
  render() {
      return (
        <div className={styles.siteadder}>  <input  className={styles.siteinput} type="text" placeholder="Add new link here..." /></div>
      )
    }

}
export default AddSite
