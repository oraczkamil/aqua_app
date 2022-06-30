import React from 'react';
import {Message} from "./Error.css";

function Error({message}) {
    return (
        <Message>{message}</Message>
    );
}

export default Error;