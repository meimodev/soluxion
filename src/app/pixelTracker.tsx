import {useEffect} from "react";
import ReactPixel from "react-facebook-pixel";

const PixelTracker = () => {
    useEffect(() => {
        ReactPixel.init("1370812530897979");
        ReactPixel.pageView();
    }, []);
    return null;
};
export default PixelTracker;
