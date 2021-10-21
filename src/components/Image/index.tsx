import NextImage from "next/image";
import { useState } from "react";
import CONSTANTS from "utils/constants";

const Image = props => {
  const { src, className, ...rest } = props;
  const [url, setUrl] = useState(props.src);
  // TODO: it may be faster to send a head request to check if the image exist first.
  return (
    <div className={className}>
      <NextImage
        {...rest}
        src={url}
        loading="lazy"
        onError={() => {
          setUrl(CONSTANTS.LOGO_NOT_AVAILABLE_URL);
        }}
      />
    </div>
  );
};

export default Image;
