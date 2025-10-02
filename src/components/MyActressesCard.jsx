const MyActressesCard = (props) => {

    const {actress} = props;

    return (
        <div className="actressCard">
            <div className="actressImage">
                <img src={actress.image} alt={actress.name} />
            </div>
            <div className="actressInfo">
                <p className="actressName">{actress.name}</p>
                <p className="actressBirth">{actress.birth_year}</p>
                <p className="actressNationality">{actress.nationality}</p>
                <p className="actressBio">{actress.biography}</p>
                <p className="actressAwards">{actress.awards}</p>
            </div>
        </div>
    )
}

export default MyActressesCard;