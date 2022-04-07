import React from 'react'

const Navbar = () => {
  return (
    <>
      <header className="py-6">
        <div className="container mx-auto flex w-full items-center justify-between px-8 md:px-14 lg:px-24">
          <div className="text-lg font-bold">
            {/* <!-- copy to clipboard my eth address --> */}
            <span
              className="font-lg my-2 mt-2 mr-2 inline-flex transform cursor-pointer items-center justify-center rounded-xl border-2 border-transparent p-2 text-center text-xl font-bold text-white shadow transition duration-500 ease-in-out hover:border-gray-700 hover:text-white focus:outline-none lg:w-auto"
              onClick={() =>
                navigator.clipboard.writeText(
                  '0x48BF6779fBa7eC911DA7420409A134C4d3Ff5ca7'
                )
              }
            >
              jua.eth
            </span>
          </div>

          <div className="hidden items-center space-x-12 md:flex">
            <a href="#" className="text-selected-text">
              Home
            </a>
            <a href="#work">Work</a>
            {/* <!-- route this to blog --> */}
            <a
              href="#work"
              className="transform rounded-xl border-2 border-transparent p-2 shadow transition duration-500 ease-in-out hover:border-gray-700 focus:outline-none lg:w-auto"
            >
              Blog
            </a>
            <a href="#clients">Clients</a>
            <a href="#hire">
              <button className="rounded-lg bg-theme px-6 py-2 font-bold">
                Hire me
              </button>
            </a>
          </div>
          <div className="md:hidden">
            <svg
              width="26"
              height="18"
              viewBox="0 0 26 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 17.5H0.25V14.6667H13V17.5ZM25.75 10.4167H0.25V7.58333H25.75V10.4167ZM25.75 3.33333H13V0.5H25.75V3.33333Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
        <div className="container mx-auto flex w-full justify-between px-8 text-xs leading-3 text-blue-300 md:px-16 lg:px-32">
          (hopefully someone sponsors)
        </div>
      </header>
    </>
  )
}

export default Navbar
