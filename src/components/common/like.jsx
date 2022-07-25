// import React, { Component } from "react";
import React from 'react';


const Like = (props) => {
    let classes = "fa fa-heart";
    if (!props.Liked) classes += "-o";
    return (
      <i
        onClick={props.onClick}
        style={{ cursor: "pointer" }}
        className={classes}
        aria-hidden
      />
    );
}

// class Like extends Component {
//   render() {
//     let classes = "fa fa-heart";
//     if (!this.props.Liked) classes += "-o";
//     return (
//       <i
//         onClick={this.props.onClick}
//         style={{ cursor: "pointer" }}
//         className={classes}
//         aria-hidden
//       />
//     );
//   }
// }

export default Like;
