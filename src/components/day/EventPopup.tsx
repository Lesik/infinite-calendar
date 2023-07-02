import { PropsWithChildren } from "react";
import {
  Dialog,
  DialogTrigger,
  OverlayArrow,
  Popover,
} from "react-aria-components";
import { EditDialog } from "../edit/EditDialog";

export const EventPopup = ({ children }: PropsWithChildren<{}>) => {
  return (
    <DialogTrigger>
      {children}
      <Popover placement="right" isOpen={true}>
        <OverlayArrow>
          <svg width={12} height={12}>
            <path d="M0 0,L6 6,L12 0" />
          </svg>
        </OverlayArrow>
        <Dialog>
          <EditDialog />
        </Dialog>
      </Popover>
    </DialogTrigger>
  );
};
