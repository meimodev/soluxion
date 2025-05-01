import {useEffect} from "react";
import ReactPixel from "react-facebook-pixel";

interface PixelTrackerProps {
    pixelId?: string;
}

const PixelTracker: React.FC<PixelTrackerProps> = ({pixelId}) => {
    useEffect(() => {
        ReactPixel.init(pixelId ?? "");
        ReactPixel.pageView();
    }, []);
    return null;
};
export default PixelTracker;
