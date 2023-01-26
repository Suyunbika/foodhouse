import './Category.css';

const Category = ({ url, text }) => {
    return (
        <div className="category">
            <img src={url} alt={text}/>
            <h2 className="category-text">{text}</h2>
        </div>
    )
};

export default Category;