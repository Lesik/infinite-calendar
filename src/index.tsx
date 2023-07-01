import { createRoot } from "react-dom/client";
import { Components, Virtuoso, VirtuosoHandle } from "react-virtuoso";
import { differenceInCalendarWeeks, fromUnixTime } from "date-fns";
import { useCallback, useMemo, useState, forwardRef, useRef } from "react";
import "virtual:uno.css";
import { Week } from "./components/Week";

const currentDate = Date.now();

const AMOUNT_WEEKS_ON_SCREEN = 4;

export const epoch = fromUnixTime(0);

const Item: Components["Item"] = forwardRef((props, ref) => (
  <div className="snap-center" {...props} />
));

const List: Components["List"] = forwardRef(({ style, children }, ref) => {
  return (
    <div
      className="snap-both snap-mandatory overflow-y-auto"
      style={style}
      ref={ref}
    >
      {children}
    </div>
  );
});

export const App = () => {
  const weeksSinceEpoch = differenceInCalendarWeeks(currentDate, epoch);
  console.log({ weeksSinceEpoch });
  const ref = useRef<VirtuosoHandle>(null);
  const goToToday = () => ref.current?.scrollToIndex(0);
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
    <>
      <button onClick={goToToday}>Today</button>
      <Virtuoso
        ref={ref}
        className="h-full absolute"
        firstItemIndex={firstWeekToShow}
        initialTopMostItemIndex={firstWeekToShow}
        itemContent={(index) => <Week weekIndexSinceEpoch={index} />}
        components={{
          List,
          Item,
        }}
        totalCount={totalWeeksToShow}
        startReached={startReached}
      ></Virtuoso>
    </>
  );
};

const root = createRoot(document.getElementById("root")!);
root.render(<App />);
