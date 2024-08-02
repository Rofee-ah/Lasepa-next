import Image from 'next/image';

const Footer = () => {
  return (
    <div className='bg-[#0c691f] min-h-fit py-6 flex flex-col gap-2'>
      <div className='max-w-[85%] mx-auto pt-[5rem]'>
        <div className='w-full flex justify-between'>
          <div className='tablet:w-1/4 tablet:flex tablet:flex-col tablet:gap-2'>
            <Image
              src='/image/lasepa-logo.webp'
              alt=''
              width={100}
              height={100}
              className='w-48 rounded-xl tablet:w-48 -mt-12 ml-16 absolute'
            />
        <div className='hidden tablet:hidden desktop:block '>
          <p className='text-white font-notoSans text-base tracking-widest italic mt-8'>
              Our platform allows organizations to create an account and easily
              source and manage carbon credits for their offsetting and
              compensation needs.
            </p>
          </div>
            
          </div>
          <div className='grid grid-cols-2 gap-2 tablet:-ml-40  tablet:flex tablet:gap-10 laptop:gap-28'>

          <div className='flex flex-col justify-start gap-3 text-white font-notoSans tracking-widest font-medium mt-10 tablet:mt-5'>
              <h1 className='text-2xl font-bold font-poppins'>Company</h1>
              <p className='hover:text-[#003314]'>About Us</p>
              <p className='hover:text-[#003314]'> Contact Us</p>
          </div>

          <div className='flex flex-col justify-start gap-3 text-white font-notoSans tracking-widest font-medium mt-10 tablet:mt-5'>
              <h1 className='text-2xl font-bold font-poppins'>Features</h1>
              <p className='hover:text-[#003314]'>Explore</p>
              <p className='hover:text-[#003314]'>Pricing </p>
              

          </div>

          <div className='flex flex-col justify-start gap-3 text-white font-notoSans tracking-widest font-medium mt-5'>
              <h1 className='text-2xl font-bold font-poppins'>Resources</h1>
              <p className='hover:text-[#003314]'>Help Center</p>
              <p className='hover:text-[#003314]'> Guide</p>
              <p className='hover:text-[#003314]'> FAQs</p>

          </div>
          <div className='flex flex-col justify-start gap-3 text-white font-notoSans tracking-widest font-medium mt-5'>
              <h1 className='text-2xl font-bold font-poppins'>Legal</h1>
              <p className='hover:text-[#003314]'>Terms of Service</p>
              <p className='hover:text-[#003314]'>Private Policy </p>
              <p className='hover:text-[#003314]'>Cookies Policy </p>

          </div>
          </div>
          

        </div>
      </div>

      <div className='text-white flex flex-col items-center gap-3 pt-[3rem]'>
          <hr className='text-white h-[2px] w-[300px] mt-14 ml-3 laptop:w-[1400px] laptop:ml-36' />
          <p className='text-white  text-md mt-10 ml-10 laptop:ml-[150px]'>
          © 2024 by lasepa. All right reserved
        </p>
          </div>

    </div>
  );
};

export default Footer;
