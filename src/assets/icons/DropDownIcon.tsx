import { ICon } from "../../interfaces/Icon";
export const DropDownIcon = (props: ICon) => {
  const { width = "12", height = "7", className } = props;
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 12 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.666626 1L5.99996 6.33333L11.3333 1"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
