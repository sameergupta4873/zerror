const products = [
    {
      id: 1,
      name: 'Chicken Masala',
      href: 'product/1',
      price: ['₹5'],
      imageSrc: 'products/ChikenMasala.png',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
      bg: '#F29B10',
      ingredients: 'Coriander, Turmeric, Chilli, Poppy Seeds, Black Pepper, Cardamom, Cloves, Mace, Garlic, Cumin Seed, Dry Ginger, Cassia, Onion Powder, Nutmeg, Contains Edible Iodized.',
      size:[10]
    },
    {
      id: 2,
      name: 'Fish Curry Powder',
      href: 'product/2',
      imageSrc: 'products/FishCurryPowder.png',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
      bg: '#EB721E',
      price: ['₹5'],
      ingredients: 'Turmeric, Coriander, Cardamom, Dry Ginger, Cloves, Chilli, Poppy Seeds, Black Pepper, Cumin Seed, Nutmeg, Cassia, Onion Powder, Garlic, Mace, Contains Edible Iodized',
      size:[10]
    },
    {
      id: 3,
      name: 'Coriander Powder',
      href: 'product/3',
      imageSrc: 'products/CorianderPowder5g.png',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
      bg: '#D7B56D',
      price: ['₹5','₹10'],
      ingredients: 'coriander',
      size:[50,100]
    },
    {
      id: 4,
      name: 'Jaljeera Masala',
      href: 'product/4',
      imageSrc: 'products/JaljeeraMasala.png',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
      bg: '#D4E284',
      price: ['₹1'],
      ingredients: 'Common Salt, Jeera, Sonth, Kalimirch, Pudina, Amchur, Citric Acid, Kala Namak & Lalmirch',
      size:[5]
    },
    {
        id: 5,
        name: 'Jeera',
        href: 'product/5',
        imageSrc: 'products/Jeera.png',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
        bg: '#D7B56D',
        price: ['₹10'],
      ingredients: 'Jeera',
      size:[10]
      },
      {
        id: 6,
        name: 'Khatai Powder',
        href: 'product/6',
        imageSrc: 'products/KhataiPowder.png',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
        bg: '#AAC85E',
        price: ['₹10'],
      ingredients: '',
      size:[10]
      },
      {
        id: 7,
        name: 'Meat Masala',
        href: 'product/7',
        imageSrc: 'products/MeatMasala200g.png',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
        bg: '#C56B1F',
        price: ['₹5', '₹100'],
      ingredients: 'Turmeric, Coriander, Chilli, Cardamom, Cumin, Dry Ginger, Bay Leaf, Cinnamon, Salt, Cloves, Nutmeg, Contains Edible Iodized',
      size:[10,200]
      },
      {
        id: 8,
        name: 'Mishran Garam Masala',
        href: 'product/8',
        imageSrc: 'products/MishranGaramMasala .png',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
        bg:'#E4862B',
        price: ['₹5'],
      ingredients: 'Coriander, Turmeric, Chilli, Black Pepper, Dry Mango Powder, Cardamom, Cumin Seed, Dry Ginger, Cassia, Onion Powder, Garlic, Nutmeg, Cloves, Mace, Poppy Seeds, Edible Common Salt not more than 5% by Wight.',
      size:[10]
      },
      {
        id: 9,
        name: 'Red Chilli Powder',
        href: 'product/9',
        imageSrc: 'products/RedChilliPowder5g.png',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
        bg:'#E6612A',
        price: ['₹5','₹10'],
      ingredients: 'Red Chili',
      size:[10,50]
      },
      {
        id: 10,
        name: 'Sabji Masala',
        href: 'product/10',
        imageSrc: 'products/SabjiMasala.png',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
        bg: '#FAC600',
        price: ['₹5', '₹50'],
      ingredients: 'Dry Ginger, Bay Leaf, Coriander, Salt, Cloves, Nutmeg, Chillies, Cardamom, Cumin, Turmeric, Cinnamon, Contains Edible Iodized',
      size:[10,200]
      },
      {
        id: 11,
        name: 'Samosa Masala',
        href: 'product/11',
        imageSrc: 'products/SamosaMasala.png',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
        bg: '#F49E4C',
        price: ['₹20'],
      ingredients: 'Coriander Powder, Chilli Powder, Ratan Jyot, Cinnamom, Mango Powder, Garlic Powder, Black, Pepper, Black Cardamom, Nutmeg, Mace, Cubeg, Clove, Tipper, Anar Dana, Cumin, Dry Ginger Powder.',
      size:[50]
      },
      {
        id: 12,
        name: 'Shahi Paneer Masala',
        href: 'product/12',
        imageSrc: 'products/ShahiPaneerMasala.png',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
        bg:'#D57523',
        price: ['₹5'],
      ingredients: 'Coriander, Turmeric, Chilli, Black Pepper, Cardamom, Cumin Seed, Dry Ginger, Cassia, Onion Powder, Garlic, Nutmeg, Cloves, Mace, Poppy Seeds',
      size:[10]
      },
      {
        id: 13,
        name: 'Special Garam Masala',
        href: 'product/13',
        imageSrc: 'products/SpecialGaramMasala.png',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
        bg:'#B67C67',
        price: ['₹5'],
      ingredients: 'Coriander, Turmeric, Chilli, Black Pepper, Dry Mango Powder, Cardamom, Cumin Seed, Dry Ginger, Cassia, Onion Powder, Garlic, Nutmeg, Cloves, Mace, Poppy Seeds, Edible Common Salt not more than 5% by Wight.',
      size:[10]
      },
      {
        id: 14,
        name: 'Turmeric Powder',
        href: 'product/14',
        imageSrc: 'products/TurmericPowder5g.png',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
        bg:'#FABD32',
        price: ['₹5','₹10'],
      ingredients: 'Turmeric, Coriander, Cardamom, Dry Ginger, Cloves, Chilli, Poppy Seeds, Black Pepper, Cumin Seed, Nutmeg, Cassia, Onion Powder, Garlic, Mace, Contains Edible Iodized',
      size:[50,100]
      },
    // More products...
  ]

export default products