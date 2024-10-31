import HookForm from './components/HookForm';

const App = () => {
  return (
    <main className='mainColor mx-auto flex flex-col min-h-screen'>
      <section className='mx-aut text-center py-[67px]'>
        <h2 className='text-white mb-[7px] font-extrabold text-[81.85px] text-background-h2 leading-[99px]'>
          Get in <span className='gradient-text'>touch</span>{' '}
        </h2>
        <p className='text-[#ffffff] text-[22px] font-medium leading-[26.6px] text-mainColor'>{`Reach out, and let's create a universe of possibilities together!`}</p>
      </section>

      <HookForm />
    </main>
  );
};

export default App;
