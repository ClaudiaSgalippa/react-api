const MyActressesCard = (props) => {

    const {actress} = props;

    return (
        <div className="actCard">
            <div className="actImage">
                <img src={actress.image} alt={actress.name} />
            </div>
            <div className="actInfo">
                <p className="actName">{actress.name}</p>
                <p className="actBirth">{actress.birth_year}</p>
                <p className="actNationality">{actress.nationality}</p>
                <p className="actBio">{actress.biography}</p>
                <p className="actAwards">{actress.awards}</p>
            </div>
        </div>
    )
}

export default MyActressesCard;