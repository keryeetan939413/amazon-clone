import Image from "next/image"
import { useState } from "react"
import { StarIcon } from '@heroicons/react/solid'

const MAX_RATING = 5;
const MIN_RATING = 1;

function Product({id, price, title, description, image, category}) {
    const [rating] = useState(
        Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
    )
    
    const [hasPrime] = useState(Math.random() < 0.5)
  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
        <p className="absolute top-2 right-2 text-xs italic text-gray-400">{category}</p>

        <Image src={image} height={200} width={200} objectFit='contain' />

        <h4 className="my-3">{title}</h4>
        
        <div className="flex">
            {Array(rating)
            .fill()
            .map((_, i) => (

            <StarIcon className="h-5  text-yellow-500" />

            ))}
        </div>

        <p className="my-2 text-xs line-clamp-2">{description}</p>

        <div className="mb-5">
            <p>${price}</p>
        </div>

        {hasPrime && (
            <div className="flex items-center space-x-3 -mt-5']">
                <img className="w-12" src="/prime-logo.png" alt="" />
                <p className="text-xs text-gray-500">Free Next-day Delivery</p>
            </div>
        )}

        <button className="button mt-auto">Add to Basket</button>
        
    </div>
  )
}

export default Product