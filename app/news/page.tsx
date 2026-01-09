import { Metadata } from 'next'
import Parser from 'rss-parser'

export const metadata: Metadata = {
  title: 'NYC Real Estate News | Building Health X',
  description: 'Stay informed with the latest New York City real estate news, market updates, and housing developments. Curated from trusted NYC property sources.',
  openGraph: {
    title: 'NYC Real Estate News | Building Health X',
    description: 'Stay informed with the latest New York City real estate news, market updates, and housing developments.',
  },
}

// Revalidate every hour
export const revalidate = 3600

interface FeedItem {
  title: string
  link: string
  contentSnippet?: string
  content?: string
  pubDate?: string
  enclosure?: { url: string }
  'media:content'?: { $: { url: string } }
  source: string
  sourceUrl: string
  image?: string
}

const feeds = [
  { url: 'https://therealdeal.com/feed/', name: 'The Real Deal', site: 'therealdeal.com' },
  { url: 'https://ny.curbed.com/rss/index.xml', name: 'Curbed NY', site: 'curbed.com' },
  { url: 'https://newyorkyimby.com/feed', name: 'New York YIMBY', site: 'newyorkyimby.com' },
  { url: 'https://brickunderground.com/rss.xml', name: 'Brick Underground', site: 'brickunderground.com' },
  { url: 'https://6sqft.com/feed', name: '6sqft', site: '6sqft.com' },
  { url: 'https://thecity.nyc/category/real-estate/feed', name: 'THE CITY', site: 'thecity.nyc' },
]

function extractImage(item: any): string | undefined {
  // Try various common RSS image fields
  if (item.enclosure?.url) return item.enclosure.url
  if (item['media:content']?.$?.url) return item['media:content'].$.url
  if (item['media:thumbnail']?.$?.url) return item['media:thumbnail'].$.url
  
  // Try to extract from content
  const content = item.content || item['content:encoded'] || ''
  const imgMatch = content.match(/<img[^>]+src="([^">]+)"/)
  if (imgMatch) return imgMatch[1]
  
  return undefined
}

function truncateToSentences(text: string, count: number = 3): string {
  if (!text) return ''
  // Clean HTML tags
  const clean = text.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim()
  // Split by sentence endings
  const sentences = clean.match(/[^.!?]+[.!?]+/g) || [clean]
  return sentences.slice(0, count).join(' ').trim()
}

function formatDate(dateString?: string): string {
  if (!dateString) return ''
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric',
    year: 'numeric'
  })
}

async function getNews(): Promise<FeedItem[]> {
  const parser = new Parser({
    customFields: {
      item: [
        ['media:content', 'media:content'],
        ['media:thumbnail', 'media:thumbnail'],
        ['content:encoded', 'content:encoded'],
      ],
    },
  })

  const allItems: FeedItem[] = []

  await Promise.all(
    feeds.map(async (feed) => {
      try {
        const result = await parser.parseURL(feed.url)
        const items = result.items.slice(0, 5).map((item) => ({
          title: item.title || 'Untitled',
          link: item.link || '#',
          contentSnippet: item.contentSnippet,
          content: item.content || (item as any)['content:encoded'],
          pubDate: item.pubDate,
          source: feed.name,
          sourceUrl: feed.site,
          image: extractImage(item),
        }))
        allItems.push(...items)
      } catch (error) {
        console.error(`Failed to fetch ${feed.name}:`, error)
      }
    })
  )

  // Sort by date, newest first
  return allItems.sort((a, b) => {
    const dateA = a.pubDate ? new Date(a.pubDate).getTime() : 0
    const dateB = b.pubDate ? new Date(b.pubDate).getTime() : 0
    return dateB - dateA
  })
}

export default async function NewsPage() {
  const news = await getNews()

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* SEO Intro Section */}
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            NYC Real Estate News
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Stay ahead of New York City&apos;s ever-changing real estate landscape. 
            We aggregate breaking news from the city&apos;s most trusted property 
            sources—covering new developments, market trends, housing policy, 
            building violations, and neighborhood changes across all five boroughs. 
            Whether you&apos;re a renter researching a building, a buyer evaluating 
            a purchase, or simply keeping tabs on the NYC housing market, this is 
            your daily briefing.
          </p>
        </header>

        {/* News Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {news.map((item, index) => (
            <article 
              key={`${item.link}-${index}`}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
            >
              {/* Image */}
              {item.image && (
                <div className="relative h-48 w-full bg-gray-100">
                  <img
                    src={item.image}
                    alt=""
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              )}
              
              {/* Content */}
              <div className="p-5">
                {/* Source & Date */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                  <span className="font-medium text-blue-600">{item.source}</span>
                  <span>{formatDate(item.pubDate)}</span>
                </div>
                
                {/* Title */}
                <h2 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                  {item.title}
                </h2>
                
                {/* Snippet */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {truncateToSentences(item.contentSnippet || item.content || '', 3)}
                </p>
                
                {/* Read More Button */}
                
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
                >
                  Read more at {item.sourceUrl}
                  <svg 
                    className="w-4 h-4" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                    />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Empty State */}
        {news.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">Unable to load news at this time. Please check back later.</p>
          </div>
        )}

        {/* Footer Note */}
        <footer className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 text-center">
            News aggregated from The Real Deal, Curbed NY, New York YIMBY, 
            Brick Underground, 6sqft, and THE CITY. Updated hourly.
          </p>
        </footer>
      </div>
    </main>
  )
}
