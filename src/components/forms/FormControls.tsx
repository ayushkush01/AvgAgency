import type { InputHTMLAttributes, ReactNode } from 'react'
import type { UseFormRegisterReturn } from 'react-hook-form'
import { AlertIcon, CheckCircleIcon } from '../ui/Icons'

/**
 * Shared, accessible form primitives.
 *
 * Every control is wired the same way: a real <label htmlFor>, an error
 * message linked by `aria-describedby`, and `aria-invalid` on the input.
 */

type FieldMeta = {
  id: string
  label: string
  error?: string
  hint?: string
  optional?: boolean
}

/** Shape of a field's copy in content/site.ts, used to read the optional flag. */
export type FieldCopy = {
  label: string
  placeholder?: string
  hint?: string
  optional?: boolean
}

/** True when the content file marks this field optional. */
export function isOptional(copy: FieldCopy): boolean {
  return copy.optional === true
}

/** Label + hint + error, wrapped around any control. */
function FieldShell({
  id,
  label,
  error,
  hint,
  optional,
  children,
}: FieldMeta & { children: ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="field-label">
        {label}
        {optional ? (
          <span className="ml-1.5 font-medium normal-case tracking-normal text-ink/35">
            (optional)
          </span>
        ) : (
          <span aria-hidden="true" className="ml-0.5 text-accent">
            *
          </span>
        )}
      </label>

      <div className="mt-2">{children}</div>

      {hint && !error && (
        <p id={`${id}-hint`} className="mt-1.5 text-[13px] text-ink/45">
          {hint}
        </p>
      )}

      {error && (
        <p id={`${id}-error`} role="alert" className="field-error">
          {error}
        </p>
      )}
    </div>
  )
}

function describedBy({ id, error, hint }: Pick<FieldMeta, 'id' | 'error' | 'hint'>) {
  if (error) return `${id}-error`
  if (hint) return `${id}-hint`
  return undefined
}

type TextFieldProps = FieldMeta & {
  registration: UseFormRegisterReturn
  type?: InputHTMLAttributes<HTMLInputElement>['type']
  placeholder?: string
  autoComplete?: string
  inputMode?: InputHTMLAttributes<HTMLInputElement>['inputMode']
}

export function TextField({
  id,
  label,
  error,
  hint,
  optional,
  registration,
  type = 'text',
  placeholder,
  autoComplete,
  inputMode,
}: TextFieldProps) {
  return (
    <FieldShell id={id} label={label} error={error} hint={hint} optional={optional}>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        inputMode={inputMode}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy({ id, error, hint })}
        className="field"
        {...registration}
      />
    </FieldShell>
  )
}

type TextAreaFieldProps = FieldMeta & {
  registration: UseFormRegisterReturn
  rows?: number
  placeholder?: string
  maxLength?: number
}

export function TextAreaField({
  id,
  label,
  error,
  hint,
  optional,
  registration,
  rows = 5,
  placeholder,
  maxLength,
}: TextAreaFieldProps) {
  return (
    <FieldShell id={id} label={label} error={error} hint={hint} optional={optional}>
      <textarea
        id={id}
        rows={rows}
        placeholder={placeholder}
        maxLength={maxLength}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy({ id, error, hint })}
        className="field resize-y"
        {...registration}
      />
    </FieldShell>
  )
}

type SelectFieldProps = FieldMeta & {
  registration: UseFormRegisterReturn
  options: readonly string[]
  /** Shown as a disabled first option. */
  placeholder: string
}

export function SelectField({
  id,
  label,
  error,
  hint,
  optional,
  registration,
  options,
  placeholder,
}: SelectFieldProps) {
  return (
    <FieldShell id={id} label={label} error={error} hint={hint} optional={optional}>
      <select
        id={id}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy({ id, error, hint })}
        className="field appearance-none bg-[length:18px] bg-[right_1rem_center] bg-no-repeat pr-11"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%230A0A0B' stroke-width='2.2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
        }}
        {...registration}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </FieldShell>
  )
}

type CheckboxGroupFieldProps = FieldMeta & {
  registration: UseFormRegisterReturn
  options: readonly string[]
}

