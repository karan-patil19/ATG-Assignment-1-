import React from 'react';

const AddYourOwnSection = () => {
  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <h3 className="card-title d-flex align-items-center">
            <span className="text-primary display-4 mr-2">+</span> Add your own
          </h3>
          <p className="card-text">
            Are you a teacher or expert? Do you sell or rent out equipment, venue or event tickets? Or, you know someone who should be on hobbycue? Go ahead and Add your Own page.
          </p>
          <button className="btn btn-outline-primary">Add new</button>
        </div>
      </div>
    </div>
  );
};

export default AddYourOwnSection;
