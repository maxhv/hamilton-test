import {ReactNode} from "react";

export default interface Props {
  title?: string,
  isOpened: boolean,
  children?: ReactNode,
  onClose?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void,
}
