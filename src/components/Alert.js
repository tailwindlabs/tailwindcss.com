import clsx from 'clsx'

const InfoIcon = (
  <svg
    width="22"
    height="20"
    viewBox="0 0 22 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="mx-auto"
  >
    <path
      d="M11 0L14.2328 6.55041L21.4616 7.60081L16.2308 12.6996L17.4656 19.8992L11 16.5L4.53436 19.8992L5.76919 12.6996L0.538379 7.60081L7.76718 6.55041L11 0Z"
      fill="#3366FF"
    />
  </svg>
)

const SuccessIcon = (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="mx-auto"
  >
    <circle cx="11" cy="11" r="11" fill="#52BD94" />
    <path d="M5.99999 12.16L9.99999 15.16L16.2 7.06001" stroke="white" />
  </svg>
)

const WarningIcon = (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="mx-auto"
  >
    <circle cx="11" cy="11" r="11" fill="#FFB020" />
    <rect x="10" y="6" width="2" height="5" fill="white" />
    <rect x="10" y="13" width="2" height="2" fill="white" />
  </svg>
)

const DangerIcon = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="mx-auto"
  >
    <path d="M12 0L22.3923 18H1.6077L12 0Z" fill="#D14343" />
    <rect x="11" y="6" width="2" height="5" fill="white" />
    <rect x="11" y="13" width="2" height="2" fill="white" />
  </svg>
)

const getIconByType = (type) => {
  if (type === 'info') {
    return InfoIcon
  }
  if (type === 'success') {
    return SuccessIcon
  }
  if (type === 'warning') {
    return WarningIcon
  }
  if (type === 'danger') {
    return DangerIcon
  }
}

const getBgByType = (type) => {
  if (type === 'info') {
    return 'bg-purple'
  }
  if (type === 'success') {
    return 'bg-green'
  }
  if (type === 'warning') {
    return 'bg-yellow'
  }
  if (type === 'danger') {
    return 'bg-peach'
  }
}

export function Alert({ type, children }) {
  return (
    <div
      className={clsx(
        'grid grid-cols-1 lg:grid-cols-[4.125rem__minmax(0,_auto)] gap-[0.625rem] lg:gap-0 text-dark-purple py-5 lg:py-6 pl-[0.875rem] lg:pl-0 pr-[0.875rem] lg:pr-[4.125rem] mb-5 rounded-[0.625rem]',
        getBgByType(type)
      )}
    >
      {getIconByType(type)}
      <div className="first:children:mt-0 last:children:mb-0">{children}</div>
    </div>
  )
}
