
interface ArrowIconProps {
  width: number;
  height: number;
  _className: string
}


const ArrowIcon = ({ _className, height, width }: ArrowIconProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 9 13"
    xmlns="http://www.w3.org/2000/svg"
    className={_className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.18222 6.15475L0.185746 1.74645C-0.0619154 1.52794 -0.0619154 1.17368 0.185746 0.95517L1.08262 0.163879C1.33028 -0.0546264 1.73182 -0.0546264 1.97947 0.163879L7.87294 5.36347C8.11076 5.57329 8.24444 5.85798 8.24444 6.15475C8.24444 6.45152 8.11076 6.73621 7.87294 6.94603L1.97947 12.1457C1.73182 12.3641 1.33028 12.3641 1.08262 12.1457L0.185746 11.3544C-0.0619154 11.1359 -0.0619154 10.7816 0.185746 10.5631L5.18222 6.15475Z"
    />
  </svg>
);

export default ArrowIcon;