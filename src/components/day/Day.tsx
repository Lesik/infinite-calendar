import {
  format,
  isFirstDayOfMonth,
  isThisMonth,
  isToday,
  isWeekend,
} from "date-fns";
import { DayNumber } from "./DayNumber";

export const Day = ({ date }: { date: Date }) => {
  const today = isToday(date);
  const firstOfMonth = isFirstDayOfMonth(date);
  const currentMonth = isThisMonth(date);
  const weekend = isWeekend(date);
  return (
    <span
      className={`flex flex-col bg-white @dark:bg-neutral-800 ${
        currentMonth ? "" : ""
      } ${weekend ? "@dark:bg-zinc-800" : ""}`}
    >
      <div className="flex flex-row gap-2 items-center">
        <DayNumber number={format(date, "d")} highlight={today} />
        {firstOfMonth && format(date, "LLLL")}
      </div>
    </span>
  );
};
