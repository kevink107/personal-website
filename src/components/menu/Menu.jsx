import "./menu.scss"

export default function Menu({ menuOpen, setMenuOpen }) {
    return (
        <div className={"menu " + (menuOpen && "active") }>
            {/* each list item is one of the sections */}
            <ul>
                {/* menu closes when an item is clicked */}
                <li onClick={()=>setMenuOpen(false)}>
                    {/* hyperlink to each page */}
                    <a href="#intro">Home</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#works">Works</a>
                </li >
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#courses">Courses</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#photos">Photos</a>
                </li>
            </ul>
        </div>

    )
}
