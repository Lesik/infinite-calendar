import { cl } from "../../helpers/cl";

export const DayNumber = ({
  number,
  highlight,
}: {
  number: string;
  highlight: boolean;
}) => (
  <div
    className={cl(
      "inline-flex justify-right justify-center rounded-full h-[3cap] w-[3cap] leading-[3cap] font-semibold",
      {
        "bg-red text-white": highlight,
      }
    )}
  >
    {number}
  </div>
);
