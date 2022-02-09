import React from 'react';

const Navbar = () => {
  return (
    <>
    
      <header class="py-6">
        <div class="container flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
            <div class="text-lg font-bold">
							{/* <!-- copy to clipboard my eth address --> */}
							<span class="inline-flex items-center justify-center p-2 my-2 mt-2 mr-2 font-bold text-xl text-center text-white transition duration-500 ease-in-out transform border-2 border-transparent shadow cursor-pointer rounded-xl font-lg hover:text-white focus:outline-none lg:w-auto hover:border-gray-700"
              onClick={() =>  navigator.clipboard.writeText('0x48BF6779fBa7eC911DA7420409A134C4d3Ff5ca7')}
							>
								jua.eth
							</span>
						</div>

            <div class="hidden md:flex space-x-12 items-center">
                <a href="#" class="text-selected-text">Home</a>
                <a href="#work">Work</a>
								{/* <!-- route this to blog --> */}
                <a href="#work" class="transition duration-500 ease-in-out transform border-2 border-transparent shadow focus:outline-none lg:w-auto rounded-xl p-2 hover:border-gray-700">Blog</a>
                <a href="#clients">Clients</a>
                <a href="#hire"><button class="px-6 py-2 bg-theme font-bold rounded-lg">Hire me</button></a>
            </div>
            <div class="md:hidden">
                <svg width="26" height="18" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 17.5H0.25V14.6667H13V17.5ZM25.75 10.4167H0.25V7.58333H25.75V10.4167ZM25.75 3.33333H13V0.5H25.75V3.33333Z" fill="white"/></svg>
            </div>
        </div>
				<div class="container flex justify-between mx-auto px-8 md:px-16 lg:px-32 w-full text-xs leading-3 text-blue-300">(hopefully someone sponsors)</div>

    </header>
    </>

  )
};

export default Navbar;
