import React from 'react';
import Image from 'next/image';
import juapfp from '../public/mahito.jpg';

const Hero = () => {
  return (
    
    <div className="container mt-8 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
        
        <div className="flex flex-wrap md:flex-nowrap">

            <nav className="inline-block lg:mr-24 lg:w-4 fixed left-percentage hidden xl:block">
                <div className="
                    absolute 
                    transform -translate-x-1/2 space-y-6 
                    my-40
                    ">
                    <a href="#" className="nav-dot selected-circle block w-7 h-7 rounded-full border-4 border-nav bg-body">
                        <span className="bg-black px-2 py-1 rounded-md ml-10 opacity-0">Home</span>
                    </a>
                    <a href="#work" className="nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-body">
                        <span className="bg-black px-2 py-1 rounded-md ml-10 opacity-0">Work</span>
                    </a>
                    <a href="#clients" className="nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-body">
                        <span className="bg-black px-2 py-1 rounded-md ml-10 opacity-0">Clients</span>
                    </a>
                    <a href="#hire" className="nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-body">
                        <span className="bg-black px-2 py-1 rounded-md ml-10 opacity-0">Hire</span>
                    </a>
                </div>
            </nav>

            <div className="flex flex-wrap lg:ml-20 justify-center md:justify-start max-w-xl mt-0 md:my-36">
                <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl text-center md:text-left">Building<br/> beautiful web experiences.</h1>

								<br/>

                <h3 className="font-bold sm:text-sm md:text-xl lg:text-3xl text-center md:text-left lg:ml-64 sm:ml-0 sm:mt-0">Wreak<br/>Havok.</h3>



                <div className="w-full flex lg:justify-start justify-center my-16">
									<a href="#work">
                    <button className="px-8 py-4 bg-theme text-white font-bold md:mt-12 flex items-center
										justify-center
										h-14
										space-x-3
										rounded-lg
										lg:mr-4
										">
                        <div>
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.4375 11C14.4375 11.9117 14.0753 12.786 13.4307 13.4307C12.786 14.0753 11.9117 14.4375 11 14.4375C10.0883 14.4375 9.21398 14.0753 8.56932 13.4307C7.92466 12.786 7.5625 11.9117 7.5625 11C7.5625 10.0883 7.92466 9.21398 8.56932 8.56932C9.21398 7.92466 10.0883 7.5625 11 7.5625C11.9117 7.5625 12.786 7.92466 13.4307 8.56932C14.0753 9.21398 14.4375 10.0883 14.4375 11Z" fill="white"/>
                                <path d="M0 11C0 11 4.125 3.4375 11 3.4375C17.875 3.4375 22 11 22 11C22 11 17.875 18.5625 11 18.5625C4.125 18.5625 0 11 0 11ZM11 15.8125C12.2764 15.8125 13.5004 15.3055 14.403 14.403C15.3055 13.5004 15.8125 12.2764 15.8125 11C15.8125 9.72365 15.3055 8.49957 14.403 7.59705C13.5004 6.69453 12.2764 6.1875 11 6.1875C9.72365 6.1875 8.49957 6.69453 7.59705 7.59705C6.69453 8.49957 6.1875 9.72365 6.1875 11C6.1875 12.2764 6.69453 13.5004 7.59705 14.403C8.49957 15.3055 9.72365 15.8125 11 15.8125Z" fill="white"/>
                            </svg>								
                        </div>
                        <span>View my work.</span>
                    </button>
									</a>
                </div>
            </div>
            
						<div 
						className="
						lg:my-32
						lg:ml-4
						rounded-lg
						bg-center
						text-center
						block
						">
                            <Image src={juapfp} alt="Jua Profile Picture" 
							className="
							flex justify-center items-center
							
							object-contain
							md:relative 
							mt-2 md:mt-0 
							rounded-lg
							-z-0
							"/>

                            
							
						</div>
        </div>
    </div>
    
  );
};

export default Hero;
