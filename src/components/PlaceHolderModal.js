import React from "react";
import "./PlaceHolder.css";

const PlaceHolderModal = ({
  showModal,
  onClose,
  onSubmit,
  setNewTitle,
  setNewBody,
}) => {
  if (!showModal) {
    return null;
  }

  return (
    <div className="modal-background">
      <div className="modal-content">
        <h2>Add New Article</h2>
        <div>
          <label>Title:</label>
          <input type="text" onChange={(e) => setNewTitle(e.target.value)} />
        </div>
        <div>
          <label>Body:</label>
          <textarea onChange={(e) => setNewBody(e.target.value)} />
        </div>
        <div>
          <button onClick={onSubmit}>Add</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default PlaceHolderModal;
