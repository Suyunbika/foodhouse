import './Category.css';

const Category = ({ onChangeSelectedCategory, category }) => {
    return (
        <div className="category" onClick={() => onChangeSelectedCategory(category.type)}>
            <img className='category-img' src={category.url} alt={category.text}/>
            <h2 className="category-text">{category.text}</h2>
        </div>
    )
};

export default Category;