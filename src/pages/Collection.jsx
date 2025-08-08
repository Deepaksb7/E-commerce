import React, { useContext, useEffect } from 'react'
import {ShopContext} from '../context/ShopContext'
import { useState } from 'react'
import { assets } from '../assets/assets'
import Title from '../components/Title'
import Productitem from '../components/Productitem'



const Collection = () => {

  const { products,search , showSearch } = useContext(ShopContext)
  const [showFilter, setshowFilter] = useState(false)
  const [filterProducts, setfilterProducts] = useState([])
  const [category, setcategory] = useState([])
  const [subCategory, setsubCategory] = useState([])
  const [sortType, setsortType] = useState("relavent")

  const toggleCategory = (e)=>{

    if (category.includes(e.target.value)){
      setcategory(prev=>prev.filter(item=>item !== e.target.value))
    }
    else{
      setcategory(prev=>[...prev,e.target.value])
    }

  }

  const togglesubCategory = (e)=>{

    if (subCategory.includes(e.target.value)){
      setsubCategory(prev=>prev.filter(item=>item !== e.target.value))
    }
    else{
      setsubCategory(prev=>[...prev,e.target.value])
    }

  }

  const applyFilter =()=>{

    let productsCopy = products.slice()

    if (showSearch && search){
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if (category.length > 0){
      productsCopy = productsCopy.filter(item=>category.includes(item.category))
    }

    if (subCategory.length > 0){
      productsCopy = productsCopy.filter(item=>subCategory.includes(item.subCategory))
    }
    
    setfilterProducts(productsCopy)
  }

  const sortProduct=()=>{
    let fpCopy = filterProducts.slice();

    switch (sortType){
      case "low-high":
        setfilterProducts(fpCopy.sort((a,b)=>(a.price-b.price)));
        break;

      case "high-low":
        setfilterProducts(fpCopy.sort((a,b)=>(b.price-a.price)));
        break;

      default:
        applyFilter();
        break;
    }
  }

  useEffect(()=>{
    applyFilter()
  },[category,subCategory,search,showSearch])

  useEffect(() => {
    sortProduct()
  }, [sortType])
  

  return (
    <div>

      <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>

        {/* Filter */}
        <div className='min-w-60'>

          <p onClick={()=>setshowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer sm:cursor-none gap-2'>FILTERS
            <img className={`h-3 sm:hidden ${showFilter? "rotate-90":" "}`} src={assets.dropdown_icon} alt="" />
          </p>
          {/* Category */}
          <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter? " " : "hidden"} sm:block`}>
            <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
            <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={"Men"} onClick={toggleCategory}/>Men
              </p>

              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={"Women"} onClick={toggleCategory}/>Women
              </p>

              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={"Kids"} onClick={toggleCategory}/>Kids
              </p>

            </div>

          </div>

          {/* sub Category */}
          <div className={`border border-gray-300 pl-5 py-3 mt-6 my-5 ${showFilter? " " : "hidden"} sm:block`}>
            <p className='mb-3 text-sm font-medium'>TYPE</p>
            <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={"Topwear"} onClick={togglesubCategory}/>Topwear
              </p>

              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={"Bottomwear"} onClick={togglesubCategory}/>Bottomwear
              </p>

              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={"Winterwear"} onClick={togglesubCategory}/>Winterwear
              </p>

            </div>

          </div>

        </div>

      {/* right */}
      <div className='flex-1'>

        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={"ALL"} text2={"COLLECTIONS"}/>
          {/* SORT */}
          <select onChange={(e)=>setsortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
            <option value="relavent">Sort by: Relavent</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/* Print pro */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {
            filterProducts.map((item,index)=>(
              <Productitem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
            ))
          }
        </div>

      </div>
      </div>

      
    </div>
  )
}

export default Collection
