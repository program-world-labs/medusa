import type IconProps from "../types"

const IconChevronRightMini = ({
  iconColorClassName,
  containerClassName,
  ...props
}: IconProps) => {
  return (
    <svg
      width={props.width || 20}
      height={props.height || 20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={containerClassName}
      {...props}
    >
      <path
        d="M8 6L12 10L8 14"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={
          iconColorClassName ||
          "stroke-medusa-icon-subtle dark:stroke-medusa-icon-subtle-dark"
        }
      />
    </svg>
  )
}

export default IconChevronRightMini