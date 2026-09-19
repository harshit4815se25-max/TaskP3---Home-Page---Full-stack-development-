function ArticleCard({ title, description, category, image }) {
    return (
        <article className="article-card">

            <div className="article-image">
                <img src={image} alt={title} />
            </div>

            <div className="article-content">

                <span className="article-category">
                    {category}
                </span>

                <h3>{title}</h3>

                <p>{description}</p>

                <button className="read-button">
                    Read More
                </button>

            </div>

        </article>
    );
}

export default ArticleCard;