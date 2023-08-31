import { useState } from "react";
const PersonCard = (props) => {

    const { fullName, age, hairColor } =props;

    const [birthday, setBirthday ] = useState({
        birthdayCount: age
    })

    const birthdayHandler = () => {
        setBirthday({
            birthdayCount : birthday.birthdayCount + 1 
        })
    }

    return(
        <div>
            <h1 style={{color:"black"}}> {fullName} </h1>
            <p>Age: {birthday.birthdayCount}</p>
            <p>Hair Color: {hairColor}</p>
            
            <button onClick={ birthdayHandler }  >✨🎂✨Birthday Button for 🥳 {fullName} </button>
        </div>
    );
}
export default PersonCard;
