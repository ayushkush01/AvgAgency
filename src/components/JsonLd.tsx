import { Helmet } from 'react-helmet-async'

/**
 * Injects one JSON-LD block into the document head.
 *
 * Pass the output of a builder from `lib/schema.ts`.
 */
export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  )
}
