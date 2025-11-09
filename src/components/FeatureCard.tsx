interface Props {
  id: string;
  title: string;
  details: string;
  image: string;
}

const FeatureCard = ({ feature }: { feature: Props }) => {
  const { title, details, image } = feature;
  return (
    <section className='border-[0.5px] border-[#D8D8D8] bg-[#FBFBFB] p-8 md:p-10 rounded-3xl flex flex-col'>
      <article>
        <h3 className='text-black text-2xl lg::text-[32px]'>{title}</h3>
        <p className='text-[#3C3C3C] pt-2 font-light text-sm lg:text-base'>
          {details}
        </p>
      </article>

      <div className='mt-10 flex items-end justify-center flex-1 h-full'>
        <img src={image} />
      </div>
    </section>
  );
};

export default FeatureCard;
