import { addDays, format, isWeekend, startOfWeek } from "date-fns";
import { cl } from "./helpers/cl";

export const CalendarHeader = () => {
  const today = new Date();
  const weekStart = startOfWeek(today);

  return (
    <div className="grid grid-cols-7 border-b-solid border-b-2 border-neutral-200 p-y-2">
      {[...Array(7).keys()].map((a, index) => {
        const day = addDays(weekStart, index);
        const weekend = isWeekend(day);
        return (
          <span
            className={cl("text-end text-lg p-r-2", {
              "text-neutral-500": weekend,
            })}
          >
            {format(day, "EEEE")}
          </span>
        );
      })}
    </div>
  );
};
