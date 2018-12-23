import React, { Component } from 'react';
import H from './h.js';

var Post = React.createClass({
    tryClick : function() {
      alert('just trying out click events lalala');
    },
    render : function() {
      var com = "Comments";
      return (
        <div className="blog-post">
          <h3 className="ptitle">{this.props.ptitle}<small>{this.props.date}</small></h3>
          <img className="thumbnail" src={this.props.pimg} />
          <p>{this.props.postbody}</p>
          <div className="callout callout-post">
            <ul className="menu simple">
            <li><a href="#" onClick={this.tryClick}>Author: {this.props.author}</a></li>
            <li><a href="#">{com}: {this.props.comments}</a></li>
            <li><a href="#">Tags: {H.getTaggedName()}</a></li>
            </ul>
          </div>
        </div>
      )
    }
  });

  export default Post