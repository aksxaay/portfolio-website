import React from 'react'
import Image from 'next/image';


function Work() {
  return (
    <div class="container mt-32 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
			<section class="w-full">
				<h2 id="work" class="secondary-title">My work</h2>
				<p class="section-paragraph">I may not have had the pleasure of working with multiple Fortune 500 companies, but here are some of the projects I've made on my own time.</p>

				<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
					<img src="https://images.unsplash.com/photo-1576153192396-180ecef2a715?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" class="w-full bg-nav h-36 lg:h-72 object-cover
					transform transition duration-500 hover:scale-105"/>
					<img src="https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" class="w-full bg-nav h-36 lg:h-72 object-cover transform transition duration-500 hover:scale-105"/>
					<img src="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80" class="w-full hidden md:block bg-nav h-36 lg:h-72 object-cover transform transition duration-500 hover:scale-105"/>
					{/* <img src="https://images.unsplash.com/photo-1558655146-d09347e92766?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80" class="w-full hidden md:block bg-nav h-36 lg:h-72 object-cover transform transition duration-500 hover:scale-105">
					<img src="https://images.unsplash.com/photo-1547119957-637f8679db1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" class="w-full hidden md:block bg-nav h-36 lg:h-72 object-cover transform transition duration-500 hover:scale-105">
					<img src="https://images.unsplash.com/photo-1559028012-481c04fa702d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1336&q=80" class="w-full hidden md:block bg-nav h-36 lg:h-72 object-cover transform transition duration-500 hover:scale-105">
					<img src="https://images.unsplash.com/photo-1603969072881-b0fc7f3d77d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80s" class="w-full hidden md:block bg-nav h-36 lg:h-72 object-cover transform transition duration-500 hover:scale-105">
					<img src="https://images.unsplash.com/photo-1618761714954-0b8cd0026356?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" class="w-full hidden md:block bg-nav h-36 lg:h-72 object-cover transform transition duration-500 hover:scale-105">
					<img src="https://images.unsplash.com/photo-1545235617-7a424c1a60cc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80" class="w-full hidden md:block md:col-span-2 lg:col-span-1 bg-nav h-36 lg:h-72 object-cover transform transition duration-500 hover:scale-105"> */}
				</div>
			</section>
		</div>
  )
}

export default Work