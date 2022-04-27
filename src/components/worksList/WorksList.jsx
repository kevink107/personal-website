import "./worksList.scss"

export default function WorksList({id, title, active, setSelected}) {
    return (
        <li 
            className={active ? "worksList active" : "worksList"} 
            onClick={() => setSelected(id)}>
            {title}
        </li>
    )
}
