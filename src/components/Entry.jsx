import React from "react";

const Entry = (props) => {
    return (
        <div class="container text-center">
    <div class="col card">
        <img class="bd-placeholder-img rounded-circle" width="140" height="140" src={props.img} alt="" />
        <p>{props.name}</p>
        <p>{props.race}</p>
        <p>{props.location}</p>
        <p>{props.occupation}</p>
        </div>
        </div>
    )
}

export default Entry;