import React from "react";
type InfoProps = {
  icon: string;
  title: string;
};
const CarInfo = ({ icon, title }: InfoProps) => {
  console.log(icon, title);
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <img src={icon} alt="icon" width={25} />
      <p className="text-[14px]">{title}</p>
    </div>
  );
};

export default CarInfo;
