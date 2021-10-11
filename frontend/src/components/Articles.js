import React, { useEffect, useState } from "react";

function Articles(){
    const[articles, setArticles] = useState([{
        _id: '',
        title: '',
        author: '',
        source: '',
        year: '',
        doi: '',
        SE_practice: ''
    }])

    useEffect(() => {
        fetch("/articles").then(res => {
            if(res.ok) {
                return res.json()
            }
        }).then(jsonRes => setArticles(jsonRes));
    })

}

export default Articles;