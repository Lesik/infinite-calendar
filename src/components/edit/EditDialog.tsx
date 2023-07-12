import {
  DateField,
  DateInput,
  DateSegment,
  Input,
  Label,
  TextField,
  TimeField,
} from "react-aria-components";

export const EditDialog = () => {
  return (
    <div className="rounded-md bg-neutral-200 @dark:bg-neutral-800 p-4 flex flex-col gap-2">
      <TextField className="flex flex-col">
        <Label className="text-sm">Event name</Label>
        <Input
          className="text-lg bg-transparent b-none"
          value="Cricket with Steven"
        />
      </TextField>
      <TextField className="flex flex-col">
        <Label className="text-sm">Location</Label>
        <Input className="bg-transparent b-none" />
      </TextField>
      <DateField>
        <Label className="text-sm">Event date</Label>
        <DateInput className="flex flex-row gap-2">
          {(segment) => {
            if (segment.type === "literal") {
              return <DateSegment segment={segment} />;
            }
            return <DateSegment segment={segment} />;
          }}
        </DateInput>
      </DateField>
      <TimeField>
        <Label className="text-sm">Event time</Label>
        <DateInput className="flex flex-row gap-2">
          {(segment) => {
            if (segment.type === "literal") {
              return <DateSegment segment={segment} />;
            }
            return <DateSegment segment={segment} />;
          }}
        </DateInput>
      </TimeField>
      <TextField className="flex flex-col">
        <Label className="text-sm">Notes</Label>
        <Input className="bg-transparent b-none" />
      </TextField>
    </div>
  );
};
