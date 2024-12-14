import React from 'react';
import CropperImages from './component/cropImg';

const App = () => {
  return (
    <div>
      <h1 className="flex justify-center text-center mt-10 font-bold text-4xl tracking-wide text-sky-700">
        Image Cropper
      </h1>
      <CropperImages />
    </div>
  );
};

export default App;
