import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import HomePage from './pages/homePage.js';
import NavBar from './headerComponent/navBar.js';
import Footer from './footerComponent/footer.js';
import CookieConsent, { Cookies } from "react-cookie-consent";
import AddPostForm from './addPostForm.js';
import Banner from './banner.js';
import H from './h.js';
import NewPost from './newPost.js';
import Post from './post.js';

// class App extends Component {
//   render() {
//     return (
//       <Router>
//         <div>
//           <NavBar />
//           <Route name="home" exact path="/" component={HomePage} />
//           <Footer />
//           <CookieConsent>
//             This website uses cookies to enhance the user experience.
//           </CookieConsent>
//         </div>
//       </Router>
//     )
//   }
// }

var App = React.createClass({
  getInitialState : function() {
    return {
      posts : {}
    }
  }, 
  addPost : function(post) {
    var timestamp = (new Date()).getTime();
    // update the state object
    this.state.posts['post-' + timestamp] = post;
    // set the state
    this.setState({ posts : this.state.posts });
  },
  renderPost : function(key){
    return <NewPost key={key} index={key} details={this.state.posts[key]} />
  },
  render : function() {
    var imgOne = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Balaton_Hungary_Landscape.jpg/1024px-Balaton_Hungary_Landscape.jpg";
    var imgTwo ="https://c2.staticflickr.com/8/7432/9087815445_1a14743549_b.jpg";
    var imgThree ="https://c2.staticflickr.com/6/5738/23929500196_b6a1ce1dfb_b.jpg";
    var imgFour ="https://pixabay.com/static/uploads/photo/2015/09/14/19/15/aerial-landscape-939963_960_720.jpg";
    var dummyPost = "Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque faucibus vestibulum. Nulla at nulla justo, eget luctus.";
    return (
      <div>
        <Banner />
        <div className="row medium-8 large-7 columns">
          <Post ptitle="Flux flack" pimg={imgOne} date="Nov 2, 2015" postbody={dummyPost} author="Fred Armisen" comments="2" tags=""/>
          <Post ptitle="Inline Styles Aren't Necessary" pimg={imgTwo} postbody={dummyPost} date="Aug 15, 2015" author="Amy Schumer" comments="5"/>
          <Post ptitle="Webpack and ES6" pimg={imgThree} date="Mar 9, 2015" postbody={dummyPost} author="Victoria Bell" comments="3"/>
          <Post ptitle="No More Goobers" pimg={imgFour} date="Jan 11, 2015" postbody={dummyPost} author="Jack Sherlock" comments="7"/>
      
          <div className="list-of-posts">
              {Object.keys(this.state.posts).map(this.renderPost)}
          </div>
          
        </div>
      </div>
    )
  }
  
});

export default App;