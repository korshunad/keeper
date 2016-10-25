import React from 'react'
import Tags from 'components/Tags'
import AddSite from 'components/AddSite'
import Random from 'components/Random'
import Library from 'components/Library'
import styles from './_App.css'

import { WithContext as ReactTags } from 'react-tag-input';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={};
  }
  render() {
    return (
<div className={styles.app}>
  <div className={styles.starter}>
    <AddSite />
    <Tags />
  </div>
<div className={styles.second}><Random /></div>
<div className={styles.third}><Library /></div>
</div>

)
  }
}
export default App
