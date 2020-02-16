// import React, { Component } from 'react';
// import './cursor.css';

// class Cursor extends Component {

//   state = {
//     left: 0,
//     top: 0
//   };
//   componentDidMount = () => {
//     document.addEventListener("mousemove", this.updatePosition);
//   };
//   componentWillUnmount = () => {
//     document.removeEventListener("mousemove", this.updatePosition);
//   };
//   updatePosition = event => {
//     this.setState({
//       left: event.clientX,
//       top: event.clientY
//     });
//   };
//   render() {
//     const styles = {
//       width: 10,
//       height: 10,
//       position: "fixed",
//       left: this.state.left,
//       top: this.state.top,
//     };
//     return <div style={styles} className="cursor" />;
//   }
// };

// export default Cursor;


