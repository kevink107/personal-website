import "./courseList.scss"

export default function CourseList({id, title, url}) {
    return (
        <li>
            <a
                href={url}>
                {title}
            </a>
        </li>
    )
}