import React from 'react'
import styles from './_Library.css'
class Library extends React.Component {
  constructor() {
    super();
    this.state = {}
  }
  render() {
console.log('current tags'+JSON.stringify(this.props.inputTags))
let tags;
if (this.props.inputTags['inputTags']) {
// change current inputtags to total, add on adding website
 tags=this.props.inputTags['inputTags'].map(function(tag) {
    return (<div key={tag['id']} className={styles.folder}><span>{tag['text']}</span></div>)
  })
}
    return (
      <div className={styles.lib}>
        <p>Click to browse tagged links</p>
        <div>
        {tags ? '' :
        <div className={styles.folders}>
          <div key='learn' className={styles.folder}><span>Learn</span></div>
          <div key='JS' className={styles.folder}><span>JS</span></div>
          <div key='Music' className={styles.folder}><span>Music</span></div>
          <div key='Cooking' className={styles.folder}><span>Cooking</span></div>
          <div key='Stuff' className={styles.folder}><span>Stuff</span></div>
        </div>}
          {tags ? <div className={styles.folders}> {tags} </div> : ''}
        </div>
      </div>)
  }
}
export default Library
