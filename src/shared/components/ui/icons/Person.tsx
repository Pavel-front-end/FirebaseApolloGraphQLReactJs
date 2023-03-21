import { SvgIcon, SvgIconProps } from "@mui/material";

export function PersonIcon(props: SvgIconProps) {
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
        d="M7.31243 9.46264C6.50624 8.73086 6 7.67455 6 6.5C6 4.29086 7.79086 2.5 10 2.5C12.2091 2.5 14 4.29086 14 6.5C14 7.67455 13.4938 8.73086 12.6876 9.46264C15.7838 10.5667 18 13.5246 18 17H16.5C16.5 13.4101 13.5899 10.5 10 10.5C6.41015 10.5 3.5 13.4101 3.5 17H2C2 13.5246 4.21618 10.5667 7.31243 9.46264ZM10 9C11.3807 9 12.5 7.88071 12.5 6.5C12.5 5.11929 11.3807 4 10 4C8.61929 4 7.5 5.11929 7.5 6.5C7.5 7.88071 8.61929 9 10 9Z"
        fill="white"
      />
    </SvgIcon>
  );
}
