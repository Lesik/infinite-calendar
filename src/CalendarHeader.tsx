import { addDays, format, isWeekend, startOfWeek } from "date-fns";
import { cl } from "./helpers/cl";

export const CalendarHeader = () => {
  const today = new Date();
  const weekStart = startOfWeek(today);

  return (
    <div
      className={cl(
        "grid grid-cols-7 border-b-solid border-b-2 border-neutral-200 p-y-2",
        "@dark:(border-neutral-700)"
      )}
    >
      {[...Array(7).keys()].map((a, index) => {
        const day = addDays(weekStart, index);
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
