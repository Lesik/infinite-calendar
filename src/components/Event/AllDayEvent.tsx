import { isSameDay, startOfWeek } from "date-fns";
import { cl } from "../../helpers/cl";
import { Button } from "react-aria-components";

export const AllDayEvent = ({
  day,
  title,
  start,
  end,
  color,
}: {
  day: Date;
  title: string;
  start: Date;
  end: Date;
  color: string;
}) => {
  const isFirstDay = isSameDay(day, start);
  const isLastDay = isSameDay(day, end);
  const isFirstDayOfWeek = isSameDay(day, startOfWeek(day));

  return (
    <Button
      className={cl("flex flex-row items-center px-2", color, {
        "ml-2 rounded-s-md": isFirstDay,
        "mr-2 rounded-e-md": isLastDay,
      })}
    >
      <span
        className={cl({
          invisible: !(isFirstDay || isFirstDayOfWeek),
        })}
      >
        {title}
      </span>
    </Button>
  );
};
