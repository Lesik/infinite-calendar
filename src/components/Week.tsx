import { addDays, addWeeks, startOfWeek } from "date-fns";
import { epoch } from "../index";
import { Day } from "./day/Day";

export const Week = ({
  weekIndexSinceEpoch,
}: {
  weekIndexSinceEpoch: number;
}) => {
  const date = addWeeks(epoch, weekIndexSinceEpoch);
  const weekStart = startOfWeek(date);

  return (
    <div className="h-34 grid grid-cols-7 gap-x-[2px] border-b-solid border-b-2 border-neutral-200 bg-neutral-200 snap-x @dark:bg-neutral-700">
      {[...Array(7).keys()].map((a, index) => {
        const day = addDays(weekStart, index);
        return <Day key={day.toISOString()} date={day} />;
      })}
    </div>
  );
};
