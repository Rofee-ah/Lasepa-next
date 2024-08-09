import Image from "next/image"


const Newsletter = () => {
  return (
    <div className='relative bg-[#0c691f] h-[30rem]tablet:h-[25rem] w-full z-30'>
        <Image  src="/image/newsletter.webp" alt='' width={480} height={270} className="h-[35rem] tablet:h-[25rem] w-full object-cover "  />

        <div className="max-w-[85%] tablet:max-w-[63%] desktop:max-w-[40%] w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 text-center"> 
                <h1 className="text-white text-2xl tablet:text-4xl font-bold font-poppins mb-4 mt-24 whitespace-nowrap">Newsletter Signup </h1>
                <p className="text-lg text-slate-200 font-medium mb-10 font-notoSans"> Register here to receive the latest LASEPA program updates and news</p>
                <div className="relative pt-[50%] tablet:pt-0 ">
                        <div className="flex flex-col gap-5 -mt-40 tablet:mt-0">
                            <div className="flex flex-col tablet:flex-row  w-full gap-3">
                                    <input type="text" placeholder="First Name" className="p-3 w-full tablet:w-[50%] bg-transparent outline outline-1 outline-slate-200 rounded-xl placeholder:text-white caret-white text-white"/>
                                    <input type="text" placeholder="Last Name" className="p-3 w-full tablet:w-[50%] bg-transparent outline outline-1 outline-slate-200 rounded-xl placeholder:text-white caret-white text-white"/>

                            </div>

                            <div className="w-full flex flex-col tablet:flex-row gap-5">
                            <input type="text" placeholder="Email" className="p-3 w-full tablet:w-[80%] bg-transparent outline outline-1 outline-slate-200 rounded-xl placeholder:text-white caret-white text-white" />  
                            <button className="p-3 bg-[#0c691f] text-white font-bold w-full tablet:w-[20%] rounded-xl">Subcribe</button>     
                            </div>
                            <p className="text-white float-start font-notoSans tablet:mb-12">We care about your data in our private policy

</p>

                        </div>
                </div>
        </div>

    </div>
  )
}

export default Newsletter