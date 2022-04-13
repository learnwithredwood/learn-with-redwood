interface Props {
  className: string
  height: number
  width: number
}

const Medium = ({
  className = '',
  height = 42,
  width = 42,
}: Props): JSX.Element => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M23.0851 21.0002C23.0851 27.599 18.9749 32.9483 13.905 32.9483C8.83511 32.9483 4.72461 27.5978 4.72461 21.0002C4.72461 14.4027 8.8348 9.05176 13.905 9.05176C18.9752 9.05176 23.0851 14.4015 23.0851 21.0002Z" />
      <path d="M33.156 21.0002C33.156 27.2115 31.1009 32.2487 28.5658 32.2487C26.0307 32.2487 23.9756 27.2115 23.9756 21.0002C23.9756 14.7888 26.0304 9.75159 28.5655 9.75159C31.1006 9.75159 33.1557 14.7872 33.1557 21.0002" />
      <path d="M37.2753 21.0002C37.2753 26.564 36.5527 31.0772 35.6609 31.0772C34.7692 31.0772 34.0469 26.5652 34.0469 21.0002C34.0469 15.4352 34.7695 10.9233 35.6609 10.9233C36.5524 10.9233 37.2753 15.4348 37.2753 21.0002Z" />
    </svg>
  )
}

export { Medium }
