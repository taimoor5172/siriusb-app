import Image from 'next/image';
import { FounderCardProps } from "../props/founder-props";

const FounderCard: React.FC<FounderCardProps> = ({ imageSrc, name, title, quote }) => {
    return (
      <div className="flex flex-col items-center p-4 shadow-md rounded-2xl">
        <Image src={imageSrc} alt={name} width={96} height={96} className="w-24 h-24 rounded-full mb-2" />
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-center italic text-sm mt-2">&ldquo;{quote}&rdquo;</p>
      </div>
    );
  };
  
  export default FounderCard;