import React from "react";
import PropTypes from "prop-types";
import "./Contact.css";

function Contact(props) {

    return (
        <div className="Contact">
            <div className="avatar">
                <img className="avatar" src={props.avatar} alt="my Face" />
            </div>
            <div>
                <h4 className="name">{props.name}</h4>
                <p className="status">
                    <span className={props.online ? "status-online" : "status-offline"} />
                    <span className="status-text">
                        {" "}
                        {props.online ? "online" : "offline"}{" "}
                    </span>
                </p>
            </div>
        </div>
    );
}

Contact.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    online: PropTypes.bool.isRequired
};

export default Contact;