import { isThisMonth, isWeekend } from "date-fns";
import React from "react";
import { DayHeader } from "./DayHeader";
import { Event } from "./Event";
import { cl } from "../../helpers/cl";

export const Day = ({ date }: { date: Date }) => {
  const currentMonth = isThisMonth(date);
  const weekend = isWeekend(date);
  return (
    <span
      className={cl("flex flex-col", {
        "bg-neutral-100 @dark:bg-zinc-800": weekend,
        "bg-white @dark:bg-zinc-900": !weekend,
      })}
    >
      <DayHeader date={date} />
      <Event
        title="Cricket with my best buddy Steven"
        color="bg-red-200"
        time="20:00"
      />
    </span>
  );
};
