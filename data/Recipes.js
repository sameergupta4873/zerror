const recipe = [
    {
        id: 1,
        name: 'Samosa Chaat',
        description: 'Samosa chaat is a popular Indian street food made with crispy samosas topped with yogurt, chutneys, and a variety of spices. Its a delicious and satisfying snack thats perfect for any time of day.',
        image: 'https://media.istockphoto.com/id/1398143984/photo/curd-samosa-chaat.jpg?s=612x612&w=0&k=20&c=LmAELbtwDN_Y7ClhO75E-nQpGNFcNKVV11fTAbf85l4=',
        image2: 'https://media.istockphoto.com/id/1397944543/photo/curd-samosa-chaat.jpg?s=612x612&w=0&k=20&c=stR6G94OpoCbK8J2ZmN2MK871vrtSRhP09DC1LFoJxE=',
        ingredients: [
            "6 samosas, cut in half",
            "1 cup chickpeas, boiled",
            "1 onion, chopped",
            "2 tomatoes, chopped",
            "1/2 cup yogurt",
            "1/4 cup tamarind chutney",
            "1/4 cup mint chutney",
            "1/4 cup sev",
            "1/4 cup chopped coriander leaves"
        ],
        instructions: [
            "Arrange the samosas on a serving plate.",
            "Top with boiled chickpeas, chopped onions, and tomatoes.",
            "Drizzle with yogurt, tamarind chutney, and mint chutney.",
            "Sprinkle with sev and chopped coriander leaves.",
            "Serve immediately."
        ]
    },
    {
        id: 2,
        name: 'Chicken Biryani',
        image: '/recipes/chickenBiryani.jpg',
        image2: 'https://media.istockphoto.com/id/1305452646/photo/biryani.jpg?b=1&s=170667a&w=0&k=20&c=X_pTmJ71KWqnUWqCAU15labShH3FxGjnHsnLRnXhJoo=',
        description: 'Chicken biryani is a classic South Asian dish made with fragrant basmati rice, tender chicken, and a blend of aromatic spices. Its often garnished with fried onions, cilantro, and lemon juice, and is a flavorful and filling meal.',
        ingredients: [
            "500g chicken",
            "2 cups basmati rice",
            "2 onions, sliced",
            "4 cloves garlic, minced",
            "1 inch ginger, minced",
            "1 tomato, chopped",
            "1/2 cup yogurt",
            "2 green chilies, chopped",
            "1/2 cup mint leaves, chopped",
            "1/2 cup coriander leaves, chopped",
            "1/4 cup ghee",
            "2 tablespoons oil",
            "1 bay leaf",
            "1 inch cinnamon stick",
            "3 cardamom pods",
            "3 cloves",
            "salt, to taste",
            "4 cups water"
        ],
        instructions: [
            "Rinse the basmati rice in cold water until the water runs clear. Soak the rice in water for 30 minutes and then drain.",
            "Heat ghee and oil in a large pot. Add sliced onions and fry until they turn golden brown.",
            "Add minced garlic and ginger to the pot and fry for another minute.",
            "Add chopped tomato, green chili, and yogurt to the pot. Cook for a few minutes until the tomato is soft.",
            "Add chopped mint leaves, coriander leaves, bay leaf, cinnamon stick, cardamom pods, and cloves to the pot. Fry for a minute or two until the spices are fragrant.",
            "Add the chicken to the pot and stir well to coat it with the spices. Cook for 5-7 minutes until the chicken is browned on all sides.",
            "Add the drained basmati rice to the pot and stir well to combine with the chicken and spices.",
            "Add 4 cups of water and salt to taste to the pot. Bring the mixture to a boil.",
            "Once the water is boiling, cover the pot and reduce the heat to low. Cook for 15-20 minutes until the rice is fully cooked and the water has been absorbed.",
            "Turn off the heat and let the biryani rest for 10 minutes before serving. Fluff the rice with a fork and garnish with additional coriander leaves and fried onions, if desired."
        ]
    },
    {
        id: 3,
        name: 'Butter Chicken',
        image:'/recipes/butterChicken.jpg',
        image2: 'https://assets.vogue.in/photos/5efdf623800c753aed1a4acd/16:9/pass/chicken%20curry%20recipe%20homestyle%20chicken%20curry%20recipe%20easy%20recipes%20to%20make%20at%20home%20chicken%20and%20rice.jpg',
        description: 'Butter chicken, also known as murgh makhani, is a creamy and savory North Indian dish made with marinated chicken cooked in a tomato-based gravy with plenty of butter and cream. Its a popular dish thats often served with rice or naan bread.',
        ingredients: [
            "500g boneless chicken",
            "1 cup yogurt",
            "1 onion, chopped",
            "2 tomatoes, chopped",
            "2 tablespoons ginger-garlic paste",
            "1/2 cup cream",
            "1/4 cup butter",
            "1 tablespoon oil",
            "1 teaspoon cumin seeds",
            "1 bay leaf",
            "1 cinnamon stick",
            "2 cloves",
            "1/2 teaspoon red chili powder",
            "1/2 teaspoon turmeric powder",
            "1 teaspoon coriander powder",
            "1/2 teaspoon garam masala",
            "salt, to taste"
        ],
        instructions: [
            "Marinate the chicken in yogurt and salt for at least 1 hour.",
            "Heat oil and butter in a pan. Add cumin seeds, bay leaf, cinnamon stick, and cloves. Fry for a minute or two until fragrant.",
            "Add chopped onions and fry until they turn golden brown.",
            "Add ginger-garlic paste and fry for another minute.",
            "Add chopped tomatoes and fry until the oil separates.",
            "Add red chili powder, turmeric powder, coriander powder, and garam masala. Fry for a minute or two.",
            "Add the marinated chicken and fry until the chicken is cooked through.",
            "Add cream and simmer for a few minutes until the sauce thickens.",
            "Serve hot with naan or rice."
        ]
    },
    {
        id: 4,
        name: 'Gulab Jamun',
        image: 'https://media.istockphoto.com/id/1340664725/photo/gulab-jamun.jpg?b=1&s=170667a&w=0&k=20&c=N8LafRHL7p-Uo-4jQDg6HN1Co2-GObgHTGIL16PexI4=',
        image2: 'https://t3.ftcdn.net/jpg/02/29/77/48/360_F_229774860_pFaHhBRb1AgsWAT3Gw7AZ8iAIseOnKTS.webp',
        description: 'Gulab jamun is a sweet dessert made with fried dough balls soaked in a sugary syrup flavored with cardamom and rose water. Its a popular dessert in India and is often served at special occasions like weddings and festivals.',
        ingredients: [
            "1 cup milk powder",
            "1/4 cup all-purpose flour",
            "1/4 teaspoon baking soda",
            "1/4 cup ghee",
            "1/4 cup milk, or as needed",
            "1 cup sugar",
            "1/2 cup water",
            "1/2 teaspoon cardamom powder"
        ],
        instructions: [
            "In a mixing bowl, combine milk powder, all-purpose flour, and baking soda.",
            "Add ghee and mix well.",
            "Gradually add milk, a little at a time, and mix to form a soft dough.",
            "Cover the dough and let it rest for 10-15 minutes.",
            "In a separate pot, combine sugar, water, and cardamom powder.",
            "Bring the mixture to a boil and then reduce the heat to low.",
            "Simmer for 5-7 minutes until the syrup thickens.",
            "Shape the dough into small balls and fry in hot oil over medium heat until golden brown.",
            "Remove the fried balls from the oil and drain on a paper towel.",
            "Add the fried balls to the sugar syrup and let them soak for at least 30 minutes before serving."
        ]
    }
]

export default recipe