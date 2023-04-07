import React from 'react'
import recipes from '../../data/Recipes'
import Link from 'next/link'

const index = () => {
    return (
        <div className='mx-auto px-32 max-sm:px-10'>
            <h1 className="text-[2.7rem] max-md:text-[2rem] text-[#FFFFFF] font-bold py-2 max-sm:text-[1.25rem] max-sm:py-0 max-sm:mt-5">Recipes For Your Soul</h1>
            <div class="elastic-carousal-cont">
                {recipes && recipes.map((item) => {
                    return (
                        <Link href={`/recipe/${item.id}`}>
                            <div class="elas-cont">
                                <div class="black-overlay">
                                    <div class="black-t">{item.name}</div>
                                    <div class="black-p">{item.description}</div>
                                </div>
                                <img class="elas-img"
                                    src={item.image} />
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>)
}

export default index