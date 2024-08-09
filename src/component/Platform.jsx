import Image from 'next/image'
import React from 'react'

const Platform = () => {
  return (
    <div>
    <div className='flex flex-col items-center pt-[17%] sm:pt-[15%] pb-[5rem]'>
        <div className='flex flex-col items-center gap-6'>
        <h1 className='text-3xl tablet:text-5xl text-center font-bold font-poppins tracking-tighter'>
                Who can use our platform
        </h1>
        <p className='text-xl tablet:text-2xl text-center px-6 tablet:px-0 font-notoSans tracking-wide last:text-gray-500'>Stakeholders benefit greatly by using our platform</p>
        </div>

    </div>

    <div className='max-w-[90%] mx-auto grid grid-cols-1 laptop:grid-cols-2'>


    <div className='max-w-[90%] w-full mx-auto flex flex-col gap-0 justify-between items-center bg-gray-100 my-10 rounded-xl'>
        <div className='flex flex-col items-center px-10 pt-10 pb-5 font-poppins'>
            <h1 className='text-3xl tablet:text-4xl font-bold tracking-tighter text-gray-700 whitespace-nowrap'>Project proponents</h1>
            <p className='text-center text-base tablet:text-lg text-gray-800 font-semibold my-5'>Comprehensive platform for Carbon Project Management</p>
        </div>
        <div className='p-10'>
            <p className='font-notoSans text-lg tablet:text-xl text-gray-600 tracking-wide mt-0'>
            Our platform is designed to help project proponents manage their carbon projects throughout their full lifecycle.
             With our user-friendly features, you can easily track your carbon credit inventory, sell your credits, and communicate with stakeholders to maximize the value of your projects. Whether you are 
            starting out with a new project or have existing ones, our tools and resources can support you every step of the way.
            </p>
        </div>
        <Image src="/image/rec.svg" alt='' width={320} height={320}  className='sticky h-auto max-w-full mx-auto text-center rounded-lg'/>
        <div className='w-full flex flex-col items-center gap-5 p-10 font-poppins'>
            <button className='w-full bg-gray-300 text-[#0c691f] px-6 py-3 rounded-xl font-semibold hover:opacity-80 text-center'>Learn More</button>
            <button className='w-full flex justify-center items-center gap-2 bg-[#0c691f] px-6 py-3 whitespace-nowrap rounded-xl text-white font-semibold'>Join Today</button>
        </div>
    </div>

    <div className='max-w-[90%] w-full mx-auto flex flex-col gap-0 justify-between items-center bg-gray-100 my-10 rounded-xl'>
        <div className='flex flex-col items-center px-10 pt-10 pb-5 font-poppins'>
            <h1 className='text-3xl tablet:text-4xl font-bold tracking-tighter text-gray-700 whitespace-nowrap'>Project developers</h1>
            <p className='text-center text-base tablet:text-lg text-gray-800 font-semibold my-5'>Comprehensive platform for Carbon Project Management</p>
        </div>
        <div className='p-10'>
            <p className='font-notoSans text-lg tablet:text-xl text-gray-600 tracking-wide mt-0'>
            Our platform is designed to help project proponents manage their carbon projects throughout their full lifecycle.
             With our user-friendly features, you can easily track your carbon credit inventory, sell your credits, and communicate with stakeholders to maximize the value of your projects. Whether you are 
            starting out with a new project or have existing ones, our tools and resources can support you every step of the way.
            </p>
        </div>
        <Image src="/image/oct.svg" alt='' width={320} height={320}  className='sticky h-auto max-w-full mx-auto text-center rounded-lg'/>
        <div className='w-full flex flex-col items-center gap-5 p-10 font-poppins'>
            <button className='w-full bg-gray-300 text-[#0c691f] px-6 py-3 rounded-xl font-semibold hover:opacity-80 text-center'>Learn More</button>
            <button className='w-full flex justify-center items-center gap-2 bg-[#0c691f] px-6 py-3 whitespace-nowrap rounded-xl text-white font-semibold'>Join Today</button>
        </div>
    </div>

    <div className='max-w-[90%] w-full mx-auto flex flex-col gap-0 justify-between items-center bg-gray-100 my-10 rounded-xl'>
        <div className='flex flex-col items-center px-10 pt-10 pb-5 font-poppins'>
            <h1 className='text-3xl tablet:text-4xl font-bold tracking-tighter text-gray-700 whitespace-nowrap'>Marketplaces
</h1>
            <p className='text-center text-base tablet:text-lg text-gray-800 font-semibold my-5'>Carbon Credit Sourcing Made Easy</p>
        </div>
        <div className='p-10'>
            <p className='font-notoSans text-lg tablet:text-xl text-gray-600 tracking-wide mt-0'>
            Our streamlined processes enables marketplaces to efficiently integrate with the platform to source and offer carbon credits for sale from a range of projects. With our platform, 
            marketplaces can expand their offerings, increase their impact, and connect with a wider network of buyers and sellers.
            </p>
        </div>
        <Image src="/image/spahre.svg" alt='' width={320} height={320}  className='sticky h-auto max-w-full mx-auto text-center rounded-lg'/>
        <div className='w-full flex flex-col items-center gap-5 p-10 font-poppins'>
            <button className='w-full bg-gray-300 text-[#0c691f] px-6 py-3 rounded-xl font-semibold hover:opacity-80 text-center'>Learn More</button>
            <button className='w-full flex justify-center items-center gap-2 bg-[#0c691f] px-6 py-3 whitespace-nowrap rounded-xl text-white font-semibold'>Join Today</button>
        </div>
    </div>

    <div className='max-w-[90%] w-full mx-auto flex flex-col gap-0 justify-between items-center bg-gray-100 my-10 rounded-xl'>
        <div className='flex flex-col items-center px-10 pt-10 pb-5 font-poppins'>
            <h1 className='text-3xl tablet:text-4xl font-bold tracking-tighter text-gray-700 whitespace-nowrap'>Organizations</h1>
            <p className='text-center text-base tablet:text-lg text-gray-800 font-semibold my-5'>Climate action portfolio at the palm of your hands</p>
        </div>
        <div className='p-10'>
            <p className='font-notoSans text-lg tablet:text-xl text-gray-600 tracking-wide mt-0'>
            Our platform allows organisations to create an account and easily source and manage carbon credits for their offsetting and 
            compensation needs. With our
             user friendly platform you can quickly find and manage the carbon credits you need to achieve your sustainability goals.
            </p>
        </div>
        <Image src="/image/brand.svg" alt='' width={320} height={320}  className='sticky h-auto max-w-full mx-auto text-center rounded-lg'/>
        <div className='w-full flex flex-col items-center gap-5 p-10 font-poppins'>
            <button className='w-full bg-gray-300 text-[#0c691f] px-6 py-3 rounded-xl font-semibold hover:opacity-80 text-center'>Learn More</button>
            <button className='w-full flex justify-center items-center gap-2 bg-[#0c691f] px-6 py-3 whitespace-nowrap rounded-xl text-white font-semibold'>Join Today</button>
        </div>
    </div>




    </div>
    </div>
  )
}

export default Platform