import React from 'react';




const Header = () => {
    return (  
        <>
        
            
        <header class="pb-6 bg-white lg:pb-0 bg-green-300">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 ">
      
        <nav class="flex items-center justify-between h-16 lg:h-20 ">
            <div class="flex-shrink-0 font-bold text-5xl">
                 MediChat
            </div>

            

            <div class="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10">
                <a href="/About" title="" class="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> About </a>

                <a href="/Product" title="" class="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Products </a>

                <a href="/Pricing" title="" class="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">  Book Appointment</a>

                <a href="ContactUs" title="" class="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> contact us</a>
            </div>

            <a href="/Chatbot" title="" class="items-center justify-center hidden px-4 py-3 ml-10 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md lg:inline-flex hover:bg-blue-700 focus:bg-blue-700" role="button"> how can i help </a>
        </nav>

       
    </div>
</header>


        
        </>
    );
}
 
export default Header;