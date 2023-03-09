type ButtonProps = {
  href: string
  text: string
  className?: string
}

export default function Button(props: ButtonProps) {
  const { href, text, className: styles } = props

  return (
    <a href={href}>
      <button className={`button ${styles}`} >{text}</button>
    </a>
  )
}
