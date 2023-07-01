export const DayNumber = ({
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
