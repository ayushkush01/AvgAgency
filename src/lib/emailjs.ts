/**
 * EmailJS delivery for both site forms.
 *
 * Behaviour when EmailJS is not yet configured (no service ID / public key /
 * template ID): submissions resolve to `{ status: 'not-configured' }`. The
 * forms turn that into a clear, honest message instead of pretending the
 * lead was sent — see README.md for the environment variables to set.
 */

import emailjs from '@emailjs/browser'
import { EMAILJS_VARS, FORM_NAME } from '../constants/emailjs'
import { env, isFormConfigured } from '../config/env'
import { BRAND_NAME } from '../content/site'
import { getUtmParams, getUtmSummary } from './analytics'

export type SubmitOutcome =
  | { status: 'success' }
  | { status: 'not-configured' }
  | { status: 'error'; message: string }

/** Template params are always flat strings — EmailJS does not accept arrays. */
export type TemplateFields = Record<string, string>

/** Joins a multi-select value into one template string. */
export function joinList(values: readonly string[]): string {
  return values.length > 0 ? values.join(', ') : 'Not specified'
}

function describeError(error: unknown): string {
  if (typeof error === 'object' && error !== null && 'text' in error) {
    const text = (error as { text?: unknown }).text
    if (typeof text === 'string' && text.trim()) return text
  }
  if (error instanceof Error && error.message) return error.message
  return 'Something went wrong while sending. Please email us directly.'
}

/** Params attached to every submission, regardless of form. */
function sharedParams(formName: string, replyTo: string): TemplateFields {
  return {
    [EMAILJS_VARS.shared.brandName]: BRAND_NAME,
    [EMAILJS_VARS.shared.formName]: formName,
    [EMAILJS_VARS.shared.submittedAt]: new Date().toLocaleString('en-GB', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'medium',
      timeStyle: 'short',
    }),
    [EMAILJS_VARS.shared.replyTo]: replyTo,
    [EMAILJS_VARS.shared.pageUrl]: window.location.href,
    [EMAILJS_VARS.shared.utmSummary]: getUtmSummary(),
    /* UTM / click-id values spread as their own template variables. */
    ...getUtmParams(),
  }
}

function send(templateId: string, params: TemplateFields) {
  return emailjs.send(env.emailjs.serviceId, templateId, params, {
    publicKey: env.emailjs.publicKey,
  })
}

/**
 * Sends the notification to the agency inbox, then best-effort sends the
 * auto-reply to the submitter. A failed auto-reply never fails the form —
 * the lead has already been captured at that point.
 */
async function submit(
  which: 'brand' | 'creator',
  fields: TemplateFields,
  replyTo: string,
): Promise<SubmitOutcome> {
  if (!isFormConfigured(which)) return { status: 'not-configured' }

  const params = { ...fields, ...sharedParams(FORM_NAME[which], replyTo) }
  const { templateId, autoReplyTemplateId } = env.emailjs[which]

  try {
    await send(templateId, params)
  } catch (error) {
    return { status: 'error', message: describeError(error) }
  }

  if (autoReplyTemplateId) {
    try {
      await send(autoReplyTemplateId, params)
    } catch {
      /* Non-fatal: the enquiry itself was delivered. */
    }
  }

  return { status: 'success' }
}

export function submitBrandInquiry(
  fields: TemplateFields,
  replyTo: string,
): Promise<SubmitOutcome> {
  return submit('brand', fields, replyTo)
}

export function submitCreatorApplication(
  fields: TemplateFields,
  replyTo: string,
): Promise<SubmitOutcome> {
  return submit('creator', fields, replyTo)
}
