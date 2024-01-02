import React from 'react';

const Snacks = () => {
    return (
        <div>
             <div id='section5'>
            <h1 className='font-bold text-3xl mt-3'>Снэки</h1>
            <div className='mt-3 mb-10 grid grid-cols-1 lg:grid-cols-3 gap-2'>
                {/* food card */}
                <div className='bg-[white] mb-4 rounded-[17px] flex justify-center items-center p-4'>
                    <div>
                    <img className='w-[180px] h-[140px]' src="https://eda.yandex/images/3583862/0603da5550d9bbbd3c95db0cedc3c482-216x188.jpeg" alt="" />
                    <h1 className='font-semibold text-3xl'>2350 ₸</h1>
                    <h1 className='text-base'>Байтс баскет</h1>
                    <button className='bg-[#F5F4F2] px-16 py-2 rounded-[17px] text-xl mb-2 mt-10'>
                       <span className='font-semibold'>+</span> Add 
                    </button>
                    </div>
                </div>
                {/* food card */}
                <div className='bg-[white] mb-4 rounded-[17px] flex justify-center items-center p-4'>
                    <div>
                    <img className='w-[180px] h-[140px]' src="https://eda.yandex/images/3528285/61bbfe6d795a70a794d3e8b67097526c-216x188.jpeg" alt="" />
                    <h1 className='font-semibold text-3xl'>3000 ₸</h1>
                    <h1 className='text-lg'>Чизбургер Бокс</h1>
                    <button className='bg-[#F5F4F2] px-16 py-2 rounded-[17px] text-xl mb-2 mt-10'>
                       <span className='font-semibold'>+</span> Add 
                    </button>
                    </div>
                </div>
                {/* food card */}
                <div className='bg-[white] rounded-[17px] flex justify-center items-center p-4 mb-4'>
                    <div>
                    <img className='w-[180px] h-[140px]' src="https://eda.yandex/images/3502800/013ddda4b096833f9387aacda76851e7-216x188.jpeg" alt="" />
                    <h1 className='font-semibold text-3xl'>1300 ₸</h1>
                    <h1 className='text-lg'>Твистер Кебаб Бокс</h1>
                    <button className='bg-[#F5F4F2] px-16 py-2 rounded-[17px] text-xl mb-2 mt-10'>
                       <span className='font-semibold'>+</span> Add 
                    </button>
                    </div>
                </div>
                {/* food card */}
                <div className='bg-[white] rounded-[17px] flex justify-center items-center p-4 mb-4'>
                    <div>
                    <img className='w-[180px] h-[140px]' src="https://eda.yandex/images/3807432/c11a8435930d5e2d37bbb29a1a059d95-216x188.jpeg" alt="" />
                    <h1 className='font-semibold text-3xl'>1300 ₸</h1>
                    <h1 className='text-lg'>Твистер Бокс</h1>
                    <button className='bg-[#F5F4F2] px-16 py-2 rounded-[17px] text-xl mb-2 mt-10'>
                       <span className='font-semibold'>+</span> Add 
                    </button>
                    </div>
                </div>
                {/* food card */}
                <div className='bg-[white] rounded-[17px] flex justify-center items-center p-4 mb-4 opacity-45'>
                    <div>
                    <img className='w-[180px] h-[140px]' src="https://eda.yandex/images/3749380/84914e79a73bcca310c275d20dc2281f-216x188.jpeg" alt="" />
                    <h1 className='font-semibold text-3xl'>1300 ₸</h1>
                    <h1 className='text-lg'>Твистер Кебаб Бокс</h1>
                    <button disabled className='bg-[#F5F4F2] w-[180px]  py-2 rounded-[17px] text-xl mb-2 mt-10'>
                       <span className='font-semibold'>Available soon</span> 
                    </button>
                    </div>
                </div>
                {/* food card */}
                <div className='bg-[white] rounded-[17px] flex justify-center items-center p-4 mb-4 opacity-45'>
                    <div>
                    <img className='w-[180px] h-[140px]' src="https://eda.yandex/images/3813301/f584264739d42911aa1be1239b3de3c0-216x188.jpeg" alt="" />
                    <h1 className='font-semibold text-3xl'>1300 ₸</h1>
                    <h1 className='text-lg'>Твистер Кебаб Бокс</h1>
                    <button disabled className='bg-[#F5F4F2] w-[180px]  py-2 rounded-[17px] text-xl mb-2 mt-10'>
                       <span className='font-semibold'>Available soon</span> 
                    </button>
                    </div>
                </div>
                {/* food card */}
                
            </div>
        </div>
        </div>
    );
};

export default Snacks;