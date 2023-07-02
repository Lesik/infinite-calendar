import { cl } from "../../helpers/cl";
import { Button } from "react-aria-components";

export const Event = ({
  title,
  time,
  color,
}: {
  title: string;
  time: string;
  color: string;
}) => {
  return (
    <Button className="flex flex-row items-center gap-2 px-2">
      <div className={cl("h-2 w-2 rounded shrink-0", color)}></div>
      <span className="overflow-hidden whitespace-nowrap text-ellipsis">
        {title}
      </span>
      <span className="ml-auto text-xs text-neutral-500">{time}</span>
    </Button>
  );
};
