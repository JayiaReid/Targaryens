import { useEffect, useRef } from "react";

export default function Thumbnails({ title, imgurl, description, isActive }) {
    const thumbnailRef = useRef(null);
    //make sure it is in viewport
    useEffect(() => {
        if (isActive && thumbnailRef.current) {
            thumbnailRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'center',
            });
        }
    }, [isActive]);

    return(
        <div className={`t_item ${isActive ? 'activeT' : ''}`} ref={isActive ? thumbnailRef : null}>
        <img src={imgurl}/>
        <div className="t_content">
            <div className="t_title">
                {title}
            </div>
            <div className="t_description">
                <i>alt:</i> {description}
            </div>
        </div>
    </div>
    );
}