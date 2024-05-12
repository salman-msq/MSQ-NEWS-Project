import image from '../assets/news.jpeg';
//Component to display card of the NEWS
const NewsItems = ({ title, source, date, src, url }) => {
    return (
        <div className="card bg-primary text-light mb-3 d-inline-block my-3 mx-3" style={{ maxWidth: "270px", }}>
            <img src={src ? src : image} style={{ height: "200px", width: "268.4px" }} className="card-img-top border-0" alt="..." />
            <div className="card-body px-2 py-2">
                <h5 className="card-title">{title.slice(0, 60)}</h5>
                <p className="card-text mb-1"><span>Source: </span>{source}</p>
                <p className="card-text mb-2"><span>Publication Date: </span>{new Date(date).toDateString()}</p>
                <a href={url} className="btn btn-dark d-grid justify-content-center container">Read More</a>
            </div>
        </div>
    )
}

export default NewsItems
