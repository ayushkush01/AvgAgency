import { formOptions } from './site'

export type Platform = typeof formOptions.platforms[number]

export type Creator = {
  id: string
  name: string
  niche: string
  platforms: Platform[]
  country: string
  countryCode: string
  followers: string
  avatarUrl?: string
  placeholder: boolean
}

export const creators: Creator[] = [
  {
    id: 'c1',
    name: 'Aisha Sharma',
    niche: 'Beauty',
    platforms: ['Instagram', 'YouTube'],
    country: 'India',
    countryCode: 'IN',
    followers: '250K+',
    placeholder: false,
  },
  {
    id: 'c2',
    name: 'James Wilson',
    niche: 'Technology',
    platforms: ['YouTube'],
    country: 'USA',
    countryCode: 'US',
    followers: '500K+',
    placeholder: false,
  },
  {
    id: 'c3',
    name: 'Sarah Ahmed',
    niche: 'Fashion',
    platforms: ['Instagram', 'TikTok'],
    country: 'UAE',
    countryCode: 'AE',
    followers: '150K+',
    placeholder: false,
  },
  {
    id: 'c4',
    name: 'Liam Thompson',
    niche: 'Fitness',
    platforms: ['Instagram'],
    country: 'UK',
    countryCode: 'GB',
    followers: '100K+',
    placeholder: false,
  },
  {
    id: 'c5',
    name: 'Priya Patel',
    niche: 'Lifestyle',
    platforms: ['Instagram', 'YouTube'],
    country: 'India',
    countryCode: 'IN',
    followers: '300K+',
    placeholder: false,
  },
  {
    id: 'c6',
    name: 'Emma Brown',
    niche: 'Travel',
    platforms: ['Instagram', 'TikTok'],
    country: 'UK',
    countryCode: 'GB',
    followers: '200K+',
    placeholder: false,
  },
]

export const creatorFilters = {
  categories: ['All', 'Beauty', 'Fashion', 'Lifestyle', 'Fitness', 'Technology', 'Food', 'Travel', 'Gaming'],
  countries: ['All', 'USA', 'UK', 'UAE', 'India'],
  platforms: ['All', 'Instagram', 'YouTube', 'TikTok', 'LinkedIn'],
} as const
