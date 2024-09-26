import React from 'react'

const MenuCard = ({img, header, text}) => {
  return (
    <div className='flex flex-col font-kaisei justify-center items-center'>
        <img
            src={img}
            alt=""
            width={300}
            height={500}
          />
        <p className='text-2xl text-green-text font-bold mt-3'>
            {header}
        </p>
        <p className='text-text-grey px-4 text-center'>
            {text}
        </p>

    </div>
  )
}

export default MenuCard