'use client';
import { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import validator from 'validator';
import axios from 'axios';
import Link from 'next/link';
import Header from '@/component/Header';

const page = () => {
  const data = {
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    gender: '',
    password: '',
    confirm_password: '',
  };
  const validateText = (text, fieldName) => {
    if (validator.isEmpty(text.toString())) {
      return `${fieldName || ''} is required`;
    }
    return null;
  };

  const validatePassword = (value, fieldName) => {
    if (
      !validator.isStrongPassword(value, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      return `${
        fieldName || ''
      } is not strong enough, password must contain a min of 8 character, 1 lowercase, 1 uppercase, 1 number and 1 symbol`;
    }
    return null;
  };
  const baseUrl = 'https://carbonregistry-dev.up.railway.app';
  const [variables, setVariables] = useState(data);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(data);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (value, attr) => {
    const form = { ...variables };
    form[attr] = value;
    setVariables(form);

    if (attr === 'password') {
      validatePassword(value);
    }
  };

  const triggerCreate = () => {
    setLoading(true);

    axios
      .post(`${baseUrl}/auth/register`, variables)
      .then((response) => {
        setLoading(false);
        toast.info(response.data.message);
        console.log(response.data);
      })
      .catch((error) => {
        setLoading(false);
        toast.error(error?.response?.data?.message);
        console.log(error);
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
    first_name: validateText(fields?.first_name || '', 'first_name'),
    last_name: validateText(fields?.last_name || '', 'last_name'),
    email: validateText(fields?.email || '', 'email'),
    phone: validateText(fields?.phone || '', 'phone'),
    gender: validateText(fields?.gender || '', 'gender'),
    password: validatePassword(fields?.password || '', 'password'),
    confirm_password:
      fields.password === fields.confirm_password
        ? null
        : 'Confirm Password does not match the provided password',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(validateFields(variables));
    setIsSubmitting(true);
  };
  return (
    <div>
      <Header />
      <div className='bg-[#ebedf5] w-full h-fit pt-[12%] pb-[15%] tablet:pt-[4%] tablet:pb-[5%]'>
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
              First Name
            </label>
            <input
              type='text'
              name='fname'
              placeholder='firstName'
              value={variables.first_name}
              onChange={(e) => handleChange(e.target.value, 'first_name')}
              className='p-2 bg-[#fff] rounded-xl focus:outline-none focus:ring-2 focus:ring-green-800 focus:border-transparent border-none'
            />
            {error?.first_name && (
              <p className='ml-5 text-sm italic  text-red-600'>
                {error.first_name}
              </p>
            )}
          </div>
          <div className='flex flex-col justify-start gap-2 mb-2'>
            <label className='font-medium text-[#6a7281] text-sm ml-3'>
              Last Name
            </label>
            <input
              type='text'
              name='fname'
              value={variables.last_name}
              onChange={(e) => handleChange(e.target.value, 'last_name')}
              placeholder='Last Name'
              className='p-2 bg-[#fff] rounded-xl focus:outline-none focus:ring-2 focus:ring-green-800 focus:border-transparent border-none w-full pr-10'
            />
            {error?.last_name && (
              <p className='ml-5 text-sm italic  text-red-600'>
                {error.last_name}
              </p>
            )}
          </div>
          <div className='flex flex-col justify-start gap-2 mb-2'>
            <label className='font-medium text-[#6a7281] text-sm ml-3'>
              Email
            </label>
            <input
              type='text'
              name='email'
              value={variables.email}
              onChange={(e) => handleChange(e.target.value, 'email')}
              placeholder='mail@example'
              className='p-2 bg-[#fff] rounded-xl focus:outline-none focus:ring-2 focus:ring-green-800 focus:border-transparent border-none w-full pr-10'
            />
            {error?.email && (
              <p className='ml-5 text-sm italic  text-red-600'>{error.email}</p>
            )}
          </div>

          <div className='flex flex-col justify-start gap-2 mb-2'>
            <label className='font-medium text-[#6a7281] text-sm ml-3'>
              Phone
            </label>
            <input
              type='text'
              name='phone'
              value={variables.phone}
              onChange={(e) => handleChange(e.target.value, 'phone')}
              placeholder='0000444400'
              className='p-2 bg-[#fff] rounded-xl focus:outline-none focus:ring-2 focus:ring-green-800 focus:border-transparent border-none w-full pr-10'
            />
            {error?.phone && (
              <p className='ml-5 text-sm italic  text-red-600'>{error.phone}</p>
            )}
          </div>
          <div className='flex flex-col justify-start gap-2 mb-2'>
            <label className='font-medium text-[#6a7281] text-sm ml-3'>
              Gender
            </label>

            <select
              onChange={(e) => handleChange(e.target.value, 'gender')}
              className='p-2 bg-[#fff] rounded-xl focus:outline-none focus:ring-2 focus:ring-green-800 focus:border-transparent border-none w-full pr-8'>
              <option></option>
              <option value={variables.female}>Female</option>
              <option value={variables.male}>Male</option>
            </select>
            {error?.gender && (
              <p className='ml-5 text-sm italic  text-red-600'>
                {error.gender}
              </p>
            )}
          </div>
          <div className='flex flex-col justify-start gap-2 mb-2'>
            <label className='font-medium text-[#6a7281] text-sm ml-3'>
              Password
            </label>
            <input
              type='password'
              name='fname'
              value={variables.password}
              onChange={(e) => handleChange(e.target.value, 'password')}
              placeholder='Enter your password'
              className='p-2 bg-[#fff] rounded-xl focus:outline-none focus:ring-2 focus:ring-green-800 focus:border-transparent border-none w-full pr-10'
            />
            {error?.password && (
              <p className='ml-5 text-sm italic  text-red-600'>
                {error.password}
              </p>
            )}
          </div>
          <div className='flex flex-col justify-start gap-2 mb-2'>
            <label className='font-medium text-[#6a7281] text-sm ml-3'>
              Comfirmed Password
            </label>
            <input
              type='password'
              name='fname'
              value={variables.confirm_password}
              onChange={(e) => handleChange(e.target.value, 'confirm_password')}
              placeholder='Comfirmed your password'
              className='p-2 bg-[#fff] rounded-xl focus:outline-none focus:ring-2 focus:ring-green-800 focus:border-transparent border-none w-full pr-10'
            />
            {error?.confirm_password && (
              <p className='ml-5 text-sm italic  text-red-600'>
                {error.confirm_password}
              </p>
            )}
          </div>
          <button
            className='bg-[#117031] w-full p-2 rounded-xl mt-6 text-white font-semibold hover:opacity-80'
            onClick={handleSubmit}>
            {loading ? 'Processing...' : 'Sign In'}
          </button>
          <p className='font-telex text-base mt-4 text-center font-medium text-slate-600'>
            Already have an account? <Link href='/login'>Sign In</Link>
          </p>
          {/* <p className="font-telex text-sm tablet:text-base text-center font-medium">Don't have an account?signup</p> */}
        </div>
      </div>
    </div>
  );
};

export default page;
