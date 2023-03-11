import React from 'react'

const products = () => {


    const products = [
        {
          id: 1,
          name: 'Chicken Masala',
          href: '#',
          price: '$48',
          imageSrc: 'products/ChikenMasala.png',
          imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
        },
        {
          id: 2,
          name: 'Fish Curry Powder',
          href: '#',
          price: '$35',
          imageSrc: 'products/FishCurryPowder.png',
          imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
        },
        {
          id: 3,
          name: 'Coriander Powder',
          href: '#',
          price: '$89',
          imageSrc: 'products/CorianderPowder5g.png',
          imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
        },
        {
          id: 4,
          name: 'Jaljeera Masala',
          href: '#',
          price: '$35',
          imageSrc: 'products/JaljeeraMasala.png',
          imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
        },
        {
            id: 5,
            name: 'Jeera',
            href: '#',
            price: '$48',
            imageSrc: 'products/Jeera.png',
            imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
          },
          {
            id: 6,
            name: 'Khatai Powder',
            href: '#',
            price: '$48',
            imageSrc: 'products/KhataiPowder.png',
            imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
          },
          {
            id: 7,
            name: 'Meat Masala',
            href: '#',
            price: '$48',
            imageSrc: 'products/MeatMasala200g.png',
            imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
          },
          {
            id: 8,
            name: 'Mishran Garam Masala',
            href: '#',
            price: '$48',
            imageSrc: 'products/MishranGaramMasala .png',
            imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
          },
          {
            id: 9,
            name: 'Red Chilli Powder',
            href: '#',
            price: '$48',
            imageSrc: 'products/RedChilliPowder5g.png',
            imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
          },
          {
            id: 10,
            name: 'Sabji Masala',
            href: '#',
            price: '$48',
            imageSrc: 'products/SabjiMasala.png',
            imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
          },
          {
            id: 11,
            name: 'Samosa Masala',
            href: '#',
            price: '$48',
            imageSrc: 'products/SamosaMasala.png',
            imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
          },
          {
            id: 12,
            name: 'Shahi Paneer Masala',
            href: '#',
            price: '$48',
            imageSrc: 'products/ShahiPaneerMasala.png',
            imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
          },
          {
            id: 13,
            name: 'Special Garam Masala',
            href: '#',
            price: '$48',
            imageSrc: 'products/SpecialGaramMasala.png',
            imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
          },
          {
            id: 14,
            name: 'Turmeric Powder',
            href: '#',
            price: '$48',
            imageSrc: 'products/TurmericPowder5g.png',
            imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
          },
        // More products...
      ]

    return (
        <div>
            <div className='w-full bg-black h-[11rem]'>
                <h1 className='text-white absolute text-4xl font-bold top-[7rem] left-[8rem] tracking-wider'>Explore the World of Taste</h1>
            </div>

            <div className='my-10 mb-24 mx-[8rem]'>
                <h1 className='text-4xl font-bold mb-10'>Products</h1>
                <div className="grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-16">
                    {products.map((product) => (
                        <a key={product.id} href={product.href} className="group">
                            <div className="p-5 overflow-hidden h-[275px]">
                                <img
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
                                    className="object-center transition duration-500 group-hover:scale-110 m-auto"
                                    height={400}
                                    width={200}
                                />
                            </div>
                            <h3 className="my-5 tracking-wider text-3xl font-bold text-center group-hover:text-red-600">{product.name}</h3>
                        </a>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default products