/** Multi-select rendered as a wrapped checkbox group (RHF collects the array). */
export function CheckboxGroupField({
  id,
  label,
  error,
  hint,
  optional,
  registration,
  options,
}: CheckboxGroupFieldProps) {
  return (
    <fieldset aria-describedby={describedBy({ id, error, hint })}>
      <legend className="field-label">
        {label}
        {optional ? (
          <span className="ml-1.5 font-medium normal-case tracking-normal text-ink/35">
            (optional)
          </span>
        ) : (
          <span aria-hidden="true" className="ml-0.5 text-accent">
            *
          </span>
        )}
      </legend>

      <ul className="mt-3 flex flex-wrap gap-2">
        {options.map((option, index) => (
          <li key={option}>
            <label
              htmlFor={`${id}-${index}`}
              className="flex min-h-[44px] cursor-pointer items-center gap-2.5 rounded-full border border-ink/15 bg-white px-4 text-[14px] font-medium text-ink/75 transition duration-200 hover:border-ink/30 has-[:checked]:border-accent has-[:checked]:bg-accent/[0.07] has-[:checked]:font-bold has-[:checked]:text-ink"
            >
              <input
                id={`${id}-${index}`}
                type="checkbox"
                value={option}
                className="h-4 w-4 shrink-0 accent-accent"
                {...registration}
              />
              {option}
            </label>
          </li>
        ))}
      </ul>

      {hint && !error && (
        <p id={`${id}-hint`} className="mt-2 text-[13px] text-ink/45">
          {hint}
        </p>
      )}
      {error && (
        <p id={`${id}-error`} role="alert" className="field-error">
          {error}
        </p>
      )}
    </fieldset>
  )
}

type ConsentFieldProps = {
  id: string
  error?: string
  registration: UseFormRegisterReturn
  children: ReactNode
}

/** Explicit, required consent checkbox with a full-size tap target. */
export function ConsentField({ id, error, registration, children }: ConsentFieldProps) {
  return (
    <div>
      <div className="flex items-start gap-3">
        <input
          id={id}
          type="checkbox"
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${id}-error` : undefined}
          className="mt-0.5 h-5 w-5 shrink-0 accent-accent"
          {...registration}
        />
        <label htmlFor={id} className="text-[13.5px] leading-relaxed text-ink/60">
          {children}
        </label>
      </div>
      {error && (
        <p id={`${id}-error`} role="alert" className="field-error">
          {error}
        </p>
      )}
    </div>
  )
}

/**
 * Honeypot. Visually hidden and removed from the tab order, but still present
 * in the DOM so bots fill it in. A non-empty value silently drops the submit.
 */
export function Honeypot({ registration }: { registration: UseFormRegisterReturn }) {
  return (
    <div aria-hidden="true" className="sr-only">
      <label htmlFor={registration.name}>Leave this field empty</label>
      <input
        id={registration.name}
        type="text"
        tabIndex={-1}
        autoComplete="off"
        {...registration}
      />
    </div>
  )
}

type FormStatusProps = {
  tone: 'success' | 'error' | 'notice'
  title: string
  body?: string
}

/** Inline result banner shown after a submit attempt. */
export function FormStatus({ tone, title, body }: FormStatusProps) {
  const styles: Record<FormStatusProps['tone'], string> = {
    success: 'border-accent/30 bg-accent/[0.06]',
    error: 'border-[#C81E1E]/25 bg-[#C81E1E]/[0.04]',
    notice: 'border-ink/20 bg-mist/70',
  }

  const icon =
    tone === 'success' ? (
      <CheckCircleIcon className="h-5 w-5 text-accent" />
    ) : tone === 'error' ? (
      <AlertIcon className="h-5 w-5 text-[#C81E1E]" />
    ) : (
      <AlertIcon className="h-5 w-5 text-ink/50" />
    )

  return (
    <div
      role={tone === 'error' ? 'alert' : 'status'}
      className={`flex items-start gap-3.5 rounded-card border p-4 sm:p-5 ${styles[tone]}`}
    >
      <span className="mt-0.5 shrink-0">{icon}</span>
      <div>
        <p className="font-display text-[15px] font-bold text-ink">{title}</p>
        {body && (
          <p className="mt-1.5 text-[13.5px] leading-relaxed text-ink/60">{body}</p>
        )}
      </div>
    </div>
  )
}
