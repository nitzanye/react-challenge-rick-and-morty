import React, { useState } from 'react';
import { Image } from './Image';
import { Body } from './Body';
import { Popup } from './Popup';

const Card = ({ character, onRemove, onChange }) => {
  const { full_name, super_powers, weaknesses } = character;
  const [popupOpen, setPopupOpen] = useState(false);

  const handleConfirmRemove = () => {
    onRemove(character);
    setPopupOpen(false);
  };

  const handleCancle = () => {
    setPopupOpen(false);
  };

  const handlePopup = () => {
    setPopupOpen(true);
  };

  return (
    <div className='card'>
      <Image fullName={full_name} onChange={() => onChange(character)} />
      <Body
        fullName={full_name}
        superPowers={super_powers}
        weaknesses={weaknesses}
      />
      <div className='button-container'>
        <button className='secondary-button' onClick={handlePopup}>
          Remove
        </button>
      </div>
      {popupOpen && (
        <Popup onConfirm={handleConfirmRemove} onCancel={handleCancle} />
      )}
    </div>
  );
};

export default Card;
