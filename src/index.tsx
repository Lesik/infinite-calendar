import { createRoot } from "react-dom/client";
import { Components, Virtuoso, VirtuosoHandle } from "react-virtuoso";
import {
  differenceInCalendarWeeks,
  fromUnixTime,
  setDefaultOptions,
} from "date-fns";
import { forwardRef, useCallback, useMemo, useRef, useState } from "react";
import "virtual:uno.css";
import { Week } from "./components/Week";
import { enGB } from "date-fns/locale";
import { CalendarHeader } from "./CalendarHeader";

const currentDate = Date.now();

const AMOUNT_WEEKS_ON_SCREEN = 4;

export const epoch = fromUnixTime(0);

const Item: Components["Item"] = forwardRef((props, ref) => (
  <div className="snap-start" {...props} />
));

const List: Components["List"] = forwardRef(({ style, children }, ref) => {
  return (
    <div style={style} ref={ref}>
      {children}
    </div>
  );
});

export const App = () => {
  setDefaultOptions({ locale: enGB });
  const weeksSinceEpoch = differenceInCalendarWeeks(currentDate, epoch);
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
    setFirstWeekToShow((firstWeekToShow) => firstWeekToShow - weeksToPrepend);
  }, []);

  const endReached = useCallback(() => {
    const weeksToAppend = 4;
    setLastWeekToShow((lastWeekToShow) => lastWeekToShow + weeksToAppend);
  }, []);

  return (
    <>
      <CalendarHeader />
      {/*<button onClick={goToToday}>Today</button>*/}
      <Virtuoso
        ref={ref}
        className="snap-y"
        firstItemIndex={firstWeekToShow}
        initialTopMostItemIndex={totalWeeksToShow / 2}
        itemContent={(index) => <Week weekIndexSinceEpoch={index} />}
        components={{
          // List,
          Item,
        }}
        totalCount={totalWeeksToShow}
        startReached={startReached}
        endReached={endReached}
      ></Virtuoso>
    </>
  );
};

const root = createRoot(document.getElementById("root")!);
root.render(<App />);
