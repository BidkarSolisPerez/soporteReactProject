import ReactDOM from "react-dom";
import React, { Component } from "react";
//import ReactPlayer from 'react-player'

class AdAside extends Component{
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      src: this.props.videos[0]
    };
  }

  componentDidMount() {
    let video = ReactDOM.findDOMNode(this);
    video.addEventListener("ended", e => {
      if (this.state.index < this.props.videos.length - 1) {
        let nextIndex = this.state.index + 1;
        this.setState({
          index: nextIndex,
          src: this.props.videos[nextIndex]
        });
      }
    });
  }
  componentDidUpdate(prevProps, prevState) {
    let video = ReactDOM.findDOMNode(this);
    video.play();
  }
  render() {
    return (
      <video
        src={this.state.src}
        controls
        playsInline
        autoPlay
        muted
      />
    );
  }
}

export default AdAside;
