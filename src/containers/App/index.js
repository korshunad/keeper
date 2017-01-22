import React from 'react'
import SiteAdder from 'components/SiteAdder'
import Random from 'components/Random'
import Library from 'components/Library'
import styles from './_App.css'
import { connect } from 'react-redux'
import { addSite, addTag, submitTagAndSite } from 'redux/firebase'

import { WithContext as ReactTags } from 'react-tag-input';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={};
    this.handleSiteInputChange = this.handleSiteInputChange.bind(this);
    this.handleInputTag = this.handleInputTag.bind(this);
    this.submitSiteAndTag = this.submitSiteAndTag.bind(this);
  }
  handleSiteInputChange(event) {
    if(event.charCode==13){
      console.log(event.target.value);
      console.log('Hello Bob');
      this.props.dispatch(addSite({
        inputSite: event.target.value
      }))
    }
  }
  handleInputTag(event) {
    console.log('yoshimoto nakamura')
    this.props.dispatch(addTag({
      inputTags: event
    }))
    console.log("logging handleInputTag event:"+event)
  }
  submitSiteAndTag() {
    this.props.dispatch(submitTagAndSite())
  }
  render() {
    const inputSite = this.props.inputSite;
    const inputTags = this.props.inputTags;
console.log('current tags from App'+JSON.stringify(this.props.inputTags))
    return (
      <div className={styles.app}>
        <div className={styles.starter}>
          <SiteAdder
            inputSite={inputSite}
            inputSiteChangeHandler={this.handleSiteInputChange}
            inputTags={inputTags}
            inputTagHandler={this.handleInputTag}
            submitSiteAndTag={this.submitSiteAndTag}
          />
        </div>
        <div className={styles.second}><Random /></div>
        <div className={styles.third}><Library inputTags={this.props.inputTags}/></div>
      </div>

    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    inputSite: state.inputSite,
    inputTags: state.firebase.inputTags,
    allTags: state.firebase.allTags
  };
};
export default connect(mapStateToProps)(App);
