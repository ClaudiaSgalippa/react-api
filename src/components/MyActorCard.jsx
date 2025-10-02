const MyActorCard = (props) => {

    const {actor} = props;

    return (
        <div className="actCard">
            <div className="actImage">
                <img src={actor.image} alt={actor.name} />
            </div>
            <div className="actInfo">
                <p className="actName">{actor.name}</p>
                <p className="actBirth">{actor.birth_year}</p>
                <p className="actNationality">{actor.nationality}</p>
                <p className="actBio">{actor.biography}</p>
                <p className="actAwards">{actor.awards}</p>
            </div>
        </div>
    )
}

export default MyActorCard;