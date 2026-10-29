import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { creatorCategories, formOptions, forms } from '../../content/site'
import { EMAILJS_VARS, HONEYPOT_FIELD } from '../../constants/emailjs'
import {
  joinList,
  submitCreatorApplication,
  type SubmitOutcome,
} from '../../lib/emailjs'
import { trackEvent } from '../../lib/analytics'
import { getMailtoUrl } from '../../lib/links'
import ActionButton from '../ui/ActionButton'
import { ArrowRightIcon, LoaderIcon } from '../ui/Icons'
import {
  CheckboxGroupField,
  ConsentField,
  FormStatus,
  Honeypot,
  SelectField,
  TextAreaField,
  TextField,
  isOptional,
} from './FormControls'

const copy = forms.creator
const fields = copy.fields

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

const HANDLE_FIELDS = ['instagram', 'tiktok', 'youtube'] as const

const schema = z
  .object({
    fullName: z.string().trim().min(2, 'Please enter your full name.'),
    email: z
      .string()
      .trim()
      .min(1, 'Please enter your email address.')
      .regex(EMAIL_PATTERN, 'Please enter a valid email address.'),
    location: z.string().trim().min(2, 'Please enter your country and city.'),
    instagram: z.string().trim().max(120).optional(),
    tiktok: z.string().trim().max(120).optional(),
    youtube: z.string().trim().max(120).optional(),
    niche: z.string().trim().min(1, 'Please select your primary niche.'),
    followerRange: z.string().trim().min(1, 'Please select a follower range.'),
    portfolioLink: z.string().trim().max(300).optional(),
    languages: z.array(z.string()).min(1, 'Select at least one language.'),
    intro: z
      .string()
      .trim()
      .min(20, 'A couple of lines helps brands understand you — at least 20 characters.'),
    consent: z
      .boolean()
      .refine(
        (value) => value === true,
        'Please accept the privacy policy to continue.',
      ),
    [HONEYPOT_FIELD]: z.string().optional(),
  })
  .superRefine((values, ctx) => {
    const hasHandle = HANDLE_FIELDS.some((key) => (values[key] ?? '').trim().length > 0)
    if (!hasHandle) {
      ctx.addIssue({
        code: 'custom',
        path: ['instagram'],
        message: 'Add at least one handle — Instagram, TikTok or YouTube.',
      })
    }
  })

type CreatorApplicationValues = z.infer<typeof schema>

const categoryNames = creatorCategories.items.map((item) => item.name)

