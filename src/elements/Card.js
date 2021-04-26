import React from "react";
import propTypes from "prop-types";
import Fade from 'react-reveal/Fade';

export default function Card(props) {

    const className = ['tiles-item'];
    className.push(props.className);

    return (
        <div className={className.join(" ")}>
            <Fade bottom delay={props.delayInMS}>
                <div className={`tiles-item-inner ${props.hasShadow ? " has-shadow" : "" }`}>
                    {props.children}
                </div>
            </Fade>
        </div>
    );
}

Card.propTypes = {
    hasShadow: propTypes.bool,
    className: propTypes.string
};
