import React from 'react';

const NewItems = () => {
    return (
        <div >
            <h1 className='font-bold text-3xl mt-3'>Новинки</h1>
            <div className='mt-3 mb-10 flex flex-col lg:flex-row gap-2'>
                {/* food card */}
                <div className='bg-[white] rounded-[17px] flex justify-center items-center p-4'>
                    <div>
                    <img className='w-[180px] h-[140px]' src="https://eda.yandex/images/3772784/685b91b72f622cd726ed76008838c70d-216x188.jpeg" alt="" />
                    <h1 className='font-semibold text-3xl'>690 ₸</h1>
                    <h1 className='text-lg'>Крокетсы большие</h1>
                    <button className='bg-[#F5F4F2] px-16 py-2 rounded-[17px] text-xl mb-2 mt-10'>
                       <span className='font-semibold'>+</span> Add 
                    </button>
                    </div>
                </div>
                <div className='bg-[white] rounded-[17px] flex justify-center items-center p-4'>
                    <div>
                    <img className='w-[180px] h-[140px]' src="https://eda.yandex/images/3709189/ea0ceaf2681a79a86550602664278a91-216x188.jpeg" alt="" />
                    <h1 className='font-semibold text-3xl'>590 ₸</h1>
                    <h1 className='text-lg'>Крокетсы стандартные</h1>
                    <button className='bg-[#F5F4F2] px-16 py-2 rounded-[17px] text-xl mb-2 mt-10'>
                       <span className='font-semibold'>+</span> Add 
                    </button>
                    </div>
                </div>
                <div className='bg-[white] rounded-[17px] flex justify-center items-center p-4'>
                    <div>
                    <img className='w-[180px] h-[140px]' src="https://eda.yandex/images/3538649/fe9c4fecf09ef398f2129892046118ae-216x188.jpeg" alt="" />
                    <h1 className='font-semibold text-3xl'>1300 ₸</h1>
                    <h1 className='text-lg'>Баскет Крокетсов</h1>
                    <button className='bg-[#F5F4F2] px-16 py-2 rounded-[17px] text-xl mb-2 mt-10'>
                       <span className='font-semibold'>+</span> Add 
                    </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewItems;