const TeaHouseCloseButton = (props) => {

    const {setSwitch, id} = props;
    const HandleClose = () => {
        // The purpose of the closeButton Component is for the user to give a Boolean useState and set it to False...
        // ... It will be used ideally to close popups
         
        setSwitch(false);
    }

    return (
        <button id={id} className="teahouse-close-button" onClick={() => HandleClose()}>
            X
        </button>
    )
}

export default TeaHouseCloseButton