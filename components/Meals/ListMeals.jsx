import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ItemProduct from './ItemMeal';

const imageMap = {
    pancake: require('@/assets/images/homepage/pancake.jpeg'),
    ber: require('@/assets/images/homepage/ber.jpeg'),
    chip: require('@/assets/images/homepage/chip.jpeg'),
    egg: require('@/assets/images/homepage/egg.webp'),
};

export const DUMMY_DATA = [{
    "id": "01HST7Z4GF9DB07QPN9TN1FP9J",
    "title": "Fried egg is easy.",
    "image": "egg",
    "vote": "(4.0)",
    "time": "15 min",
    "level": "Easy",
    "cook": 'step 1:,,,',
    "video": "-W1dpRkthrI"
}, {
    "id": "01HST7Z4GH9X0GXV7P4VG1CM3D",
    "title": "Hamburger with cheese ...",
    "image": "ber",
    "vote": "(3.5)",
    "time": "15 min",
    "level": "Midle",
    "ingredient": [
        '1. 1/2 pounds ground beef (80% to 85% lean) \n',
        '2. Kosher salt \n',
        '3. Freshly ground black pepper \n',
        '4. 4 to 6 hamburger buns, split \n',
        '5. Butter or oil, for the pan \n',
        '6. 4 to 6 slices cheese, such as cheddar, swiss, American, or provolone (optional)\n',
        '7. Burger toppings: sliced tomatoes, sliced onions, lettuce, ketchup, mustard, BBQ sauce, pickles, relish \n',
    ],
    "ingredientFontSize": 13,
    "ingredientfontWeight": 400,
    "cook": ["Season beef with salt and pepper, form into patties.\n",
        "Cook patties in butter/oil over medium-high heat for 3-4 mins per side.\n",
        "Add cheese on top during last minute of cooking (optional).\n",
        "Toast buns until golden brown.\n",
        "Assemble burgers with desired toppings.\n",
        "Add your desired toppings such as sliced tomatoes, onions, lettuce, pickles,or BBQ sauce.\n",
        "Serve hot and enjoy!\n",
    ],
    "video": "BIG1h2vG-Qg"

}, {
    "id": "01HST7Z4GJARA8Y7AHR1MFMD81",
    "title": "Honey pancakes with...",
    "image": "pancake",
    "vote": ("4.0"),
    "time": "15 min",
    "level": "Hard",
    "cook": 'step 1:,,,',
    "video": "vkcHmpKxFwg"

}, {
    "id": "01HST7Z4GK5T8V9WP720WVFM2J",
    "title": "Administrative Assistant IV",
    "image": "chip",
    "vote": 4,
    "time": "15 min",
    "level": "Easy",
    "cook": 'step 1:,,,',
    "video": "FvKuG1SggGk"

}, {
    "id": "01HST7Z4GMHDBAT3W2R978V5M9",
    "title": "Pharmacist",
    "image": "egg",
    "vote": 1,
    "time": "15 min",
    "level": "Easy",
    "cook": 'step 1:,,,'

}];

export default function ListMeals() {
    return (
        <FlatList
            horizontal={true}
            data={DUMMY_DATA}
            renderItem={({ item }) => <ItemProduct {...item} image={imageMap[item.image]} />}
            keyExtractor={item => item.id}
        />
    );
}

const styles = StyleSheet.create({});
