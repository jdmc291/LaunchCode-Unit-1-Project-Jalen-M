
import TeaHouseCloseButton from "./TeaHouseCloseButton";


const PopupCard = (props) => {
// <PopupCard picture={picture} region={region} description={description} 
// brewingMethod={brewingMethod} flavorProfile={flavorProfile}
// } popupSwitch={setPopup} popupStatus={popup}/>
//                <PopupCard popupStatus={popup} changeStatus={setPopup}/> usersCurrentItems={usersCurrentItems} setUsersCurrentItems={setUsersCurrentItems}

    const { popupStatus, changeStatus, numberOfItems, usersCurrentItems } = props;
    
    const orderDetails = usersCurrentItems.map((singleLineItem) =>{
        
        return(
            
            <tr key={singleLineItem.itemNum}>

                <td>
                    {singleLineItem.name}
                </td>

                <td>
                    {singleLineItem.price}
                </td>

                <td>
                    {singleLineItem.quantity}
                </td>

                <td>
                    {singleLineItem.quantity * singleLineItem.price}
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

                        <TeaHouseCloseButton setSwitch={changeStatus} />
                        
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
                    </div>

                </div>
            </>: ""
        }

        </>
    )
}

export default PopupCard