import { useRouter } from 'next/router';
import React from 'react'
import recipe from '../../data/Recipes';
import Menu from '../components/Menu';

const Recipe = () => {
    const router = useRouter();
    const id = Number(router.asPath.split("recipe/")[1])
    return (
        <>
            <Menu />
            <div className='mx-[20rem] my-[5rem] px-12 text-white'>
                <div className='flex justify-center mb-16'>
                    <img src={recipe[id - 1] && recipe[id - 1].image2} className='h-[30rem] w-[100%] rounded' />
                </div>
                <h1 className='text-5xl mb-7'>{recipe[id - 1] && recipe[id - 1].name}</h1>
                <hr className="text-red-500" />
                <h1 className='text-4xl my-7'>Ingredients</h1>
                <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 py-4 gap-8">
                    {recipe[id - 1] && recipe[id - 1].ingredients.map((item) => {
                        return (
                            <p className='flex text-md'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-3">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                {item}
                            </p>
                        )
                    })}
                </div>
                <h1 className='text-4xl mt-10 mb-5'>Instructions</h1>
                {recipe[id - 1] && recipe[id - 1].instructions.map((item, id) => {
                    return (
                        <div className='flex my-5'>
                            <span className='bg-white mr-5 h-11 py-3 px-[1.15rem] text-[#e0191a] rounded-full'>
                                {id + 1}
                            </span>
                            <p key={id} className='tracking-wider text-xl flex pt-2'>{item}</p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Recipe