import Image from 'next/image';


const AboutUs = () => {
  return (
    <div>
    <div className="bg-[#0c691f] pt-[4rem] pb-[10rem] tablet:pb-[18rem]">
        <div className="max-w-[90%] mx-auto grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-4 gap-6 bg-[#0003314] z-50 ">

        <div className="cursor-pointer p-3 border rounded-xl border-white">
        <h1 className=" text-white font-poppins font-extrabold text-xl mb-3 hover:text-[#003313] whitespace-nowrap">ABOUT US</h1>
        <p className="text-slate-200 text-lg tracking-wider hover:text-[#003314]">
        Carbon crediting program that enhances confidence in carbon market integrity.
        </p>
        </div>

        <div className="cursor-pointer p-3 border rounded-xl border-white">
        <h1 className=" text-white font-poppins font-extrabold text-xl mb-3 hover:text-[#003313] whitespace-nowrap">OUR MARKETS</h1>
        <p className="text-slate-200 text-lg tracking-wider hover:text-[#003314]">
        Trusted partner in carbon markets since 1996 as the world’s first carbon registry.
        </p>
        </div>

        <div className="cursor-pointer p-3 border rounded-xl border-white">
        <h1 className=" text-white font-poppins font-extrabold text-xl mb-3 hover:text-[#003313] whitespace-nowrap">OUR PROGRAM</h1>
        <p className="text-slate-200 text-lg tracking-wider hover:text-[#003314]">
        Science-based methodologies to reduce and remove greenhouse gas emissions.
        </p>
        </div>

        <div className="cursor-pointer p-3 border rounded-xl border-white">
        <h1 className=" text-white font-poppins font-extrabold text-xl mb-3 hover:text-[#003313] whitespace-nowrap">OUR JOURNEY</h1>
        <p className="text-slate-200 text-lg tracking-wider hover:text-[#003314]">
        American Carbon Registry is now ACR. Get the details in our recent announcement.
        </p>
        </div>
        </div>

    </div>

            <div className='flex justify-center w-full h-fit -mt-24 tablet:-mt-80 tablet:pt-16'>
            <Image src="/image/img-45.webp" alt='' width={480} height={270}  className='w-[90%] h-[10rem] tablet:h-[25rem] z-50 rounded-lg object-cover' />
                    
            </div>
    </div>

    
  )
}

export default AboutUs