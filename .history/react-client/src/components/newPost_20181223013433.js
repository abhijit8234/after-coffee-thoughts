import React, { Component } from 'react';
import H from './h.js';

var NewPost = React.createClass({
    render : function() {
      var details = this.props.details;
      return (
        <div className="blog-post">
          <h3 className="ptitle">{details.title}<small>{h.getTime()}</small></h3>
          <img className="thumbnail" src={details.image} alt={details.name}/>
          <p>{details.desc}</p>
          <div className="callout callout-post">
            <ul className="menu simple">
            <li><a href="#">Author: {details.name}</a></li>
            <li><a href="#">Comments: 0</a></li>
            <li><a href="#">Tags: {h.getTaggedName()}</a></li>
            </ul>
          </div>
        </div>
      )
    }
  });

  export default NewPost;