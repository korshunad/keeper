import React from 'react'
import styles from './_Tags.css'

import { WithContext as ReactTags } from 'react-tag-input';

const Tags=React.createClass({
    getInitialState() {
      return {
        tags: [ ],
         }
    },
    handleDelete(i) {
      let tags = this.state.tags;
      tags.splice(i, 1);
      this.setState({tags: tags});
    },
    handleAddition(tag) {
      let tags = this.state.tags;
      tags.push({
         id: tags.length + 1,
         text: tag
         });
      this.setState({tags: tags});
    },
    render() {
      let tags = this.state.tags;
      return (
         <div className={styles.tagging}>
           <ReactTags
           tags={tags}
           placeholder='Tag'
               handleDelete={this.handleDelete}
               handleAddition={this.handleAddition} />
                     </div>
         )
    }
});

export default Tags
