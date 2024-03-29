/* eslint-disable react/no-unknown-property */
import ScrollspyNav from 'react-scrollspy-nav';

const Sidebar = () => {
   

    return (
        <div>
            <button type="button" class="mt-28 fixed text-gray-500  hover:text-gray-600" data-hs-overlay="#docs-sidebar" aria-controls="docs-sidebar" aria-label="Toggle navigation">
                <span class="sr-only">Toggle Navigation</span>
                <svg class="flex-shrink-0 w-[35px] h-[35px] ml-6 mt-5" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                </svg>
            </button>
            <div id="docs-sidebar" class="mt-[82px] hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 start-0 bottom-0 z-[60] w-64 bg-[#F5F4F2] border-e border-gray-200 pt-7 pb-10 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300">

                <nav class="hs-accordion-group p-6 w-full flex flex-col flex-wrap" data-hs-accordion-always-open>
                    <ul class="space-y-1.5">
                        <li>
                            <a class="flex items-center gap-x-3.5 py-4 px-2.5 bg-white text-lg text-slate-700 rounded-xl hover:bg-gray-100 font-bold" href="#">
                                <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
                                All restaurants
                            </a>
                        </li>
                        <ScrollspyNav scrollTargetIds={['section1', 'section2', 'section3', 'section4', 'section5', 'section6', 'section7', 'section8']}
                            offset={100}
                            activeNavClass="active"
                            scrollDuration="1000">
                            <li className=''>
                                <a class="flex items-center gap-x-3.5 py-4 px-2.5  text-lg text-slate-700 rounded-xl  font-semibold">
                                    Menu
                                </a>
                                <a href="#section1"  class="flex items-center gap-x-3.5 py-1 px-2.5  text-lg text-slate-700 rounded-xl hover:bg-white font-semibold" >
                                    Новинки
                                </a>
                                <a href="#section2" class="flex items-center gap-x-3.5 py-1 px-2.5  text-lg text-slate-700 rounded-xl hover:bg-white font-semibold" >
                                    Боксы
                                </a>
                                <a  href="#section3" class= " flex items-center gap-x-3.5 py-1 px-2.5  text-lg text-slate-700 rounded-xl hover:bg-white font-semibold">
                                    Комбо Баскеты
                                </a>
                                <a href="#section4" class="flex items-center gap-x-3.5 py-1 px-2.5  text-lg text-slate-700 rounded-xl hover:bg-white font-semibold" >
                                    Сочная курочка
                                </a>
                                <a href="#section5" class="flex items-center gap-x-3.5 py-1 px-2.5  text-lg text-slate-700 rounded-xl hover:bg-white font-semibold" >
                                    Снэки
                                </a>
                                
                                <a href="#section6" class="flex items-center gap-x-3.5 py-1 px-2.5  text-lg text-slate-700 rounded-xl hover:bg-white font-semibold" >
                                    Напитки

                                </a>
                                <a href="#section7" class="flex items-center gap-x-3.5 py-1 px-2.5  text-lg text-slate-700 rounded-xl hover:bg-white font-semibold" >
                                    Дополнительно
                                </a>
                            </li>
                        </ScrollspyNav>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Sidebar;