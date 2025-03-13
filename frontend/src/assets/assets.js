import logo from './logo.png'

import basket from './basket.png'

import menu_1 from './menu_1.jpg'
import menu_2 from './menu_2.jpg'
import menu_3 from './menu_3.png'
import menu_4 from './menu_4.jpg'
import menu_5 from './menu_5.png'
import menu_6 from './menu_6.png'
import beef from './beef.png'
import pork from './pork.png'

export const assets = {
    logo,
    basket,
}

export const menu_list = [
    {
        menu_name: "Beef",
        menu_image: beef
    },
    {
        menu_name: "Pork",
        menu_image: pork
    },
]

export const food_list = [
    {
        _id: "1",
        name: "Classic Beef Burger",
        image: menu_1,
        price: 100,
        description: "A delicious, hearty burger with a tender beef patty, fresh lettuce, tomatoes, melted cheese, and a toasted bun",
        category: "Beef"
    },
    {
        _id: "2",
        menu_name: "Double Stack Burger",
        menu_image: menu_2,
        price: 150,
        description: "Double the beef, double the flavor! Two juicy beef patties, melted cheese, fresh veggies, and a toasted bun",
        category: "Beef"
    },
    {
        _id: "3",
        menu_name: "Cheesy Beef Delight ",
        menu_image: menu_3,
        price: 140,
        description: "A juicy beef patty, loaded with melted cheese, fresh veggies, and a toasted bun for a truly cheesy",
        category: "Beef"
    },
    {
        _id: "4",
        menu_name: "Classic Pork Burger",
        menu_image: menu_4,
        price: 130,
        description: "A juicy grilled pork patty, fresh veggies, and a creamy sauce in a toasted bun. A simple and satisfying classic",
        category: "Pork"
    },
    {
        _id: "5",
        menu_name: "Teriyaki Pork Burger",
        menu_image: menu_5,
        price: 120,
        description: "Tender pork patty glazed with sweet teriyaki sauce, fresh veggies, and mayo, all in a toasted bun – a savory-sweet delight",
        category: "Pork"
    },
    {
        _id: "6",
        menu_name: "Crispy Bacon Pork Burger",
        menu_image: menu_6,
        price: 160,
        description: "Juicy pork patty with crispy bacon, fresh veggies, and creamy sauce – a smoky, crispy burger indulgence",
        category: "Pork"
    },
]