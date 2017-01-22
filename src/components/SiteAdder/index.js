import styles from './_SiteAdder.css'
import React from 'react'
import { WithContext as ReactTags } from 'react-tag-input';

class SiteAdder extends React.Component {
  constructor() {
      super();
      this.state = {tags: [ ]};
      this.handleChange = this.handleChange.bind(this);
      this.handleDelete = this.handleDelete.bind(this);
      this.handleAddition = this.handleAddition.bind(this);
      this.handleClick = this.handleClick.bind(this);
  }
  handleChange(event) {
    this.props.inputSiteChangeHandler(event)

  }
  handleClick() {
    this.props.submitSiteAndTag()
  }
  handleDelete(i) {
    let tags = this.state.tags;
    tags.splice(i, 1);
    this.setState({tags: tags});
console.log(tags)
   this.props.inputTagHandler(tags)
  }
  handleAddition(tag) {
    let tags = this.state.tags;
    tags.push({
      id: tags.length + 1,
      text: tag,
    });
    this.setState({tags: tags});
console.log(tags)
console.log(JSON.stringify(this.state.tags))
   this.props.inputTagHandler(tags)
  }
  render() {
   let tags = this.state.tags;
      return (
        <div className={styles.siteadder}>
          <input
            className={styles.siteinput}
            onKeyPress={this.handleChange}
            type="text"
            placeholder="Add new link here..."
          />
      <div className={styles.tagging}>
        <ReactTags
          tags={tags}
          placeholder='+Tag'
          handleDelete={this.handleDelete}
          handleAddition={this.handleAddition} />
      </div>
      <button onClick={this.handleClick} >Add</button>
</div>
      )
    }

}


export default SiteAdder
