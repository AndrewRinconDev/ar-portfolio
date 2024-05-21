import { DATA_ICON } from "./IconsData";

export type IconKeys = keyof typeof DATA_ICON;

export default interface IIcon {
  name: IconKeys;
  width?: number;
  height?: number;
  title?: string;
  className?: string;
}