export default function CreatorApplicationForm() {
  const [outcome, setOutcome] = useState<SubmitOutcome | null>(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CreatorApplicationValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      fullName: '',
      email: '',
      location: '',
      instagram: '',
      tiktok: '',
      youtube: '',
      niche: '',
      followerRange: '',
      portfolioLink: '',
      languages: [],
      intro: '',
      consent: false,
      [HONEYPOT_FIELD]: '',
    },
  })

  const onSubmit = async (values: CreatorApplicationValues) => {
    setOutcome(null)

    if (values[HONEYPOT_FIELD]) {
      setOutcome({ status: 'success' })
      reset()
      return
    }

    const result = await submitCreatorApplication(
      {
        [EMAILJS_VARS.creator.fullName]: values.fullName,
        [EMAILJS_VARS.creator.email]: values.email,
        [EMAILJS_VARS.creator.location]: values.location,
        [EMAILJS_VARS.creator.instagram]: values.instagram?.trim() || 'Not provided',
        [EMAILJS_VARS.creator.tiktok]: values.tiktok?.trim() || 'Not provided',
        [EMAILJS_VARS.creator.youtube]: values.youtube?.trim() || 'Not provided',
        [EMAILJS_VARS.creator.niche]: values.niche,
        [EMAILJS_VARS.creator.followerRange]: values.followerRange,
        [EMAILJS_VARS.creator.portfolioLink]:
          values.portfolioLink?.trim() || 'Not provided',
        [EMAILJS_VARS.creator.languages]: joinList(values.languages),
        [EMAILJS_VARS.creator.intro]: values.intro,
      },
      values.email,
    )

    setOutcome(result)

    if (result.status === 'success') {
      trackEvent('creator_application_submit', {
        niche: values.niche,
        followers: values.followerRange,
      })
      reset()
    } else if (result.status === 'error') {
      trackEvent('form_error', { form: 'creator_application' })
    }
  }

  return (
    <div className="rounded-panel border border-ink/10 bg-white p-6 sm:p-8 lg:p-10">
      <h2 className="text-[24px] leading-tight sm:text-[28px]">{copy.title}</h2>
      <p className="mt-3 text-[15px] leading-relaxed text-ink/60">{copy.intro}</p>

      <form
        noValidate
        onSubmit={handleSubmit(onSubmit, () =>
          trackEvent('form_error', { form: 'creator_application' }),
        )}
        className="mt-8 space-y-6"
      >
        <Honeypot registration={register(HONEYPOT_FIELD)} />

        <div className="grid gap-6 sm:grid-cols-2">
          <TextField
            id="creator-name"
            label={fields.fullName.label}
            placeholder={fields.fullName.placeholder}
            autoComplete="name"
            error={errors.fullName?.message}
            registration={register('fullName')}
          />
          <TextField
            id="creator-email"
            label={fields.email.label}
            type="email"
            inputMode="email"
            placeholder={fields.email.placeholder}
            autoComplete="email"
            error={errors.email?.message}
            registration={register('email')}
          />
          <TextField
            id="creator-location"
            label={fields.location.label}
            placeholder={fields.location.placeholder}
            autoComplete="address-level2"
            error={errors.location?.message}
            registration={register('location')}
          />
          <TextField
            id="creator-instagram"
            label={fields.instagram.label}
            placeholder={fields.instagram.placeholder}
            optional={isOptional(fields.instagram)}
            hint="At least one handle is required."
            error={errors.instagram?.message}
            registration={register('instagram')}
          />
          <TextField
            id="creator-tiktok"
            label={fields.tiktok.label}
            placeholder={fields.tiktok.placeholder}
            optional={isOptional(fields.tiktok)}
            error={errors.tiktok?.message}
            registration={register('tiktok')}
          />
          <TextField
            id="creator-youtube"
            label={fields.youtube.label}
            placeholder={fields.youtube.placeholder}
            optional={isOptional(fields.youtube)}
            error={errors.youtube?.message}
            registration={register('youtube')}
          />
          <SelectField
            id="creator-niche"
            label={fields.niche.label}
            placeholder={fields.niche.placeholder}
            options={categoryNames}
            error={errors.niche?.message}
            registration={register('niche')}
          />
          <SelectField
            id="creator-followers"
            label={fields.followerRange.label}
            placeholder={fields.followerRange.placeholder}
            options={formOptions.followerRanges}
            error={errors.followerRange?.message}
            registration={register('followerRange')}
          />
        </div>

        <TextField
          id="creator-portfolio"
          label={fields.portfolioLink.label}
          placeholder={fields.portfolioLink.placeholder}
          hint={fields.portfolioLink.hint}
          optional={isOptional(fields.portfolioLink)}
          autoComplete="url"
          error={errors.portfolioLink?.message}
          registration={register('portfolioLink')}
        />

        <CheckboxGroupField
          id="creator-languages"
          label={fields.languages.label}
          hint={fields.languages.hint}
          options={formOptions.languages}
          error={errors.languages?.message}
          registration={register('languages')}
        />

        <TextAreaField
          id="creator-intro"
          label={fields.intro.label}
          placeholder={fields.intro.placeholder}
          rows={5}
          maxLength={1200}
          error={errors.intro?.message}
          registration={register('intro')}
        />

        <ConsentField
          id="creator-consent"
          error={errors.consent?.message}
          registration={register('consent')}
        >
          {copy.consentBefore}{' '}
          <Link
            to="/privacy"
            className="font-semibold text-accent underline underline-offset-2 hover:text-accent-hover"
          >
            {copy.consentLinkLabel}
          </Link>
          {copy.consentAfter}
        </ConsentField>

        {outcome && (
          <FormStatus
            tone={
              outcome.status === 'success'
                ? 'success'
                : outcome.status === 'not-configured'
                  ? 'notice'
                  : 'error'
            }
            title={
              outcome.status === 'success'
                ? copy.messages.success.title
                : outcome.status === 'not-configured'
                  ? copy.messages.notConfigured.title
                  : copy.messages.error.title
            }
            body={
              outcome.status === 'success'
                ? copy.messages.success.body
                : outcome.status === 'not-configured'
                  ? copy.messages.notConfigured.body
                  : copy.messages.error.body
            }
          />
        )}

        {outcome?.status === 'error' && (
          <p className="text-[13.5px] text-ink/55">
            Prefer email?{' '}
            <a
              href={getMailtoUrl('Creator application')}
              onClick={() =>
                trackEvent('email_click', {
                  label: 'form_fallback',
                  location: 'creator_form',
                })
              }
              className="font-semibold text-accent underline underline-offset-2 hover:text-accent-hover"
            >
              Send your profile to us directly
            </a>
            .
          </p>
        )}

        <div className="pt-1">
          <ActionButton
            type="submit"
            variant="primary"
            disabled={isSubmitting}
            className="w-full sm:w-auto"
            icon={
              isSubmitting ? (
                <LoaderIcon className="h-4 w-4 animate-spin" />
              ) : (
                <ArrowRightIcon className="h-4 w-4" />
              )
            }
          >
            {isSubmitting ? copy.submittingLabel : copy.submitLabel}
          </ActionButton>
        </div>
      </form>
    </div>
  )
}
