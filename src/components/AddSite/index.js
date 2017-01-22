import React from 'react'
import styles from './_AddSite.css'
class AddSite extends React.Component {
  constructor() {
      super();
      this.state = {};
      this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.props.inputSiteChangeHandler(event)
  }
  render() {
      return (
        <div className={styles.siteadder}>
          <input
            className={styles.siteinput}
            onKeyPress={this.handleChange}
            type="text"
            placeholder="Add new link here..."
          />
        </div>
      )
    }

}
export default AddSite
