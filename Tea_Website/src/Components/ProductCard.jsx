
const ProductCard = (props) => {
    const { uniqueId, name, price, description, picture, setCounter, usersCurrentItems, setUsersCurrentItems } = props;

    const ToggleCartAddition = () => {

        //This first checks if the item is already in the cart, if it is, it only adds the quantity up 1
        // if it does not exist, it creates a new list with the new item in the array and replaces what is...
        //... currently in the useState



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

            //itemNum is for mapping for the popupCard's table element

            myArray = [...usersCurrentItems,
            {
                itemNum: uniqueId, 
                name: name,
                quantity: 1,
                price: price
            }
            ]

            setUsersCurrentItems(myArray);

        }

        for (let teaProduct of myArray)
        {
            //There will be times where the quantity will be null. 
            // This will be displayed on the ShoppingPage next to the cart Icon

            totalItems += teaProduct?.quantity
        }

        setCounter(totalItems);

    }
// id={item.id}
    return (

        <div className=" product-card" onClick={() => ToggleCartAddition()}>
            <div  className="product-card-picture-area">
                <img className="source-picture" src={picture} alt={name} />
            </div>

            <div className="product-card-description">
                <p className="name-of-tea">{`${name}: $${price}`}</p>

                <p className="more-tea-info">{description}</p>
            </div>

        </div>


    )
}

export default ProductCard