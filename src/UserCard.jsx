import React from 'react';
import MailIcon from './icons/MailIcon';
import PhoneIcon from './icons/PhoneIcon';

function UserCard(props) {
  const { name, phone, email } = props.user;

  return (
    <div className="user_card" onClick={props.onClick}>
      <h1 className="user_name">{name}</h1>
      <p className="phone_number">
        <PhoneIcon />
        {phone}
      </p>
      <p className="email">
        <MailIcon />
        {email}
      </p>
    </div>
  );
}

export default UserCard;
