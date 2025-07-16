import { useState } from "react";
import PopupCard from "./PopupCard";

const ProductCard = (props) => {
    // <ProductCard id={item.id} name={item.name} price={item.price} description = {item.description} picture = {item.image_url} region={item.region} steepLevel={item.steep_level} weight={item.weight} brewingMethod={item.brewing_method} flavorProfile={item.flavor_profile}
    const { id, name, price, description, picture, setCounter, counter, usersCurrentItems, setUsersCurrentItems } = props;

    const ToggleCartAddition = () => {
        let productExists = false;
        let totalItems = 0;
        let lineNumber;
        let myArray = [];
        



        for (let lineItem = 0; lineItem < usersCurrentItems.length; lineItem++) {

            if (usersCurrentItems[lineItem].name === name) {
                productExists = true;
                lineNumber = lineItem;
            }
        }

        if (productExists === true) {
            myArray = usersCurrentItems;
            myArray[lineNumber].quantity = myArray[lineNumber].quantity + 1;
            setUsersCurrentItems(myArray);
        }

        else {

            myArray = [...usersCurrentItems,
            {
                itemNum: id,
                name: name,
                quantity: 1,
                price: price
            }
            ]

            setUsersCurrentItems(myArray);

        }

        for (let teaProduct of myArray)
        {
            totalItems += teaProduct?.quantity
        }

        console.log(totalItems);
        setCounter(totalItems);

    }

    return (

        <div className="product-card" onClick={() => ToggleCartAddition()}>
            <div className="product-card-picture-area">
                <img className="source-picture" src={picture} />
            </div>

            <div className="product-card-description">
                <p className="name-of-tea">{`${name}: $${price}`}</p>

                <p className="more-tea-info">{description}</p>
            </div>
            <div>
                {usersCurrentItems[0]?.mame}
            </div>
        </div>


    )
}

export default ProductCard