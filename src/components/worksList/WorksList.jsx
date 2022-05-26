import "./worksList.scss"

export default function WorksList({id, title, active, setSelected, link}) {
    return (
        // css file has different styling when worksList is active
        <li 
            className={active ? "worksList active" : "worksList"} 
            onClick={() => setSelected(id)}>
            {title}
        </li>
    )
}
