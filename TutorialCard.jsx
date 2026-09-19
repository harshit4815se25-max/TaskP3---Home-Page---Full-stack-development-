function TutorialCard({ tutorial }) {
    return (
        <article className="tutorial-card">

            <img
                src={tutorial.image}
                alt={tutorial.title}
                className="tutorial-image"
            />

            <h3>{tutorial.title}</h3>

            <p className="tutorial-description">
                {tutorial.description}
            </p>

            <p className="tutorial-technology">
                {tutorial.technology}
            </p>

            <div className="tutorial-info">

                <span className="rating">
                    ⭐ {tutorial.rating}
                </span>

                <span className="username">
                    {tutorial.username}
                </span>

            </div>

        </article>
    );
}

export default TutorialCard;