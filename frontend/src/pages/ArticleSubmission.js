import React from "react";
import SubmitArticle from "../components/SubmitArticle";

const SubmitArticleTo = () => {
    return(
        <div>
            <h2>Submit Article</h2>
            <p>This will be a form to allow submitters to submit an article for possible inclusion
                in our SERPER repo.
            </p>
            <SubmitArticle/>
        </div>
    )
}

export default SubmitArticleTo;