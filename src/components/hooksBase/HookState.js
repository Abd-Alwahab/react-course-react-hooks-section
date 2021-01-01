import React, { useEffect, useRef, useState } from "react";

const HookState = () => {
  const [imgDie, setImgDie] = useState({});
  const imgRef = useRef(null);

  const handleImageLoad = () => {
    setImgDie({
      width: imgRef.current.clientWidth,
      height: imgRef.current.clientHeight,
    });
  };

  useEffect(() => {
    console.log("The Page is Rendered");
  }, []);

  return (
    <div>
      <img
        ref={imgRef}
        src="https://images.pexels.com/photos/6194910/pexels-photo-6194910.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=150"
        alt="img"
        onLoad={handleImageLoad}
      />

      <p>{imgDie.width}</p>
      <p>{imgDie.height}</p>
    </div>
  );
};

export default HookState;
