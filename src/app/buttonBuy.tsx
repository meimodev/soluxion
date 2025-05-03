import React from 'react';

interface ButtonBuyProps {
    link: string;
    colors?: string[];
    className: string;
    children?: React.ReactNode;
}

const ButtonBuy: React.FC<ButtonBuyProps> = ({link, className}) => {
    // const [colorIndex, setColorIndex] = useState(0);

    // const internalColors = colors ?? ['bg-blue-700', 'bg-green-700', 'bg-blue-900', "bg-green-900",];
    //
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setColorIndex((prevIndex) => (prevIndex + 1) % internalColors.length);
    //     }, 1000); // Change color every 1 second
    //
    //     return () => clearInterval(interval); // Clean up the interval when the component unmounts
    // }, []);

    const handleClick = () => {
        window.open(link, '_blank'); // Open the provided link in a new tab
    };

    return (
        // <button
        //     className={`animate-bounce px-6 py-3 text-white font-bold transition-colors duration-1000 ease-in-out ${internalColors[colorIndex]} ${className}`}
        //     onClick={handleClick} // Handle click to open the link
        // >
        //     {children ?? <p>BELI SEKARANG</p>}
        // </button>
        <div className="  my-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                className={` text-white font-bold transition  duration-400 ease-in-out cursor-pointer hover:scale-125 ${className}`}
                aria-hidden
                src="/click.gif"
                alt="Click to order"
                onClick={handleClick}
            />
        </div>

    );
};

export default ButtonBuy;