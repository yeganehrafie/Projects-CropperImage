import React, { useRef, useState } from "react";
import Cropper from "react-cropper"; //کتابخانهcropperjs
import "cropperjs/dist/cropper.css"; //دسترسی به استایل این کتابخانه

const CropperImage = () => {
  const [image, setImage] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null); // حالت جدید برای ذخیره تصویر برش خورده
  const cropperRef = useRef(null);

  const handleImgChange = (e) => {
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const functionCropData = () => {
    if (cropperRef.current) {
      const cropper = cropperRef.current.cropper; // دسترسی به شیء Cropper
      if (cropper) {
        const croppedCanvas = cropper.getCroppedCanvas(); // دریافت کانواس برش خورده
        if (croppedCanvas) {
          const croppedImageDataURL = croppedCanvas.toDataURL(); // تبدیل کانواس به Data URL
          setCroppedImage(croppedImageDataURL); // ذخیره تصویر برش خورده در حالت
        }
      }
    }
  };

  return (
    <div className="justify-center text-center mt-10">
      <input
        type="file"
        className="text-slate-500 text-sm font-semibold cursor-pointer  "
        accept="image/*"
        onChange={handleImgChange}
      />
      <button
        onClick={functionCropData}
        className="border-solid border-4  p-2 bg-sky-600 hover:border-sky-400 duration-500  rounded-lg text-slate-50 cursor-pointer text-base"
      >
        Crop Image
      </button>

      {image && (
        <Cropper
          ref={cropperRef}
          src={image}
          className="w-11/12 h-1/6 mt-20 flex m-auto"
          initialAspectRatio={16 / 9}
          aspectRatio={16 / 9}
          guides={false}
        />
      )}
      {croppedImage && (
        <div className="mt-9 flex flex-col items-center">
          <h2 className="text-cyan-700 text-2xl  font-bold"> cut:</h2>
          <img
            src={croppedImage}
            alt="Cropped"
            className="mt-5 size-5/12 rounded-lg  border-6 border-sky-500 shadow-lg m-12"
          />
        </div>
      )}
    </div>
  );
};

export default CropperImage;
