import type { MouseEvent, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { trackEvent, type AnalyticsEventName } from '../../lib/analytics'

export type ActionVariant = 'primary' | 'secondary' | 'onDark' | 'text' | 'ghost'

const variantClass: Record<ActionVariant, string> = {
  primary: 'btn-accent',
  secondary: 'btn-ghost',
  onDark: 'btn-on-dark',
  text: 'btn-text',
  ghost: 'btn-ghost',
}

type ActionButtonProps = {
  children: ReactNode
  variant?: ActionVariant
  className?: string
  /** Analytics event fired on click. Omit for non-tracked buttons. */
  event?: AnalyticsEventName
  /** Recorded alongside the event. Defaults to the button's text. */
  eventLabel?: string
  /** Trailing icon, usually an arrow. */
  icon?: ReactNode
  /** Internal route — renders a react-router <Link>. */
  to?: string
  /** External URL — renders an <a>. */
  href?: string
  /** Plain button handler. */
  onClick?: () => void
  type?: 'button' | 'submit'
  disabled?: boolean
  'aria-label'?: string
  target?: string
  rel?: string
}

/**
 * One button component for every call to action on the site.
 *
 * Renders a router <Link>, an <a>, or a <button> depending on the props, and
 * routes click tracking through a single place so `cta_click` is never missed.
 */
export default function ActionButton({
  children,
  variant = 'primary',
  className = '',
  event,
  eventLabel,
  icon,
  to,
  href,
  onClick,
  type = 'button',
  disabled,
  'aria-label': ariaLabel,
  target,
  rel,
}: ActionButtonProps) {
  const classes = `${variantClass[variant]} ${className}`

  const fireTracking = () => {
    if (!event) return
    const label =
      eventLabel ?? (typeof children === 'string' ? children : 'cta')
    trackEvent(event, { label })
  }

  const handleClick = (mouseEvent: MouseEvent) => {
    fireTracking()
    if (onClick) {
      mouseEvent.preventDefault()
      onClick()
    }
  }

  if (to) {
    return (
      <Link
        to={to}
        className={classes}
        onClick={handleClick}
        aria-label={ariaLabel}
      >
        {children}
        {icon}
      </Link>
    )
  }

  if (href) {
    const isExternal = !href.startsWith('mailto:') && !href.startsWith('tel:')
    return (
      <a
        href={href}
        className={classes}
        onClick={fireTracking}
        aria-label={ariaLabel}
        target={target || (isExternal ? '_blank' : undefined)}
        rel={rel || (isExternal ? 'noopener noreferrer' : undefined)}
      >
        {children}
        {icon}
      </a>
    )
  }

  return (
    <button
      type={type}
      onClick={handleClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={`${classes} disabled:cursor-not-allowed disabled:opacity-60`}
    >
      {children}
      {icon}
    </button>
  )
}
