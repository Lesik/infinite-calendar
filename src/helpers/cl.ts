/*
 * Helps with className property when there are multiple or conditional
 * Loosely based on https://github.com/JedWatson/classnames
 *
 * Use like this:
 * ```tsx
 * import classes from './MyComponent.module.css';
 *
 * cl("alwaysOn", ["all" "of", "these", "alwaysOn"], {
 *   conditionalOn: shouldClassBeOn(),
 *   [classes.myConditionalClass]: shouldClassBeOn,
 * }))
 * ```
 */
type AcceptableClArg =
  | undefined
  | null
  | string
  | Array<string>
  | Record<string, boolean | undefined>;
export function cl(...args: AcceptableClArg[]): string {
  const classes: string[] = [];

  args.forEach((arg) => {
    // safeguard for undefined values
    if (typeof arg === "undefined" || arg === null || arg === "") {
      return;
    }

    if (typeof arg === "string") {
      classes.push(arg);
    } else if (Array.isArray(arg)) {
      classes.push(cl(...arg));
    } else if (typeof arg === "object") {
      Object.entries(arg).forEach(([key, value]) => {
        if (value) {
          classes.push(key);
        }
      });
    }
  });

  return classes.join(" ");
}
