import Image from 'next/image';

const page = () => {
  return (
    <div className=''>
      <div className='fixed hidden min-h-screen tablet:block h-full p-8 bg-[#0c691f] tablet:w-[24%] desktop:w-[20%]'>
        <div className='flex flex-col h-full'>
          <div className='flex justify-center items-center gap-2 my-7 pb-8'>
            <Image
              src='/image/lasepa-logo.webp'
              alt=''
              width={100}
              height={100}
              className='w-48 mt-0 tablet:w-52 rounded-xl'
            />
          </div>

          <div className='flex flex-col gap-6'>
            <div className='lex flex-col justify-between h-[calc(100vh-17rem)]'>
              <div className='flex gap-2 items-center cursor-pointer py-2 px-3 rounded-xl text-white bg-[#204c39]'>
                <p className='text-md text-[#fff] whitespace-nowrap font-bold'>
                  Home
                </p>
              </div>

              <div className='flex gap-2 mt-7 items-center cursor-pointer py-2 px-3 rounded-xl text-gray-600 bg-transparent'>
                <p className='text-md text-[#fff] whitespace-nowrap'>Project</p>
              </div>

              <div className='flex gap-2 mt-7 items-center cursor-pointer py-2 px-3 rounded-xl text-gray-600 bg-transparent'>
                <p className='text-md text-[#fff] whitespace-nowrap'>
                  Insights
                </p>
              </div>
            </div>
          </div>

          <div className=' pb-10'>
            <p className='text-md text-[#fff] whitespace-nowrap'>
              Profile Setting
            </p>
            <div className='border-b border-gray-400 pb-3'></div>
          </div>
        </div>
      </div>

      <div className='w-[calc(100%, .-, .20%)] ml-0 tablet:ml-[24%] desktop:ml-[20%]'>
        <div className='relative p-8 bg-[#ebecf4] w-full min-h-screen'>
          <div className='flex justify-between items-center'>
            <p className='text-sm tablet:text-base'>Home</p>
          </div>
          <h1 className='text-lg tablet:text-xl text-[#204c39] font-semibold font-poppins mt-6'>
            Onboarding Steps
          </h1>
          <p className='text-sm tablet:text-base tracking-wide text-gray-600'>
            Finish these steps to successfully register a project on the LASEPA
            portal.
          </p>

          <div className='grid grid-cols-1 tablet:grid-cols-3 gap-4 mt-9'>
            <div className='flex gap-8 w-full h-[11rem] bg-[#fff] rounded-xl p-5 cursor-pointer'>
              <div className='flex flex-col justify-between w-[50%]'>
                <div className=''>
                  <p className='text-sm text-gray-400'>Onboard User</p>
                  <p className='text-base text-[#000] font-semibold'>
                    Create a user
                  </p>
                  <p className='text-base text-gray-600 tablet:mt-8 desktop:mt-16 mt-6'>
                    step 1
                  </p>
                </div>
              </div>
              <Image
                src='/image/card-img.webp'
                alt=''
                width={100}
                height={100}
                className='w-16 h-16 mt-0 tablet:w-16 tablet:h-16 tablet:py-2 desktop:py-0 desktop:w-32 desktop:h-32 rounded-full'
              />
            </div>

            <div className='flex gap-8 w-full h-[11rem] bg-[#fff] rounded-xl p-5 cursor-pointer'>
              <div className='flex flex-col justify-between w-[50%]'>
                <div className=''>
                  <p className='text-sm text-gray-400'>
                    Register an Organization
                  </p>
                  <p className='text-base text-[#000] font-semibold'>
                    Onboard Ogranization
                  </p>
                  <p className='text-base text-gray-600 tablet:mt-4 desktop:mt-16 mt-6'>
                    step 2
                  </p>
                </div>
              </div>
              <Image
                src='/image/card-img.webp'
                alt=''
                width={100}
                height={100}
                className='w-16 h-16 mt-0  tablet:w-16 tablet:h-16 tablet:py-2 desktop:py-0 desktop:w-32 desktop:h-32 rounded-full'
              />
            </div>

            <div className='flex gap-8 w-full h-[11rem] bg-[#fff] rounded-xl p-5 cursor-pointer'>
              <div className='flex flex-col justify-between w-[50%]'>
                <div className=''>
                  <p className='text-sm text-gray-400'>Create a Project</p>
                  <p className='text-base text-[#000] font-semibold'>
                    Register a Project
                  </p>
                  <p className='text-base text-gray-600 tablet:mt-3 desktop:mt-16 mt-6 '>
                    step 3
                  </p>
                </div>
              </div>
              <Image
                src='/image/card-img.webp'
                alt=''
                width={100}
                height={100}
                className='w-16 h-16 mt-0  tablet:w-16 tablet:h-16 tablet:py-2 desktop:py-0 desktop:w-32 desktop:h-32  rounded-full'
              />
            </div>
          </div>
          <div className='my-[1.5rem]'>
            <div className='flex flex-col tablet:flex-row justify-between items-center mb-5'>
              <h1 className='text-[#204c39] text-xl font-semibold font-poppins'>
                Organization
              </h1>
              <button className='flex justify-center items-center bg-[#0c691f] text-[#fff] px-5 py-2 font-semibold text-base rounded-xl w-full tablet:w-48'>
                Create Organization
              </button>
            </div>
            <h1 className='text-[1.5rem] text-gray-700  text-center mt-4'>
              The list of approved organizations appear here once they are
              available.
            </h1>
            <p className='text-[1.3rem] text-gray-600 italic text-center'>
              Kindly check back later
            </p>
          </div>

          <div className='absolute bottom-0 left-0 right-0 w-full flex flex-col tablet:flex tablet:flex-row items-center justify-between px-8 py-5 bg-[#fff] rounded-xl'>
            <Image
              src='/image/lasepa-logo.webp'
              alt=''
              width={100}
              height={100}
              className='w-48 mt-0 tablet:w-48 rounded-xl'
            />
            <div className='flex items-center gap-6 text-base text-gray-700 font-telex'>
                <p>Terms of Service</p>
                <p>Documents</p>
                <p>Contact Us</p>
            </div>
            <p className='text-base text-gray-700 font-telex italic'>© 2024. All Right Reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
