import React from 'react';
export const Popup = ({ onConfirm, onCancel }) => {
  return (
    <section className='popup-section'>
      <div className='popup-contant'>
        <p className='popup-title'>Are you sure you want to delete this?</p>
        <div className='popup-wrapper'>
          <button onClick={onConfirm} className='secondary-button'>
            Yes
          </button>
          <button onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </section>
  );
};
