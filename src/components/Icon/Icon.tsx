import Image from "next/image";

import IIcon from "./IIcon";
import { DATA_ICON } from "./IconsData";
import "./Icon.css";

export default function Icon({ name, width, height, title, className }: IIcon) {
  return (
    <div className="image-container relative" data-title={title || name}>
      <Image
        className={className}
        src={`data:image/svg+xml;base64,${btoa(DATA_ICON[name])}`}
        width={width}
        height={height}
        alt={`${name}-icon`}
      />
    </div>
  );
}
