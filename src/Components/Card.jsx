
const Card = ({ title, description, icon }) => {
  return (
    <div className="flex items-start gap-3">
      {icon && icon}
      <div>
        <h3 className="font-jost text-[18px] tracking-[6%] uppercase text-text dark:text-text-dark text-nowrap mb-1">{title}</h3>
        <p className="font-lato font-light text-[12px] text-paragraph dark:text-paragraph-dark tracking-[3%] leading-[138%]">{description}</p>
      </div>
    </div>
  );
};

export default Card;
