

const Values = () => {
  return (
    <div className="max-w-[85%] mx-auto flex flex-col items-center pb-[5rem]">
        <div className="flex flex-col justify-center items-center gap-5 mb-[4rem]">
            <div className="bg-gray-200 px-6 py-1 rounded-3xl font-rubik font-bold">
            <p>Values</p>
            </div>
            <h1 className="text-2xl tablet:text-4xl font-poppins font-bold">Our Values</h1>
             <p className="text-base tablet:text-lg font-medium tracking-wide text-gray-500 font-notoSans">Breaking down barriers</p>
        </div>

        <div className="grid grid-cols-1 laptop:grid-cols-3 gap-14">

            <div className="flex flex-col items-center gap-2">
                    <h1 className="text-xl tablet:text-2xl font-bold font-poppins tracking-normal">Trustworthy</h1>
                    <p className="text-center font-notoSans text-base tablet:text-xl text-gray-600">We're dedicated to enhancing registration process efficiency,
                     addressing a key barrier in the voluntary carbon market.</p>
            </div>

            <div className="flex flex-col items-center gap-2">
                    <h1 className="text-xl tablet:text-2xl font-bold font-poppins tracking-normal">Trustworthy</h1>
                    <p className="text-center font-notoSans text-base tablet:text-xl text-gray-600">We're dedicated to enhancing registration process efficiency,
                     addressing a key barrier in the voluntary carbon market.</p>
            </div>

            <div className="flex flex-col items-center gap-2">
                    <h1 className="text-xl tablet:text-2xl font-bold font-poppins tracking-normal">Trustworthy</h1>
                    <p className="text-center font-notoSans text-base tablet:text-xl text-gray-600">We're dedicated to enhancing registration process efficiency,
                     addressing a key barrier in the voluntary carbon market.</p>
            </div>



        </div>


    </div>
  )
}

export default Values