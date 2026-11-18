export default function Sidebar({ position }) {
    const image = position === "left" ? "/banners/left-banner.jpg" : "/banners/right-banner.jpeg";

    return (
        <aside className="sidebar">
            <img src={image}/>
        </aside>
    );
}
