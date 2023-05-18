// eslint-disable-next-line react/prop-types
export const Button = ({ className, children, onClick ,hidden}) => {
  return (
    <button className={className} onClick={onClick} hidden={hidden}>
      {children || ""}
    </button>
  );
};

// "cta btn  dark:hover:bg-slate-200 dark:bg-[#514d4bfc] sm:text-xl"
