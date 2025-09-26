
import ReactMarkdown from "react-markdown"; // to organize the ai output
export default function Recipe(props) {
    return (
        <section 
            className="suggested-recipe-container"
            aria-live="polite"
        >
            <h2>Chef Claude recommends:</h2>
            <ReactMarkdown>
                {props.recipe}
            </ReactMarkdown>
        </section>
    );
}