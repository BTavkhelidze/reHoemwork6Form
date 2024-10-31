import Form from './Form';
import astronaut from '../assets/astronaut.png';
import Ellipse from '../assets/Ellipse.png';

const HookForm = () => {
  return (
    <section className='p-[20px] flex formBackground formShadow formBorder gap-[30px] max-w-[1256px] w-full mx-auto rounded-[20px] '>
      <div className='max-w-[506px] w-full p-10 '>
        <h3 className='font-semibold text-[30px] leading-[36.3px] text-white '>
          Let’s connect constellations
        </h3>
        <p className='font-normal text-[16px] leading-[19.36px] grayText mt-[10px]'>{`
          Let's align our constellations! Reach out and let the magic of
          collaboration illuminate our skies.
        `}</p>
        <Form />
      </div>
      <div className='relative max-w-[516px] min-h-[536px] h-full w-full  flex flex-col justify-end '>
        <img
          src={astronaut}
          alt='astronaut image'
          className=' absolute w-full h-full -z-10'
        />
        <div className='pl-[28px] pr-[22px] pb-[48px] flex flex-col gap-[6px]'>
          <p className='grayText font-normal text-[16px] leading-[19.36px] grayText '>
            “Two lunar months revealed Earth's fragile beauty against vast
            silence, transforming my view of our place in the universe.
          </p>
          <span className='grayText font-medium text-[16px] leading-[19.36px] '>
            Irinel Traista
          </span>
        </div>
      </div>
      <div className='self-center justify-self-center max-w-[131px] w-full'>
        <img src={Ellipse} alt='' className='w-full h-dull' />
      </div>
    </section>
  );
};

export default HookForm;
