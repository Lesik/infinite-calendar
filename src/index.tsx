import { createRoot } from "react-dom/client";
import { Virtuoso } from "react-virtuoso";
import {
  addDays,
  addWeeks,
  differenceInCalendarWeeks,
  endOfWeek,
  fromUnixTime,
  getWeek,
  startOfWeek,
} from "date-fns";
import { useCallback, useMemo, useState } from "react";
import "virtual:uno.css";

const currentDate = Date.now();

const AMOUNT_WEEKS_ON_SCREEN = 4;

const Week = ({ weekIndexSinceEpoch }: { weekIndexSinceEpoch: number }) => {
  const date = addWeeks(epoch, weekIndexSinceEpoch);
  return (
    <div className="min-h-20">
      <div className="color-red-300">
        (This is week #{weekIndexSinceEpoch}, date {date.toDateString()})
      </div>
      <div className="grid grid-cols-7">
        {[...Array(7).keys()].map((a, index) => (
          <span key={index}>
            {addDays(startOfWeek(date), index).toDateString()}
          </span>
        ))}
      </div>
    </div>
  );
};

const epoch = fromUnixTime(0);

export const App = () => {
  const weeksSinceEpoch = differenceInCalendarWeeks(currentDate, epoch);
  console.log({ weeksSinceEpoch });
  const [firstWeekToShow, setFirstWeekToShow] = useState(weeksSinceEpoch - 5);
  const [lastWeekToShow, setLastWeekToShow] = useState(weeksSinceEpoch + 5);
  const totalWeeksToShow = useMemo(
    () => lastWeekToShow - firstWeekToShow,
    [firstWeekToShow, lastWeekToShow]
  );
  const startReached = useCallback(() => {
    const weeksToPrepend = 4;
    console.log(`Prepending ${weeksToPrepend} more weeks`);
    setFirstWeekToShow((firstWeekToShow) => firstWeekToShow - weeksToPrepend);
  }, [setFirstWeekToShow]);
  console.log(`Showing total amount of weeks: ${totalWeeksToShow}`);
  return (
    <div>
      <h1>Virtuso</h1>
      <Virtuoso
        style={{ height: 400 }}
        firstItemIndex={firstWeekToShow}
        initialTopMostItemIndex={firstWeekToShow}
        itemContent={(index) => <Week weekIndexSinceEpoch={index} />}
        totalCount={totalWeeksToShow}
        startReached={startReached}
      ></Virtuoso>
    </div>
  );
};

const root = createRoot(document.getElementById("root")!);
root.render(<App />);
