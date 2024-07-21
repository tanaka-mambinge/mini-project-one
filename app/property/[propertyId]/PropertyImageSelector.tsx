"use client";

import { useState } from "react";

type Props = { images: { filePath: string }[] };

function PropertyImageSelector({ images }: Props) {
  const [image, setImage] = useState<string>(images[0].filePath);
  return (
    <>
      <img
        src={image}
        alt="Sample"
        className="w-full h-96 lg:h-[32rem] object-cover"
      />

      <div className="flex p-4 bg-gray-900 overflow-x-auto">
        {images.map((img) => (
          <img
            key={img.filePath}
            src={img.filePath}
            alt="Sample"
            className="w-36 h-36 object-cover cursor-pointer"
            onClick={() => setImage(img.filePath)}
          />
        ))}
      </div>
    </>
  );
}

export default PropertyImageSelector;
