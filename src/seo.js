// Shared SEO values for consistent OG/Twitter tags across all pages
export const SITE_NAME = 'Kavod International'
export const BASE_URL = 'https://kavod.org'
export const OG_IMAGE = 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=1200&h=630&fit=crop&auto=format'
export const TWITTER_HANDLE = '@kavod_international'

export function pageMeta({ title, description, path }) {
  return {
    title,
    description,
    canonical: `${BASE_URL}${path}`,
    ogTitle: title,
    ogDescription: description,
    ogUrl: `${BASE_URL}${path}`,
    ogImage: OG_IMAGE,
    twitterTitle: title,
    twitterDescription: description,
    twitterImage: OG_IMAGE,
  }
}
