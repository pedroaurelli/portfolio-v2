type ButtonProps = {
  href: string
  text: string
  className?: string
  blank?: boolean
}

export default function Button(props: ButtonProps) {
  const { href, text, className: styles, blank } = props

  return (
    <a href={href} target={blank ? '_blank' : '_self'} rel="noreferrer">
      <button className={`button group ${styles} transition-hover`}>
        <span className='group-hover:text-white transition-hover'>{text}</span>
      </button>
    </a>
  )
}
