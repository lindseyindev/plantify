import Image from "next/image";

export default function PostImages({ images }) {
  console.log({images})
  return (
    <div>
      {images.map((image, index) => {
        //console.log({image})
        console.log(image.src)
        return (
          <div key={index}>
            <Image
              src={image.src}
              alt={image.description}
              height={200}
              width={200}
            />
          </div>
        );
      })}
    </div>
  );
}
