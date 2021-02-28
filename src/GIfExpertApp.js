import React,{useState} from 'react'
import ReactDOM from 'react-dom'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'


export default function GIfExpertApp() {

    //const categories = ['One Punch','Samurai X','Dragon Ball'];
    const [categories,setCategories] = useState(['One Punch'])

    // const handleAdd = () => {
    //     let category = 'Rudolf';

    //     setCategories(c => [...c,category]);
    // }

    return (
        <>
            <h2>GIfExpertApp</h2>
                <AddCategory setCategories={setCategories}/>
            <hr/>

            <button >Agregar</button>
            <ol>
                {
                    categories.map((category,index) => (
                        <GifGrid 
                            key={category}
                            category={category}/>
                    ))
                }
            </ol>
        </>
    )
}
