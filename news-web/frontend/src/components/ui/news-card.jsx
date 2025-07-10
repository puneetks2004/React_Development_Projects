import dayjs from "dayjs";
import { ExternalLink } from 'lucide-react';
import React from 'react';
import noImage from "../../assets/no-image.jpg";

export default function NewsCard({ name, content, pubDate, image, link, category }) {

  const days = dayjs().diff(pubDate, "d");
  const text = content?.substring((content?.lastIndexOf(">") ?? -1) + 1);
  return (
    <div className='shadow-md w-full flex flex-col items-start rounded-xl overflow-hidden bg-white group hover:-translate-y-3 transition-all hover:shadow-lg'>
      <div className=' w-full h-[250px] overflow-hidden'>
        <img src={image ?? noImage} alt="" className={`h-[250px] w-full ${image ? "object-cover" : 'object-contain'} object-center group-hover:scale-110 transition-transform`} />
      </div>

      <div className='p-6 flex flex-col gap-3'>
        <div className='flex justify-between items-center'>
          <span className='py-1 px-4 bg-indigo-100 text-indigo-600 font-semibold rounded-full capitalize '>{category}</span>
          <p>{days === 0 ? "Today" : `${days} days`}</p>
        </div>
        <p className='font-bold text-lg group-hover:text-indigo-600 transition-colors'>{name}</p>
        <p className='text-gray-700'>{text && (text?.length <= 250 ? text : text?.substring(0, 250) + "...")}</p>
      </div>
      <a href={link} target="_blank" className='group/a text-indigo-600 mx-6 font-semibold mb-6 mt-auto flex gap-2 items-center'>Read More <ExternalLink className="group-hover/a:translate-x-2 transition-transform "  size={20} /></a>
    </div>
  )
}
