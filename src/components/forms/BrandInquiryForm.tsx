import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { creatorCategories, formOptions, forms } from '../../content/site'
import { EMAILJS_VARS, HONEYPOT_FIELD } from '../../constants/emailjs'
import { joinList, submitBrandInquiry, type SubmitOutcome } from '../../lib/emailjs'
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

const copy = forms.brand
const fields = copy.fields

/** Deliberately permissive — catches typos without rejecting valid addresses. */
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

const schema = z.object({
  companyName: z.string().trim().min(2, 'Please enter your company name.'),
  contactName: z.string().trim().min(2, 'Please enter your name.'),
  contactEmail: z
    .string()
    .trim()
    .min(1, 'Please enter your email address.')
    .regex(EMAIL_PATTERN, 'Please enter a valid email address.'),
  website: z.string().trim().max(300, 'That looks too long.').optional(),
  budget: z.string().trim().min(1, 'Please select a budget range.'),
  targetCountry: z.string().trim().min(1, 'Please select a target market.'),
  marketingGoals: z
    .string()
    .trim()
    .min(20, 'A sentence or two helps us scope this — at least 20 characters.'),
  categories: z.array(z.string()).min(1, 'Select at least one category.'),
  consent: z
    .boolean()
    .refine((value) => value === true, 'Please accept the privacy policy to continue.'),
  [HONEYPOT_FIELD]: z.string().optional(),
})

type BrandInquiryValues = z.infer<typeof schema>

const categoryNames = creatorCategories.items.map((item) => item.name)

export default function BrandInquiryForm() {
  const [outcome, setOutcome] = useState<SubmitOutcome | null>(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<BrandInquiryValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      companyName: '',
      contactName: '',
      contactEmail: '',
      website: '',
      budget: '',
      targetCountry: '',
      marketingGoals: '',
      categories: [],
      consent: false,
      [HONEYPOT_FIELD]: '',
    },
  })

  const onSubmit = async (values: BrandInquiryValues) => {
    setOutcome(null)

    // Honeypot: a real visitor never fills this. Drop the submit silently.
    if (values[HONEYPOT_FIELD]) {
      setOutcome({ status: 'success' })
      reset()
      return
    }

    const result = await submitBrandInquiry(
      {
        [EMAILJS_VARS.brand.companyName]: values.companyName,
        [EMAILJS_VARS.brand.contactName]: values.contactName,
        [EMAILJS_VARS.brand.contactEmail]: values.contactEmail,
        [EMAILJS_VARS.brand.website]: values.website?.trim() || 'Not provided',
        [EMAILJS_VARS.brand.budget]: values.budget,
        [EMAILJS_VARS.brand.targetCountry]: values.targetCountry,
        [EMAILJS_VARS.brand.marketingGoals]: values.marketingGoals,
        [EMAILJS_VARS.brand.creatorCategories]: joinList(values.categories),
      },
      values.contactEmail,
    )

    setOutcome(result)

    if (result.status === 'success') {
      trackEvent('brand_inquiry_submit', {
        budget: values.budget,
        market: values.targetCountry,
      })
      reset()
    } else if (result.status === 'error') {
      trackEvent('form_error', { form: 'brand_inquiry' })
    }
  }

  return (
    <div className="rounded-panel border border-line bg-white p-6 sm:p-8 lg:p-10">
      <h2 className="text-[26px] font-bold leading-tight text-ink sm:text-[30px]">{copy.title}</h2>
      <p className="mt-4 text-[15px] leading-relaxed text-body/70">{copy.intro}</p>

      <form
        noValidate
        onSubmit={handleSubmit(onSubmit, () =>
          trackEvent('form_error', { form: 'brand_inquiry' }),
        )}
        className="mt-10 space-y-8"
      >
        <Honeypot registration={register(HONEYPOT_FIELD)} />

        <div className="grid gap-6 sm:grid-cols-2">
          <TextField
            id="brand-company"
            label={fields.companyName.label}
            placeholder={fields.companyName.placeholder}
            autoComplete="organization"
            error={errors.companyName?.message}
            registration={register('companyName')}
          />
          <TextField
            id="brand-name"
            label={fields.contactName.label}
            placeholder={fields.contactName.placeholder}
            autoComplete="name"
            error={errors.contactName?.message}
            registration={register('contactName')}
          />
          <TextField
            id="brand-email"
            label={fields.contactEmail.label}
            type="email"
            inputMode="email"
            placeholder={fields.contactEmail.placeholder}
            autoComplete="email"
            error={errors.contactEmail?.message}
            registration={register('contactEmail')}
          />
          <TextField
            id="brand-website"
            label="Website or social (optional)"
            placeholder={fields.website.placeholder}
            hint={fields.website.hint}
            optional={isOptional(fields.website)}
            autoComplete="url"
            error={errors.website?.message}
            registration={register('website')}
          />
          <SelectField
            id="brand-budget"
            label={fields.budget.label}
            placeholder={fields.budget.placeholder}
            options={formOptions.budgets}
            error={errors.budget?.message}
            registration={register('budget')}
          />
          <SelectField
            id="brand-market"
            label={fields.targetCountry.label}
            placeholder={fields.targetCountry.placeholder}
            options={formOptions.targetCountries}
            error={errors.targetCountry?.message}
            registration={register('targetCountry')}
          />
        </div>

        <TextAreaField
          id="brand-goals"
          label={fields.marketingGoals.label}
          placeholder={fields.marketingGoals.placeholder}
          hint={fields.marketingGoals.hint}
          rows={5}
          maxLength={1200}
          error={errors.marketingGoals?.message}
          registration={register('marketingGoals')}
        />

        <CheckboxGroupField
          id="brand-categories"
          label={fields.creatorCategories.label}
          hint={fields.creatorCategories.hint}
          options={categoryNames}
          error={errors.categories?.message}
          registration={register('categories')}
        />

        <ConsentField
          id="brand-consent"
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

        <div className="pt-2">
          <ActionButton
            type="submit"
            variant="primary"
            disabled={isSubmitting}
            className="w-full sm:w-auto px-10 h-12"
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
