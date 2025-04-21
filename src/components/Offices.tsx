import clsx from 'clsx'

function Office({
  name,
  children,
  invert = false,
}: {
  name: string
  children: React.ReactNode
  invert?: boolean
}) {
  return (
    <address
      className={clsx(
        'text-sm not-italic',
        invert ? 'text-neutral-300' : 'text-neutral-600',
      )}
    >
      <strong className={invert ? 'text-white' : 'text-neutral-950'}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  )
}

export function Offices({
  invert = false,
  ...props
}: React.ComponentPropsWithoutRef<'ul'> & { invert?: boolean }) {
  return (
    <ul role="list" {...props}>
      <li>
        <Office name="Lorem Ipsum Office" invert={invert}>
          123 Lorem St, Ipsum City,
          <br />
          Dolor State, 12345
        </Office>
      </li>
      <li>
        <Office name="Lorem Ipsum Office 2" invert={invert}>
          456 Lorem St, Ipsum City,
          <br />
          Dolor State, 67890
        </Office>
      </li>
    </ul>
  )
}
