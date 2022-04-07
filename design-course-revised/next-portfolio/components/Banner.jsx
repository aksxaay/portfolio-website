import React from 'react'

const Banner = () => {
  return (
    <>
      <div className="bg-indigo-900 py-2 text-center lg:px-4">
        <div
          className="flex inline-flex items-center rounded-full bg-indigo-800 p-2 leading-none text-indigo-100"
          role="alert"
        >
          <span className="mr-1 flex rounded-full bg-indigo-500 px-2 py-1 text-xs font-bold uppercase">
            New
          </span>
          <span className="mr-3 flex-auto text-left font-semibold">
            Coming Soon..
          </span>
          <svg
            className="h-4 w-4 fill-current opacity-75"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
          </svg>
        </div>
      </div>
    </>
  )
}

export default Banner
