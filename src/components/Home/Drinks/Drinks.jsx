import React from 'react';

const Drinks = () => {
    return (
        <div id='section6'>
             <div >
            <h1 className='font-bold text-3xl mt-3'>Напитки</h1>
            <div className='mt-3 mb-10 grid grid-cols-1 lg:grid-cols-3 gap-2'>
                {/* food card */}
                <div className='bg-[white] rounded-[17px] flex justify-center items-center p-4'>
                    <div>
                    <img className='w-[180px] h-[140px]' src="https://eda.yandex/images/3798638/117016b98f20937537c63aa4e9ba67b4-216x188.jpeg" alt="" />
                    <h1 className='font-semibold text-3xl'>690 ₸</h1>
                    <h1 className='text-lg'>Крокетсы большие</h1>
                    <button className='bg-[#F5F4F2] px-16 py-2 rounded-[17px] text-xl mb-2 mt-10'>
                       <span className='font-semibold'>+</span> Add 
                    </button>
                    </div>
                </div>
                {/* food card */}
                <div className='bg-[white] rounded-[17px] flex justify-center items-center p-4'>
                    <div>
                    <img className='w-[180px] h-[140px]' src="https://eda.yandex/images/3420935/a1448559bbc36d30aa28abed32e004dd-216x188.jpeg" alt="" />
                    <h1 className='font-semibold text-3xl'>590 ₸</h1>
                    <h1 className='text-lg'>Крокетсы стандартные</h1>
                    <button className='bg-[#F5F4F2] px-16 py-2 rounded-[17px] text-xl mb-2 mt-10'>
                       <span className='font-semibold'>+</span> Add 
                    </button>
                    </div>
                </div>
                {/* food card */}
                <div className='bg-[white] rounded-[17px] flex justify-center items-center p-4'>
                    <div>
                    <img className='w-[180px] h-[140px]' src="https://eda.yandex/images/3595381/61bf0e5f20c612432eac2e67c2802d72-216x188.jpeg" alt="" />
                    <h1 className='font-semibold text-3xl'>500 ₸</h1>
                    <h1 className='text-lg'>Баскет Крокетсов</h1>
                    <button className='bg-[#F5F4F2] px-16 py-2 rounded-[17px] text-xl mb-2 mt-10'>
                       <span className='font-semibold'>+</span> Add 
                    </button>
                    </div>
                </div>
                {/* food card */}
                <div className='bg-[white] rounded-[17px] flex justify-center items-center p-4'>
                    <div>
                    <img className='w-[180px] h-[140px]' src="https://eda.yandex/images/3490902/7953b36310ac25f98a33d7484a020765-216x188.jpeg" alt="" />
                    <h1 className='font-semibold text-3xl'>300 ₸</h1>
                    <h1 className='text-lg'>Баскет Крокетсов</h1>
                    <button className='bg-[#F5F4F2] px-16 py-2 rounded-[17px] text-xl mb-2 mt-10'>
                       <span className='font-semibold'>+</span> Add 
                    </button>
                    </div>
                </div>
                {/* food card */}
                <div className='bg-[white] rounded-[17px] flex justify-center items-center p-4'>
                    <div>
                    <img className='w-[180px] h-[140px]' src="https://eda.yandex/images/3781088/b45559004b6a10c4f1057dadd2a5d181-216x188.jpeg" alt="" />
                    <h1 className='font-semibold text-3xl'>200 ₸</h1>
                    <h1 className='text-lg'>Баскет Крокетсов</h1>
                    <button className='bg-[#F5F4F2] px-16 py-2 rounded-[17px] text-xl mb-2 mt-10'>
                       <span className='font-semibold'>+</span> Add 
                    </button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Drinks;