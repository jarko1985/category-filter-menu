import { useState } from "react";
import Title from "../src/components/Title";
import menu from './data';
import Menu from "./components/Menu";
import Categories from "./components/Categories";


//Three steps to filter categories 
// const tempCategories = menu.map(item=>item.category);
// const tempSet = new Set(tempCategories)
// const tempItems = ['all',...tempSet];

//One Liner to filter categories
const allCategories = ['all',...new Set(menu.map(item=>item.category))]

const App = () => {
  const [items,setItems] = useState(menu);
  const [categories,setCategories] = useState(allCategories);
  const handleFilter = (category) =>{
    if(category === 'all'){
      setItems(menu);
      return;
    }
    const newItems = menu.filter(item=>item.category === category);
    setItems(newItems);
  }
  return (
    <main>
      <section className="menu">
        <Title text='Our Menu' />
        <Categories categories={categories} handleFilter={handleFilter}/>
        <Menu items={items}/>

      </section>
    </main>
  );
};
export default App;
