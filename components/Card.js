import React, { Component } from 'react';
import Link from 'next/link';

class Nav extends Component {
    render() {
        return(
            <div className="card">
                <div className="content">
                    <div className={"image " + this.props.clsImg}>
                        <img src={"static/assets/images/" + this.props.img} alt="" />
                    </div>
                    <div className={"description " + this.props.clsDesc}>
                        <h3>{this.props.Title}</h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default Nav;
