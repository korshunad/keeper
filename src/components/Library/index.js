import React from 'react'
import styles from './_Library.css'
class Library extends React.Component {
  constructor() {
    super();
    this.state = {}
  }
  render() {
    return (
      <div className={styles.lib}>
        <p>Library</p>
        <div className={styles.folders}>
          <div className={styles.folder}><span>Learn</span></div>
          <div className={styles.folder}><span>JS</span></div>
          <div className={styles.folder}><span>Music</span></div>
          <div className={styles.folder}><span>Cooking</span></div>
          <div className={styles.folder}><span>Stuff</span></div>
        </div>
      </div>)
  }
}
export default Library
