import { DayNumber } from "./DayNumber";
import { format, isFirstDayOfMonth, isToday } from "date-fns";

export const DayHeader = ({ date }: { date: Date }) => {
  const today = isToday(date);
  const firstOfMonth = isFirstDayOfMonth(date);

  return (
    <div className="flex flex-row gap-2 items-center p-1">
      <DayNumber number={format(date, "d")} highlight={today} />
      {firstOfMonth && format(date, "LLLL")}
    </div>
  );
};
