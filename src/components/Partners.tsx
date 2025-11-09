import Marquee from 'react-fast-marquee';

const logoList = [
  '/ticket_tailor_logo.svg',
  '/loveholidays_logo.svg',
  '/chowdeck_logo.svg',
  '/moneybox_logo.svg',
  '/garanti_bbva_logo.svg',
  '/slack.svg',
];

const Partners = () => {
  console.log(logoList);
  return (
    <section className='py-16 flex flex-col items-center bg-white'>
      <h3 className='text-sm md:text-lg leading-8 text-gray-text'>
        Trusted by growing brands around the globe
      </h3>
      <div className='mx-4 md:mx-20'>
        <Marquee
          className='mt-10 flex items-center w-dvw!'
          pauseOnHover={true}
          speed={50}
          gradient={true}
        >
          {logoList.map((logo, index) => (
            <div key={index} className='mx-10'>
              <img src={logo} />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Partners;
