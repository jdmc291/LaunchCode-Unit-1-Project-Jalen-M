
import TeaHouseCloseButton from "./TeaHouseCloseButton";


const PopupCard = (props) => {


    const { popupStatus, changeStatus, numberOfItems, setNumberOfItems, usersCurrentItems, setUsersCurrentItems } = props;

    let userTotal = 0;

    // When the user clicks on the reset button, the array of their current items will be reset to null

    const handleReset = () => {

        let resetArray = [];
        let resetCount;

        setUsersCurrentItems(resetArray);
        setNumberOfItems(resetCount);
    }

    const orderDetails = usersCurrentItems.map((singleLineItem) =>{

        
        userTotal += singleLineItem.quantity * singleLineItem.price;
        
        return(
            
            <tr key={singleLineItem.itemNum}>

                <td>
                    {singleLineItem.name}
                </td>

                <td>
                    ${singleLineItem.price}
                </td>

                <td>
                    {singleLineItem.quantity}
                </td>

                <td>
                    ${singleLineItem.quantity * singleLineItem.price}
                </td>

            </tr>

        )
    })

    return(
        <>
        {popupStatus? 
            <>
                <div className="popup">

                    <div className="popup-card">

                        <TeaHouseCloseButton id="shopping-cart-close-button" setSwitch={changeStatus} />
                        
                            <p className="popup-content">
                                Total Item(s) Selected: {numberOfItems}    
                            </p>
                            <table className="popup-table">
                                <tbody>
                                <tr>
                                    <th>
                                        Product
                                    </th>
                                    <th>
                                        Price
                                    </th>
                                    <th>
                                        Quantity
                                    </th>
                                    <th>
                                        Subtotal
                                    </th>
                                </tr>

                                {orderDetails}
                                
                                </tbody>
                            </table>
                            <br></br>
<p style={{fontWeight: "bold", fontSize: "2rem"}}> Total: ${userTotal}</p>
                        <button id="shop-reset-button"className="teahouse-close-button" onClick={() => handleReset()}>RESET</button>  
                    </div>

                </div>
            </>: ""
        }

        </>
    )
}

export default PopupCard