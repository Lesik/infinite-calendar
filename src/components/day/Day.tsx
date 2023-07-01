import {
  format,
  isFirstDayOfMonth,
  isThisMonth,
  isToday,
  isWeekend,
} from "date-fns";
import { DayNumber } from "./DayNumber";
import React from "react";
import { DayHeader } from "./DayHeader";

export const Day = ({ date }: { date: Date }) => {
  const currentMonth = isThisMonth(date);
  const weekend = isWeekend(date);
  return (
    <span
      className={`flex flex-col @dark:bg-neutral-800 ${
        currentMonth ? "" : ""
      } ${weekend ? "bg-neutral-100 @dark:bg-zinc-800" : "bg-white"}`}
    >
      <DayHeader date={date} />
    </span>
  );
};
