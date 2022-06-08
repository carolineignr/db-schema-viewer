import React from 'react';

export const ManipulateSceneTipsModal = ({
  closeModal,
}: any): React.ReactElement => (
  <>
    <div>
      <h2>How to move the camera</h2>
      <span>Tips to move camera</span>

      <h2>How to get closer to the 3D objects</h2>
      <span>Tips to get closer</span>

      <h2>How to change the visualization perspective</h2>
      <span>Tips to update perspective</span>
    </div>
    <button type="button" onClick={closeModal}>
      Close
    </button>
  </>
);

export default ManipulateSceneTipsModal;
