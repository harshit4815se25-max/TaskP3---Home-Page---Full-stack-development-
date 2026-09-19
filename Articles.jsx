import ArticleCard from "./ArticleCard";

function Articles() {

    const articles = [
        {
            id: 1,
            title: "Getting Started with React",
            description:
                "Learn the basic concepts of React and how components help you build modern web applications.",
            category: "React",
            image: "/images/react.jpg"
        },
        {
            id: 2,
            title: "Introduction to JavaScript",
            description:
                "Understand the fundamentals of JavaScript and how it is used to create interactive websites.",
            category: "JavaScript",
            image: "/images/javascript.jpg"
        },
        {
            id: 3,
            title: "Web Development Basics",
            description:
                "Explore HTML, CSS and JavaScript and learn how these technologies work together.",
            category: "Web Development",
            image: "/images/web.jpg"
        }
    ];

    return (
        <section className="articles-section" id="articles">

            <div className="section-heading">
                <h2>Featured Articles</h2>

                <p>
                    Explore articles created by the DEV@Deakin community.
                </p>
            </div>

            <div className="articles-container">

                {articles.map((article) => (
                    <ArticleCard
                        key={article.id}
                        title={article.title}
                        description={article.description}
                        category={article.category}
                        image={article.image}
                    />
                ))}

            </div>

        </section>
    );
}

export default Articles;