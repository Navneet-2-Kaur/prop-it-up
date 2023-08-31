const PersonCard = (props) => {
    const { fullName, age, hairColor } =props;
    return(
        <div>
            <h1 style={{color:"black"}}> {fullName} </h1>
            <p>Age: {age}</p>
            <p>Hair Color: {hairColor}</p>
        </div>
    );
}
export default PersonCard;
