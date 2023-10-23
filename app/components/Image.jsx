import NextImage from "next/image";

export const Image = ({
  width = 300,
  height = 300,
  alt = "this is an image",
  className,
}) => {
  return (
    <NextImage
      src={`https://picsum.photos/${width}/${height}`}
      alt={alt}
      height={height}
      width={width}
      className={className}
    />
  );
};
