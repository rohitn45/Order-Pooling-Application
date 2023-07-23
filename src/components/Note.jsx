import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }


  return (
    <div className="note">
      <h1>App: {props.title}</h1>
      <ul style={{listStyleType: "none"}}>
        <li>Phone No: {props.phoneNo}</li>
        <li>Amount Req: {props.amountReq}</li>
        <li>Offer details: {props.content}</li>
      </ul>
      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
