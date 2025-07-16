const TeaHouseCloseButton = (props) => {

    const {setSwitch} = props;
    const HandleClose = () => {

        setSwitch(false);
    }

    return (
        <button className="teahouse-close-button" onClick={() => HandleClose()}>
            X
        </button>
    )
}

export default TeaHouseCloseButton