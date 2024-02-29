
export default function Thumbnails({ title, imgurl, description, isActive }) {
    return(
        <div className={`t_item ${isActive ? 'activeT' : ''}`}>
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