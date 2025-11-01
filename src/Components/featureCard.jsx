const FeatureCard = ({ title, description, icon }) => {
  return (
    <div className="flex  gap-3.5">
      {icon && (
        <img
          src={`/src/assets/Icons/${icon}`}
          alt={title}
          className="size-7 mt-1"
        />
      )}
      <div>
        <h3 className="font-family-jost text-[18px] tracking-[6%] uppercase text-text dark:text-text-dark text-nowrap mb-1">
          {title}
        </h3>
        <p className="font-family-lato font-light text-[12px] text-paragraph dark:text-paragraph-dark tracking-[3%] leading-[138%]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
