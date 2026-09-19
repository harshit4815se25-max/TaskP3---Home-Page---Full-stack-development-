import TutorialCard from "./TutorialCard";

function Tutorials() {
    const tutorials = [
        {
            id: 1,
            title: "React Tutorial",
            description: "Learn the basic concepts of React.",
            technology: "e.g., JavaScript",
            rating: "5",
            username: "username",
            image: "/images/tutorial1.jpg"
        },
        {
            id: 2,
            title: "React Router Tutorial",
            description: "Learn how routing works in React applications.",
            technology: "e.g., React Router",
            rating: "5",
            username: "username",
            image: "/images/tutorial2.jpg"
        },
        {
            id: 3,
            title: "Express Tutorial",
            description: "Learn the basics of Express for web applications.",
            technology: "e.g., Express",
            rating: "4.9",
            username: "username",
            image: "/images/tutorial3.jpg"
        }
    ];

    return (
        <section className="tutorials-section" id="tutorials">

            <h2>Featured Tutorials</h2>

            <div className="tutorials-container">

                {tutorials.map((tutorial) => (
                    <TutorialCard
                        key={tutorial.id}
                        tutorial={tutorial}
                    />
                ))}

            </div>

            <button className="see-all-button">
                See all tutorials
            </button>

        </section>
    );
}

export default Tutorials;