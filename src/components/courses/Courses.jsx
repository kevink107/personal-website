import "./courses.scss"

export default function Courses({ courses, setCourses }) {
    return (
        <div className="courses" id="courses">
            <ul>
                <h1>Courses</h1>
                <li>
                    <a 
                        href="http://dartmouth.smartcatalogiq.com/current/orc/Departments-Programs-Undergraduate/Computer-Science/COSC-Computer-Science-Undergraduate/COSC-50">
                        Software Design and Implementation
                    </a>
                </li>
                <li>
                    <a
                        href="http://dartmouth.smartcatalogiq.com/current/orc/Departments-Programs-Undergraduate/Computer-Science/COSC-Computer-Science-Undergraduate/COSC-51">
                        Computer Architecture
                    </a>
                </li>
                <li>
                    <a
                        href="http://dartmouth.smartcatalogiq.com/current/orc/Departments-Programs-Undergraduate/Computer-Science/COSC-Computer-Science-Undergraduate/COSC-74">
                        Machine Learning and Statistical Data Analysis
                    </a>
                </li>
                <li>
                    <a
                        href="http://dartmouth.smartcatalogiq.com/current/orc/Departments-Programs-Undergraduate/Computer-Science/COSC-Computer-Science-Undergraduate/COSC-10">
                        Problem Solving via Object-Oriented Programming
                    </a>
                </li>
                <li>
                    <a
                        href="https://engineering.dartmouth.edu/courses/engs22">
                        Systems Engineering
                    </a>
                </li>
                <li>
                    <a
                        href="https://engineering.dartmouth.edu/courses/engs25">
                        Introduction to Thermodynamics
                    </a>
                </li>
                <li>
                    <a
                        href="http://dartmouth.smartcatalogiq.com/current/orc/Departments-Programs-Undergraduate/Mathematics/MATH-Mathematics-Undergraduate/MATH-22">
                        Linear Algebra with Applications
                    </a>
                </li>
                <li>
                    <a
                        href="http://dartmouth.smartcatalogiq.com/current/orc/Departments-Programs-Undergraduate/Mathematics/MATH-Mathematics-Undergraduate/MATH-11">
                        Accelerated Multivariable Calculus
                    </a>
                </li>
            </ul>
        </div>
    )
}
