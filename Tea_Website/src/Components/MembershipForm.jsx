import { useState } from "react";
import TeaHouseCloseButton from "./TeaHouseCloseButton";

const MembershipForm = (props) => {

    const { state, setState } = props;

    const [firstName, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [submitMessage, setSubmitMessage] = useState("");

    //Form Submitted Successfully. Check your email's inbox &#9989;

    const handleSubmission = (e) => {
        
        //Prevents the form from going away on submit
        e.preventDefault();

        let submittedEmail = email;

        // This will check if their inputs meet what is required


        if (firstName.length < 3 || lastname.length < 3) {
            console.log("hoory");
            setSubmitMessage("Error on Form. Please Make First and Last Name Longer");
        } else if (!submittedEmail.includes("@gmail.com") && !submittedEmail.includes("@icloud.com") && !submittedEmail.includes("@yahoo.com")) {

            setSubmitMessage("Error on Form. Please enter iCloud, GMail, or Yahoo email");

        } else {

            setSubmitMessage(`Form Submitted Successfully. Check your email's inbox`)
        }
    }

    //tracking what the user puts in the values

    const handleFirstNameChange = (e) => {
        let currentFirstName = e.target.value.toLowerCase();
        
        setFirstName(currentFirstName);

    }

    const handleLastNameChange = (e) => {
        setLastName(e.target.value.toLowerCase());
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value.toLowerCase());
    }

    const handleAddressChange = (e) => {
        setAddress(e.target.value.toLowerCase());
    }

    return (
        <>
            {
                state ?

                    <div id="membership-area">
                        <div id="membership-form">
                            <>
                                <TeaHouseCloseButton setSwitch={setState} id="member-close-button" />

                                <h1 id="become-member-title">Member Registration</h1>
                                <div id="content-box">
                                    <div id="member-registration-area">
                                        <form id="form-element" onSubmit={(e) => handleSubmission(e)} >
                                            <label className="member-labels" id="sign-up-firstName-label" htmlFor="sign-up-firstName" >First Name: </label>
                                            <input className="member-input" id="sign-up-firstName" type="text" placeholder="John" required onChange={(e) => handleFirstNameChange(e)} />
                                            <br></br>

                                            <label className="member-labels" htmlFor="sign-up-lastName">Last Name: </label>
                                            <input className="member-input" id="sign-up-lastName" type="text" placeholder="Smith" required onChange={(e) => handleLastNameChange(e)} />

                                            <br></br>
                                            <label className="member-labels" htmlFor="sign-up-email">Email: </label>
                                            <input className="member-input" id="sign-up-email" type="email" placeholder="theteahouse@company.com" required onChange={(e) => handleEmailChange(e)} />
                                            <br></br>

                                            <label className="member-labels" htmlFor="sign-up-address">Address: </label>
                                            <input className="member-input" id="sign-up-address" type="text" placeholder="123 The Teahouse St." required onChange={(e) => handleAddressChange(e)} />

                                            <br></br>
                                            <br></br>

                                            <input type="submit" id="form-submit-button" className="teahouse-close-button"></input>

                                            <br></br>

                                            {submitMessage}

                                        </form>

                                    </div>

                                    <div id="premium-advertisement">
                                        <p className="member-registration-deals">&#10024; Receive 2 Tea Packets Monthly &#10024;</p>
                                        <br></br>
                                        <p className="member-registration-deals">&#10024; Get Access To Our Extravagant Restaurant Locations Around the World And Bring Up to 3 Friends &#10024;</p>
                                        <br></br>
                                        <p className="member-registration-deals">&#10024; Get 2-Day Delivery on Tea Packet Orders &#10024;</p>
                                        <br></br>
                                        <p className="member-registration-deals">&#10024; Get Premium Deals on Ordered Tea Packets &#10024;</p>
                                    </div>
                                </div>
                            </>
                        </div>
                    </div> : ""

            }
        </>
    )
}

export default MembershipForm