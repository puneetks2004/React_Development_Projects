import React, { useEffect, useState } from 'react'
import NewsCard from './ui/news-card'
import MaxWidthWrapper from './ui/max-width-wrapper'
import Button from './ui/button'
import { Loader2 } from 'lucide-react'
import { xml2js } from 'xml-js'

const links = [
  {
    "name": "Top Stories",
    "link": "rssfeedstopstories.cms",
    "id": "topstories"
  },
  {
    "name": "Most Recent Stories",
    "link": "rssfeedmostrecent.cms",
    "id": "mostrecentstories"
  },
  {
    "name": "India",
    "link": "rssfeeds/-2128936835.cms",
    "id": "india"
  },
  {
    "name": "World",
    "link": "rssfeeds/296589292.cms",
    "id": "world"
  },
  {
    "name": "NRI",
    "link": "rssfeeds/7098551.cms",
    "id": "nri"
  },
  {
    "name": "Business",
    "link": "rssfeeds/1898055.cms",
    "id": "business"
  },
  {
    "name": "US",
    "link": "rssfeeds_us/72258322.cms",
    "id": "us"
  },
  {
    "name": "Cricket",
    "link": "rssfeeds/54829575.cms",
    "id": "cricket"
  },
  {
    "name": "Sports",
    "link": "rssfeeds/4719148.cms",
    "id": "sports"
  },
  {
    "name": "Science",
    "link": "rssfeeds/-2128672765.cms",
    "id": "science"
  },
  {
    "name": "Environment",
    "link": "rssfeeds/2647163.cms",
    "id": "environment"
  },
  {
    "name": "Tech",
    "link": "rssfeeds/66949542.cms",
    "id": "tech"
  },
  {
    "name": "Education",
    "link": "rssfeeds/913168846.cms",
    "id": "education"
  },
  {
    "name": "Entertainment",
    "link": "rssfeeds/1081479906.cms",
    "id": "entertainment"
  },
  {
    "name": "Life & Style",
    "link": "rssfeeds/2886704.cms",
    "id": "lifeandstyle"
  },
  {
    "name": "Most Read",
    "link": "rssfeedmostread.cms",
    "id": "mostread"
  },
  {
    "name": "Most Shared",
    "link": "rssfeedmostshared.cms",
    "id": "mostshared"
  },
  {
    "name": "Most Commented",
    "link": "rssfeedmostcommented.cms",
    "id": "mostcommented"
  },
  {
    "name": "Astrology",
    "link": "rssfeeds/65857041.cms",
    "id": "astrology"
  },
  {
    "name": "Auto",
    "link": "rssfeeds/74317216.cms",
    "id": "auto"
  }
]

export default function News() {

  const [activeLinkIndex, setActiveLinkIndex] = useState(0)
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:3001/rss/" + links[activeLinkIndex].link);
        const text = await response.text();
        const data = xml2js(text, { compact: true })
        console.log(data)
        setNews(data.rss.channel.item);
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    })()
  }, [activeLinkIndex])

  return (

    <MaxWidthWrapper>
      <h1 className='px-8 text-2xl font-bold text-center'>Choose Your News Category</h1>
      <div className='flex gap-2 sm:gap-4 max-w-screen-xl mx-auto items-center justify-center flex-wrap mt-6'>
        {links.map((link, index) => (
          <Button key={index} className={`${activeLinkIndex === index ? "bg-gradient-to-r from-indigo-500 from-60% to-purple-500 text-white" : "bg-white border border-gray-200 text-black"}`} onClick={() => {
            setActiveLinkIndex(index)
          }}>
            {link.name}
          </Button>
        ))}
      </div>

      <div className='py-8 px-4 sm:px-8'>
        <h1 className='text-3xl font-bold'>{links[activeLinkIndex].name} News</h1>
        <p className='text-gray-600 mt-2 mb-8'>{news.length} articles found</p>
        {loading ? (<div className='flex items-center justify-center mt-10 gap-4'>
          <Loader2 size={50} className='text-indigo-600 animate-spin' />
          <p>Loading...</p>
        </div>) : (
          <div className='grid sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-6'>
            {
              news.map((item, index) => (
                <NewsCard
                  key={index}
                  name={item.title._text}
                  content={item.description._cdata ?? item.description._text}
                  pubDate={item.pubDate._text}
                  image={item.enclosure?._attributes.url}
                  link={item.link._text}
                  category={links[activeLinkIndex].name}
                />
              ))
            }
          </div>
        )}
      </div>
    </MaxWidthWrapper>


  )
}
