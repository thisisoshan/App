import React, { Component } from 'react';
import Link from 'next/link';

class Nav extends Component {

  render() {
    return(
      <header>
        <nav className="nav card-panel red darken-2">
          <div>
            <Link prefetch href="../"><a><p>Home</p></a></Link>
            <Link prefetch href="/about"><a><p>About</p></a></Link>
            <Link prefetch href="/programs"><a><p>Programs</p></a></Link>
            <Link prefetch href="/team"><a><p>Team</p></a></Link>
            <Link prefetch href="/courses"><a><p>Courses</p></a></Link>
            <Link prefetch href="/events"><a><p>Events</p></a></Link>
            <Link prefetch href="/blog"><a><p>Blog</p></a></Link>
          </div>
        </nav>
        <div className="title">
          <h5>{this.props.Page}</h5>
        </div>
      </header>
    );
  }
}


export default Nav;
