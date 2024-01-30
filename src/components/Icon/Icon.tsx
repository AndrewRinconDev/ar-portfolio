import Image from "next/image";
import IIcon from "./IIcon";
import { DATA_ICON } from "./IconsData";

export default function Icon({ name, width, height, className }: IIcon) {
  return (
    <Image
      className={className}
      src={`data:image/svg+xml;base64,${btoa(DATA_ICON[name])}`}
      width={width}
      height={height}
      alt={`${name}-icon`}
    />
  );
}
