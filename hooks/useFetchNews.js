import { useEffect, useState } from "react";
import axios from "axios";

const useFetchNews = () => {
    const [news, setNews] = useState([]);

    useEffect(() => { 
        const results = {
            method: 'GET',
            url: 'https://crypto-news-live3.p.rapidapi.com/news',
            headers: {
                'X-RapidAPI-Key': 'e23fcb3be8msh1c0ed783cf62ab4p1003a0jsn6f142ec40a21',
                'X-RapidAPI-Host': 'crypto-news-live3.p.rapidapi.com'
            }
        };

        axios.request(results).then(function (response) {
            setNews(response.data);
            console.log(response.data);
        }).catch(function (error) {
            console.error(error); 
        });
    }, []);

    return {
        news
    }
};

export default useFetchNews;