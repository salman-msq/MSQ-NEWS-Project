import { useEffect, useState } from 'react'
import NewsItems from './NewsItems';

//Component to display NEWS
const NewsBoard = ({ category }) => {
    //To store the all articles
    const [articles, setArticles] = useState([]);

    //Fetch the API
    useEffect(() => {
        let url = "";

        //If category is general or the page is HOME page then display only 10 headlines
        if (category === 'general') {
            url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&pageSize=${10}&apiKey=${import.meta.env.VITE_API_KEY}`;
        } else {
            url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&pageSize=100&apiKey=${import.meta.env.VITE_API_KEY}`;
        }

        //If the API is fetched successfully then store the articles in the articles otherwise display the error message
        fetch(url).then(res => res.json()).then(data => setArticles(data.articles)).catch(err => alert('Failed to load data'));
    }, [category]);

    return (
        <>
            <div>
                <h2 className='text-center p-4 pb-2'>{category === 'general' ? "Latest" : category.charAt(0).toUpperCase() + category.substring(1)} <span className='badge bg-danger'>Headlines</span></h2>

                {articles && articles.map((news, index) => {
                    return <NewsItems key={index} title={news.title} source={news.source.name} date={news.publishedAt} src={news.urlToImage} url={news.url} />
                })}
            </div>
        </>
    )
}

export default NewsBoard;
