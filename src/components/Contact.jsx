import React from "react";
import PropTypes from "prop-types";
import "./Contact.css";

class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.onlineListener=this.onlineListener.bind(this)
        this.state = {
            online: this.props.online
        }
    }
    onlineListener(event) {
        this.setState({
            online: !this.state.online
        })}

    render() {

        return (
            <div className="Contact">
                <div className="avatar">
                    <img className="avatar" src={this.props.avatar} alt="my Face" />
                </div>
                <div>
                    <h4 className="name">{this.props.name}</h4>
                    <p className="status" onClick={this.onlineListener}>
                        <span className={this.state.online ? "status-online" : "status-offline"} />
                        <span className="status-text">
                            {" "}
                            {this.state.online ? "online" : "offline"}{" "}
                        </span>
                    </p>
                </div>
            </div>
        );
    }
}

Contact.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    online: PropTypes.bool.isRequired
};

export default Contact;