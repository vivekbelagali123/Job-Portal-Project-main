import { setSearchedQuery } from '@/redux/jobSlice';
import { Button } from './ui/button'
import { Search } from 'lucide-react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchJobHandler = () => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  }

  return (
    <div className='text-center'>
      <div className='flex flex-col gap-5 my-10'>
        <span className='mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium'>No.1 Job Portal Website</span>
        <h1 className='text-5xl font-bold'>Search, Apply & <br /> Get Your <span className='text-[#433bff]'>Dream Jobs</span></h1>
        <p><strong>JobVista:</strong> Discover your dream job or perfect candidate effortlessly. Where job seekers and recruiters connect seamlessly!</p>
        <div className='flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto'>
          <input
            type="text"
            placeholder='Find Your Dream Jobs'
            onChange={(e) => setQuery(e.target.value)}
            className='outline-none border-none w-full'
          />
          <Button onClick={searchJobHandler} className="rounded-r-full bg-[#433bff] hover:bg-[#2f27ce]">
            <Search className='h-5 w-5'></Search>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default HeroSection