import React from 'react';
import CloseIcon from './icons/CloseIcon';

const Modal = ({ user, close }) => {
  return (
    <div className="modal">
      <div className="modal_name">
        {user.name} <CloseIcon onClick={close} />
      </div>
      <p className="modal_black">
        <span className="modal_title">Телефон:</span>
        <span className="modal_gray">{user.phone}</span>
      </p>
      <p className="modal_black">
        <span className="modal_title">Почта: </span>
        <span className="modal_gray">{user.email}</span>
      </p>
      <p className="modal_black">
        <span className="modal_title">Дата приема:</span>
        <span className="modal_gray">{user.hire_date}</span>
      </p>
      <p className="modal_black">
        <span className="modal_title">Должность:</span>
        <span className="modal_gray">{user.position_name}</span>
      </p>
      <p className="modal_black">
        <span className="modal_title">Подразделение:</span>
        <span className="modal_gray">{user.department}</span>
      </p>

      <div className="additional">Дополнительная информация:</div>
      <p className="additional_text">
        Разработчики используют текст в качестве заполнителя макта страницы. Разработчики используют
        текст в качестве заполнителя макта страницы.
      </p>
    </div>
  );
};

export default Modal;
