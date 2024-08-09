'use client';
import react, { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import Link from 'next/link';
import validator from 'validator';
import { useRouter } from 'next/navigation';
import Header from '@/component/Header';
// import { headers } from 'next/headers';

const page = () => {
  const data = {
    email: '',
    password: '',
  };
  const validateText = (text, fieldName) => {
    if (validator.isEmpty(text.toString())) {
      return `${fieldName || ''} is required`;
    }
    return null;
  };
  const baseUrl = 'https://carbonregistry-dev.up.railway.app';
  const router = useRouter();

  const [variables, setVariables] = useState(data);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(data);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (value, attr) => {
    const form = { ...variables };
    form[attr] = value;
    setVariables(form);
  };

  const triggerCreate = () => {
    setLoading(true);
    axios
      .post(`${baseUrl}/auth/login`, variables, {
        headers: {'Content-Type': 'application/json'}
      })
      .then((response) => {
        setLoading(false);
        toast.success(response.data.message);
        router.push('/dashboard');
      })
      .catch((error) => {
        setLoading(false);
        toast.error(error?.response?.data?.message);
      });
  };
  
  useEffect(() => {
    if (
      error &&
      Object.values(error).every((value) => value === null) &&
      isSubmitting
    ) {
      triggerCreate();
    }
    return () => {
      setIsSubmitting(false);
    };
  }, [error, isSubmitting, triggerCreate]);
  const validateFields = (fields) => ({
    email: validateText(fields?.email || '', 'email'),
    password: validateText(fields?.password || '', 'password'),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(validateFields(variables));
    setIsSubmitting(true);
  };

  return (
    <div>
      <Header />
      <div className=' bg-[#ebedf5] w-full h-screen pt-[25%] tablet:pt-[6%]'>
        <div className='max-w-[90%] tablet:max-w-[70%] mx-auto w-[85%] tablet::w-[60%] desktop:w-[30%]'>
          <h1 className=' text-center mb-8 font-telex text-xl tablet:text-2xl'>
            {' '}
            Create an account or login into an existing account
          </h1>
          <div className='border-b-2 pb-6 border-gray-500 mb-5 whitespace-nowrap'>
            <input
              disabled
              id='Sign In With Google'
              name='Sign In With Google'
              placeholder='Sign In With Google'
              className='w-full flex justify-center text-center items-center gap-2 p-2 bg-[#fff] rounded-xl hover:opacity-60 placeholder:text-black caret-black text-white cursor-pointer '
            />
          </div>
          <div className='flex flex-col justify-start gap-2 mb-2'>
            <label className='font-medium text-[#6a7281] text-sm ml-3'>
              Email
            </label>
            <input
              type='text'
              name='fname'
              placeholder='mail@example.com'
              value={variables.email}
              onChange={(e) => handleChange(e.target.value, 'email')}
              className='p-2 bg-[#fff] rounded-xl focus:outline-none focus:ring-2 focus:ring-green-800 focus:border-transparent border-none'
            />
            {error?.email && (
              <p className='ml-5 text-sm italic  text-red-600'>{error.email}</p>
            )}
          </div>
          <div className='flex flex-col justify-start gap-2 mb-2'>
            <label className='font-medium text-[#6a7281] text-sm ml-3'>
              Password
            </label>
            <input
              type='password'
              name='fname'
              placeholder='Enter your password'
              value={variables.password}
              onChange={(e) => handleChange(e.target.value, 'password')}
              className='p-2 bg-[#fff] rounded-xl focus:outline-none focus:ring-2 focus:ring-green-800 focus:border-transparent border-none w-full pr-10'
            />
            {error?.password && (
              <p className='ml-5 text-sm italic  text-red-600'>
                {error.email}
                {error.password}
              </p>
            )}
          </div>
          <button
            className='bg-[#117031] w-full p-2 rounded-xl mt-6 text-white font-semibold hover:opacity-80'
            onClick={handleSubmit}>
            {loading ? 'Processing...' : 'Sign In'}
          </button>
          <div className='flex justify-between items-center w-full mt-3 text-slate-600'>
            <p className='hover:opacity-60 text-[13px]'>Forget password</p>
            <p className='font-telex text-[13px] tablet:text-base text-center font-medium'>
              <Link href='/signup'> Don't have an account?</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
