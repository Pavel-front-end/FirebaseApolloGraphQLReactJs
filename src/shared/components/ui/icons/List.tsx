import { SvgIcon, SvgIconProps } from "@mui/material";

export function ListIcon(props: SvgIconProps) {
  return (
    <SvgIcon
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 1H2C1.45 1 1 1.45 1 2V8C1 8.55 1.45 9 2 9H18C18.55 9 19 8.55 19 8V2C19 1.45 18.55 1 18 1ZM17 7H3V3H17V7ZM18 11H2C1.45 11 1 11.45 1 12V18C1 18.55 1.45 19 2 19H18C18.55 19 19 18.55 19 18V12C19 11.45 18.55 11 18 11ZM17 17H3V13H17V17Z"
        fill="inherit"
      />
    </SvgIcon>
  );
}
