const Mission = () => {
  return (
    <section className='bg-primary-600 py-20 md:py-30 bg-[url("/mission_bg.svg")]  flex items-start gap-2 md:gap-6 justify-center px-4 md:px-0'>
      <img src='/quote.svg' alt='quotes' />
      <h2 className='text-white text-lg md:text-[40px] md:w-[65%] mt-5'>
        We empower businesses to make informed financial decisions by providing
        powerful tools to manage spending, track procurement, and ensure budget
        control – all from one intuitive platform.
      </h2>
    </section>
  );
};

export default Mission;
