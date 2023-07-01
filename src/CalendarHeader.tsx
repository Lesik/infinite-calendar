import {
  eachDayOfInterval,
  endOfWeek,
  format,
  isWeekend,
  startOfWeek,
} from "date-fns";
import { cl } from "./helpers/cl";

export const CalendarHeader = () => {
  const today = new Date();
  const weekStart = startOfWeek(today);
  const weekEnd = endOfWeek(today);
  const week = eachDayOfInterval({
    start: weekStart,
    end: weekEnd,
  });

  return (
    <div
      className={cl(
        "grid grid-cols-7 border-b-solid border-b-2 border-neutral-200 p-y-2",
        "@dark:(border-neutral-700)"
      )}
    >
      {week.map((day) => {
        const weekend = isWeekend(day);
        return (
          <span
            className={cl("text-end text-lg p-r-2", {
              "text-neutral-500 @dark:text-neutral-400": weekend,
            })}
          >
            {format(day, "EEEE")}
          </span>
        );
      })}
    </div>
  );
};
