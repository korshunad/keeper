import React from 'react'
import styles from './_AddSite.css'
class AddSite extends React.Component {
  constructor() {
      super();
      this.state = {};
        }
  render() {
      return (
        <div className={styles.siteadder}> <p>Add a link</p> <input  className={styles.siteinput} type="text" placeholder="somemoretext" /></div>
      )
    }

}
export default AddSite
