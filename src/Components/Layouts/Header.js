import React from 'react';
import Button from './Widget/Button';
import Profile from './Widget/Profile';
import Avatar from './../../Resources/john.jpg';

function Header() {
   return(
      <nav className="bg-white shadow-nav">
         <div className="container mx-auto flex items-center justify-between h-16">
            <div className="flex space-x-4 items-center">
               <Profile img={Avatar} margin='right'>مجتبی جمشیدی</Profile>
               <Button href='localhost:3000' bgColor='bg-mainGreenColor'> 
                  <span>سوال جدید</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-4" viewBox="0 0 20 20" fill="currentColor">
                     <path d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" />
                  </svg>
               </Button>
            </div>
            <div className="flex space-x-4">
               <h2 className="font-Shabnam font-bold text-2xl text-mainDarkColor">
                  لیست سوالات
               </h2>
            </div>
         </div>
      </nav>
   )
}

export default Header;