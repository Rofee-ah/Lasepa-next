
import Accordian from "./Accordian";
import { AccordianItem } from "./Accordian";
const Questions = () => {
  return (
    <div className='mt-10 flex w-full flex-col gap-6 bg-[#F4F0F0] px-3 py-16 tablet:laptop-[6.25rem] tablet:gap-10 tablet:px-32 desktop:w-auto desktop:flex-row'>
      <div className='flex w-full flex-col items-center justify-center gap-2 desktop:w-[50%] desktop:items-start desktop:justify-start'>
        <p className='text-lg font-semibold leading-7 text-stone-950  tablet:font-extrabold'>
          Frequently Asked Questions
        </p>
        <div className='text-2xl font-semibold text-stone-800 tablet:text-4xl tablet:font-extrabold text-center tablet:text-left'>
         <h1>Got questions?</h1> 
           <h1>We've got you answers</h1>
        </div>
      </div>

      <div>
        <Accordian  className="flex w-full items-center gap-2 rounded-t-xl bg-white p-4 tablet:w-auto laptop:justify-between laptop:p-6">
        <AccordianItem value="1" trigger="What is a carbon credit?" className= 'w-full text-base font-semibold leading-[32px] text-stone-950 tablet:font-bold laptop:w-[95%] laptop:truncate laptop:text-lg'> <div className="max-h-[9999px] px-6 py-8 opacity-100 items-center justify-start self-stretch overflow-hidden rounded-b-lg border-l-4 border-orange-400 bg-gray-100 transition-all duration-300ease-in-out " >
            <p className="self-stretch text-base font-normal leading-tight text-gray-700">A carbon credit is a transferrable unit issued electronically representing GHG emission mitigation.
            </p></div>  </AccordianItem>
            </Accordian>
                <hr className="my-[14px] border-b border-black" />
            
            {/* <div className="inline-block origin-top-left text-[36px] tablet:text-3xl"></div> */}
        
            <Accordian  className="flex w-full items-center gap-2 rounded-t-xl bg-white p-4 tablet:w-auto laptop:justify-between laptop:p-6">
        <AccordianItem value="1" trigger="What is a GHG program?" className= 'w-full text-base font-semibold leading-[32px] text-stone-950 tablet:font-bold laptop:w-[95%] laptop:truncate laptop:text-lg'> <div className="max-h-[9999px] px-6 py-8 opacity-100 items-center justify-start self-stretch overflow-hidden rounded-b-lg border-l-4 border-orange-400 bg-gray-100 transition-all duration-300ease-in-out " >
            <p className="self-stretch text-base font-normal leading-tight text-gray-700">A carbon credit is a transferrable unit issued electronically representing GHG emission mitigation.
            </p></div>  </AccordianItem>
            </Accordian>
                <hr className="my-[14px] border-b border-black" />
            
            {/* <div className="inline-block origin-top-left text-[36px] tablet:text-3xl"></div> */}
        
            <Accordian  className="flex w-full items-center gap-2 rounded-t-xl bg-white p-4 tablet:w-auto laptop:justify-between laptop:p-6">
        <AccordianItem value="1" trigger="What is 'vintage'?'" className= 'w-full text-base font-semibold leading-[32px] text-stone-950 tablet:font-bold laptop:w-[95%] laptop:truncate laptop:text-lg'> <div className="max-h-[9999px] px-6 py-8 opacity-100 items-center justify-start self-stretch overflow-hidden rounded-b-lg border-l-4 border-orange-400 bg-gray-100 transition-all duration-300ease-in-out " >
            <p className="self-stretch text-base font-normal leading-tight text-gray-700">A carbon credit is a transferrable unit issued electronically representing GHG emission mitigation.
            </p></div>  </AccordianItem>
            </Accordian>
                <hr className="my-[14px] border-b border-black" />
            
            {/* <div className="inline-block origin-top-left text-[36px] tablet:text-3xl"></div> */}
        
      </div>
    </div>
  );
};

export default Questions;
