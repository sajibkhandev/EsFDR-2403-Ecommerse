import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import Cart from '../components/Cart'
import Product from '../assets/product.png'
import Data from '../data.js'

import axios from 'axios'




function Items({ currentItems }) {
  return (
    <>
      <div className='flex gap-x-[45px] flex-wrap'>
              {currentItems &&
              currentItems.map((item) => (
              <Cart  src={item.thumbnail} price={item.id} title={item.title}/>
              ))}
      </div>
    </>
  );
}

function Pagination({ itemsPerPage }) {
  let [alldata,setAllData]=useState([])

    useEffect(()=>{

  async function allData(){
      let data= await axios.get("https://dummyjson.com/products")
      setAllData(data.data.products);
    }

    allData()

  },[])


     





  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = alldata.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(alldata.length / itemsPerPage);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % alldata.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <div className='mt-[50px] flex justify-between'>
        <ReactPaginate
        breakLabel="..."
        nextLabel=""
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel=""
        renderOnZeroPageCount={null}
        containerClassName="flex "
        pageLinkClassName="bg-[#262626] py-2 px-4 text-white mr-4"
        />
       <p>Products from {itemOffset+1} to {endOffset<Data.length?endOffset:Data.length} of {Data.length}</p>
      </div>
    </>
  );
}

export default Pagination