/* eslint-disable react/no-unknown-property */
import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div className='px-4 py-4 bg-[#F5F4F2]'>
      <div className='flex items-center gap-10 max-w-[95%] mx-auto'>
        <img src="https://avatars.mds.yandex.net/get-bunker/994123/b78e4890b454976f74575e3ea79f24a5eeee5fd8/orig" alt="" />
        {/* dropdown */}
        <div>
          <div class="hs-dropdown relative inline-flex">
            <button id="hs-dropdown-default" type="button" class="hs-dropdown-toggle py-3 px-12 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none ">
            Сарыбел көшесі
              <svg class="hs-dropdown-open:rotate-180 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6" /></svg>
            </button>
            <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-[15rem] bg-white shadow-md rounded-lg p-2 mt-2 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full" aria-labelledby="hs-dropdown-default">
              
              <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 " href="#">
                Purchases
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Navbar;