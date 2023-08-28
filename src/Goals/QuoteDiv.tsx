import React from 'react';
import { LuStars } from "react-icons/lu"
import { FaQuoteLeft } from "react-icons/fa"

interface QuoteDivProps {
    quotes: Quotes[];
}

const QuoteDiv: React.FC<QuoteDivProps> = ({ quotes }) => {
  return (
    <div>
            <div className="flex justify-between w-full h-[3vh]  ">
                <div className='flex flex-row ml-48 mt-3'>
                    <h3 className=" font-light text-2xl ">Quote of The Day </h3>
                    <LuStars size={20} className='ml-2 mt-1' />
                </div>
            </div>
            <div className='relative left-7 top-5 p-5'>

                {quotes.map(quote => (
                    <div className='block'>
                        <div className='flex flex-row'>
                            <FaQuoteLeft size={40} />
                            <h3 className=' font-serif text-xl mt-4 ml-2'>{quote.q}</h3>
                        </div>
                        <h1 className=' font-semibold text-2xl relative top-4 left-80'>{quote.a}</h1>
                    </div>



                ))}

            </div>
        </div>
  )
}

export default QuoteDiv

