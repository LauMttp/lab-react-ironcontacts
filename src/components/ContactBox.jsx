import React from "react";
import logoImg from "../logo.svg";

function ContactBox(props) {
  return (
    <tr>
      <td>
        <img src={props.picture} alt="profile" className="profile"></img>
      </td>
      <td>{props.name}</td>
      <td>{props.popularity}</td>
      <td>{props.wonOscar && <img src={logoImg} alt="award"></img>}</td>
      <td>{props.wonEmmy && <img src={logoImg} alt="award"></img>}</td>
      <td>
        <button onClick={props.removeContact}>delete</button>
      </td>
    </tr>
  );
}

export default ContactBox;
