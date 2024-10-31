import sendToMoon from '../assets/sendtoMoon.svg';

export default function Form() {
  return (
    <form action='' className='flex-col flex gap-[14px] mt-[41px] '>
      <div className='flex gap-[14px]'>
        <div className='flex flex-1'>
          <label htmlFor='name'></label>
          <input
            className='flex-1 py-[12px] pl-[14px] border rounded-[5px]  text-white border-opacity-30 outline-none formBackground inputBorder'
            id='name'
            placeholder='Last Name'
          />
        </div>
        <div className='flex flex-1'>
          <label htmlFor='firstName'></label>
          <input
            className='flex-1 py-[12px] pl-[14px] border rounded-[5px]  text-white border-opacity-30 outline-none formBackground inputBorder'
            id='firstName'
            placeholder='First Name'
          />
        </div>
      </div>

      <div className='flex flex-1 w-full'>
        <label htmlFor='email'></label>
        <input
          type='email'
          className='flex-1 py-[12px] pl-[14px] border rounded-[5px]  text-white border-opacity-30 outline-none formBackground inputBorder'
          id='email'
          placeholder='Email'
        />
      </div>
      <div className='flex flex-1 w-full'>
        <label htmlFor='phone'></label>
        <input
          type='tel'
          className='flex-1 py-[12px] pl-[14px] border rounded-[5px]  text-white border-opacity-30 outline-none formBackground inputBorder'
          id='phone'
          placeholder='Phone'
        />
      </div>
      <div className='flex flex-1 w-full'>
        <textarea
          type='text'
          className='flex-1 py-[12px] pl-[14px] border rounded-[5px]  text-white border-opacity-30 outline-none formBackground inputBorder'
          id='message'
          placeholder='Message'
        />
      </div>
      <div className='flex flex-1 w-full  '>
        <button className='  rounded-[5px]  text-black  flex flex-1 w-full items-center justify-center gap-[10px] py-[12px] buttonBackground text-[15px] leading-[18.2px] text-white font-medium'>
          Send it to the moon{' '}
          <img className='' src={sendToMoon} alt='send to moon' />
        </button>
      </div>
    </form>
  );
}
