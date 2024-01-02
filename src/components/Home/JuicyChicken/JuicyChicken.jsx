import React from 'react';

const JuicyChicken = () => {
    return (
        <div>
            <div >
            <div id='section4'>
            <h1 className='font-bold text-3xl mt-3'>Сочная курочка</h1>
            </div>
            <div className='mt-3 mb-10 flex flex-col lg:flex-row gap-2'>
                {/* food card */}
                <div className='bg-[white] rounded-[17px] flex justify-center items-center p-4'>
                    <div>
                    <img className='w-[180px] h-[140px]' src="https://eda.yandex/images/3436037/164640f3cd2f36cc9596b424fce01a51-216x188.jpeg" alt="" />
                    <h1 className='font-semibold text-3xl'>1800 ₸</h1>
                    <h1 className='text-lg'>Стрипсы 5 шт</h1>
                    <button className='bg-[#F5F4F2] px-16 py-2 rounded-[17px] text-xl mb-2 mt-10'>
                       <span className='font-semibold'>+</span> Add 
                    </button>
                    </div>
                </div>
                <div className='bg-[white] rounded-[17px] flex justify-center items-center p-4'>
                    <div>
                    <img className='w-[180px] h-[140px]' src="https://eda.yandex/images/3436037/164640f3cd2f36cc9596b424fce01a51-216x188.jpeg" alt="" />
                    <h1 className='font-semibold text-3xl'>2350 ₸</h1>
                    <h1 className='text-lg'>Стрипсы 7 шт</h1>
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

export default JuicyChicken;