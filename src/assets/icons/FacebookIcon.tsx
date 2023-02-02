import { ICon } from "../../interfaces/Icon";
export const FacebookIcon = (props: ICon) => {
  const { width = "20", height = "20", className } = props;

  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="9.70874" cy="9.70874" r="9.70874" fill="#151875" />
      <path
        d="M10.8203 13.9791V9.73524H12.252L12.4648 8.07362H10.8203V7.01524C10.8203 6.53576 10.9539 6.20747 11.642 6.20747H12.514V4.72605C12.0897 4.68058 11.6633 4.65863 11.2366 4.66029C9.97107 4.66029 9.1022 5.43285 9.1022 6.8511V8.07052H7.67981V9.73213H9.10531V13.9791H10.8203Z"
        fill="white"
      />
    </svg>
  );
};
