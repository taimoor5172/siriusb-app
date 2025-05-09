import { useState } from "react";
import Image from "next/image";
import { ProductCardProps } from "../interfaces/product-card";

export const ProductCard: React.FC<ProductCardProps> = ({ title, icon, description, features }) => {
    const [isExpanded, setIsExpanded] = useState(false);
  
    const toggleExpand = () => {
      setIsExpanded(!isExpanded);
    };
  
    return (
      <div 
        className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center"
        onClick={toggleExpand}
      >
        <div className="bg-gray-50 p-8 rounded-full mb-6 w-32 h-32 flex items-center justify-center">
          <Image src={icon} alt={title} width={48} height={48} className="h-12 w-auto" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{title}</h2>
  
        {isExpanded && (
          <div className="mt-4 animate-fadeIn">
            <p className="text-gray-700 mb-4">{description}</p>
            <div className="mt-4">
              <h3 className="font-semibold mb-2 text-green-800">Key Features:</h3>
              <ul className="text-gray-700">
                {features.map((feature, index) => (
                  <li key={index} className="mb-1">{feature}</li>
                ))}
              </ul>
            </div>
            <button className="mt-6 bg-green-800 text-white px-6 py-2 rounded hover:bg-green-700 transition-colors">
              Learn More
            </button>
          </div>
        )}
      </div>
    );
  };
