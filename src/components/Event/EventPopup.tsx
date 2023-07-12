import { PropsWithChildren } from "react";
import {
  Dialog,
  DialogTrigger,
  OverlayArrow,
  Popover,
} from "react-aria-components";
import { EditDialog } from "../edit/EditDialog";
import { cl } from "../../helpers/cl";

const svgSize = 24;

export const EventPopup = ({ children }: PropsWithChildren<{}>) => {
  return (
    <DialogTrigger>
      {children}
      <Popover
        placement="right"
        className={cl(
          "group",
          "data-[placement=top]:mb-2 [&_svg]:data-[placement=top]:rotate-0",
          "data-[placement=right]:ml-2 [&_svg]:data-[placement=right]:rotate-90",
          "data-[placement=bottom]:mt-2 [&_svg]:data-[placement=bottom]:rotate-180",
          "data-[placement=left]:mr-2 [&_svg]:data-[placement=left]:rotate-270"
        )}
      >
        <OverlayArrow>
          <svg
            width={svgSize}
            height={svgSize}
            className={cl("fill-neutral-200 @dark:fill-neutral-800")}
          >
            <path d={`M0 0 L${svgSize / 2} ${svgSize / 2} L${svgSize} 0`} />
          </svg>
        </OverlayArrow>
        <Dialog>
          <EditDialog />
        </Dialog>
      </Popover>
    </DialogTrigger>
  );
};
