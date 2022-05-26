import "./courses.scss"

export default function Courses({ courses, setCourses }) {
    return (
        <div className="courses" id="courses">
            {/* each list item contains hyperlink href and a title for the course*/}
            <ul>
                <h1>Courses</h1>
                <li>
                    <a
                        href="http://dartmouth.smartcatalogiq.com/current/orc/Departments-Programs-Undergraduate/Computer-Science/COSC-Computer-Science-Undergraduate/COSC-10">
                        COSC 10: Problem Solving via Object-Oriented Programming
                    </a>
                </li>
                <li>
                    <a 
                        href="http://dartmouth.smartcatalogiq.com/current/orc/Departments-Programs-Undergraduate/Computer-Science/COSC-Computer-Science-Undergraduate/COSC-50">
                        COSC 50: Software Design and Implementation
                    </a>
                </li>
                <li>
                    <a
                        href="http://dartmouth.smartcatalogiq.com/current/orc/Departments-Programs-Undergraduate/Computer-Science/COSC-Computer-Science-Undergraduate/COSC-51">
                        COSC 51: Computer Architecture
                    </a>
                </li>
                <li>
                    <a
                        href="http://dartmouth.smartcatalogiq.com/current/orc/Departments-Programs-Undergraduate/Computer-Science/COSC-Computer-Science-Undergraduate/COSC-74">
                        COSC 74: Machine Learning and Statistical Data Analysis
                    </a>
                </li>
                <li>
                    <a
                        href="https://engineering.dartmouth.edu/courses/engs22">
                        ENGS 22: Systems
                    </a>
                </li>
                <li>
                    <a
                        href="https://engineering.dartmouth.edu/courses/engs25">
                        ENGS 25: Introduction to Thermodynamics
                    </a>
                </li>
                <li>
                    <a
                        href="http://dartmouth.smartcatalogiq.com/current/orc/Departments-Programs-Undergraduate/Mathematics/MATH-Mathematics-Undergraduate/MATH-11">
                        MATH 11: Accelerated Multivariable Calculus
                    </a>
                </li>
                <li>
                    <a
                        href="http://dartmouth.smartcatalogiq.com/current/orc/Departments-Programs-Undergraduate/Mathematics/MATH-Mathematics-Undergraduate/MATH-22">
                        MATH 22: Linear Algebra with Applications
                    </a>
                </li>
            </ul>
        </div>
    )
}
