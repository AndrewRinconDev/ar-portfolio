import Image from "next/image";

import IIcon from "./IIcon";
import { DATA_ICON } from "./IconsData";
import "./Icon.css";

export default function Icon({ name, width, height, title, color, className }: IIcon) {
  const svgString = DATA_ICON[name];
  const coloredSvgString = color ? svgString.replaceAll(/ fill=(["'](?!none)).*?\1/g, ` fill="${color}"`) : svgString;

  return (
    <div className={`${title && 'image-container'} max-h-fit relative my-auto flex justify-center`} data-title={title}>
      <Image
        className={className}
        src={`data:image/svg+xml;base64,${btoa(coloredSvgString)}`}
        width={width}
        height={height}
        alt={`${name}-icon`}
      />
    </div>
  );
}
