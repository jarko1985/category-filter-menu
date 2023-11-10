const Categories = ({ categories,handleFilter }) => {
  return (
    <div className="btn-container">
      {categories.map((cat) => (
        <button 
        type="button" 
        className="btn" 
        key={cat}
        onClick={()=>handleFilter(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};
export default Categories;
