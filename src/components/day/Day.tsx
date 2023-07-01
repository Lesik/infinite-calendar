import { isThisMonth, isWeekend, isWithinInterval } from "date-fns";
import React from "react";
import { DayHeader } from "./DayHeader";
import { Event } from "./Event";
import { cl } from "../../helpers/cl";
import { AllDayEvent } from "./AllDayEvent";

export const Day = ({ date }: { date: Date }) => {
  const currentMonth = isThisMonth(date);
  const weekend = isWeekend(date);
  return (
    <span
      className={cl("flex flex-col gap-1", {
        "bg-neutral-100 @dark:bg-zinc-800": weekend,
        "bg-white @dark:bg-zinc-900": !weekend,
      })}
    >
      <DayHeader date={date} />
      {isWithinInterval(date, {
        start: new Date(2023, 6, 1),
        end: new Date(2023, 6, 3),
      }) && (
        <AllDayEvent
          day={date}
          title="Cricket"
          start={new Date(2023, 6, 1)}
          end={new Date(2023, 6, 3)}
          color="bg-cyan-800"
        />
      )}
      <Event
        title="Cricket with my best buddy Steven"
        color="bg-red-200"
        time="20:00"
      />
    </span>
  );
};
