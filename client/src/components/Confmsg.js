import React from "react";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
 
export default class Confmsg extends React.Component {
  constructor(props) {
    super(props);
    this.addNotification = this.addNotification.bind(this);
    this.notificationDOMRef = React.createRef();
  }
 
  addNotification() {
    this.notificationDOMRef.current.addNotification({
      title: "confirmation message ",
      message: "check date and time if available",
      type: "success",
      insert: "top",
      container: "top-right",
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: { duration: 2000 },
      dismissable: { click: true }
    });
  }
 
  render() {
    return (
      <div className="app-content">
        <ReactNotification ref={this.notificationDOMRef} />
        <button onClick={this.addNotification} className="btn btn-primary">
          check confirmation 
        </button>
      </div>
    );
  }
}