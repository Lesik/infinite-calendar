import {
  addDays,
  addWeeks,
  format,
  isFirstDayOfMonth,
  isThisMonth,
  isToday,
  isWeekend,
  startOfWeek,
} from "date-fns";
import { epoch } from "../index";

export const Week = ({
  weekIndexSinceEpoch,
}: {
  weekIndexSinceEpoch: number;
}) => {
  const date = addWeeks(epoch, weekIndexSinceEpoch);
  const weekStart = startOfWeek(date);

  return (
    <div className="h-34 grid grid-cols-7 gap-x-[2px] border-solid border-b-1 border-neutral-100 bg-neutral-100 snap-x @dark:bg-neutral-700">
      {[...Array(7).keys()].map((a, index) => {
        const day = addDays(weekStart, index);
        return <Day key={day.toISOString()} date={day} />;
      })}
    </div>
  );
};

const DayNumber = ({
  number,
  highlight,
}: {
  number: string;
  highlight: boolean;
}) => (
  <div
    className={`inline-flex justify-right justify-center rounded-full h-[3cap] w-[3cap] leading-[3cap] font-bold ${
      highlight ? `bg-red text-white` : ``
    }`}
  >
    {number}
  </div>
);

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
      <div>
        <DayNumber number={format(date, "d")} highlight={today} />
        {firstOfMonth && format(date, "LLL")}
      </div>
    </span>
  );
};
