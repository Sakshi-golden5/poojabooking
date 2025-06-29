import React from 'react'
import { poojaDummyData } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Services = () => {
  const handleBookNowClick = (e) => {
    e.preventDefault(); 
    openModal(pooja); 
  };

  const navigate = useNavigate();
  return (
    <div className='flex flex-col-reverse lg:flex-row items-start justify-between pt-28 md:pt-35 px-4 md:px-16 lg:px-24'>
      <div>
        <div>
          <h1 className='font-playfair text-4xl md:text-[40px]'>Pooja Serives</h1>
          <p className='text-sm md:text-base text-gray-500/90 mt-2 msx-w-174'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga veniam eligendi iste tempora architecto at vel natus, unde, explicabo minus temporibus accusantium modi ut dolorum!</p>
        </div>

        {poojaDummyData.map((pooja)=>(
          <div key={pooja._id} className='flex flex-col md:flex-row items-start py-10 gap-6 border-b border-gray-400 last:pb-30 last:border-0'>
          <img onClick={()=> {navigate(`/poojas/${pooja._id}`); scrollTo(0,0)}} src={pooja.images[0]} alt="pooja-image" title='View Pooja Details' className='w-50 h-30 md:w-62 md:h-45 rounded-xl shadow-md object-cover cursor-pointer border border-black'/>
          <div className='mt-5'>
            <p  onClick={()=> {navigate(`/poojas/${pooja._id}`); scrollTo(0,0)}} className='tet-gray-800 text-3xl font-playfair cursor-pointor'>{pooja.name}</p>
            <p className='text-sm md:text-base text-gray-500/90 mt-2 msx-w-174'>{pooja.description}</p>
            <div>
              <button
            className="px-4 py-2 text-sm font-medium border border-gray-300 rounded hover:bg-gray-50 transition-all cursor-pointer mt-7 bg-black text-white"
            onClick={handleBookNowClick}
          >
            Book Now
          </button>
            </div>
          </div>
        </div>
        ))}
        
      </div>
      <div>

      </div>
    </div>
  )
}

export default Services
