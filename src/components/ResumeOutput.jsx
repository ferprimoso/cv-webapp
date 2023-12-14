import { FaEnvelope } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { FaHouse } from "react-icons/fa6";




export default function ResumeOutput({ person, educationArray, experienceArray }) {

    return (
        <div className="resume-container">
            <header className="resume-header">
                <h1>{person.name}</h1>

                <div className="resume-info">
                    <div>
                        <FaEnvelope />
                        <span> {person.email} </span>
                    </div>
                    <div>
                        <FaPhone />
                        <span>{person.number} </span>
                    </div>
                    <div>
                        <FaHouse />
                        <span>{person.address} </span>
                    </div>
                </div>
            </header>

            <div className="resume-body">

                <section className="education-section">
                    <div className="section-header">
                        <h2>Education</h2>
                    </div>

                    {educationArray.map((education) => {
                        return (
                            <div key={education.school} className="education-block">
                                <div className="education-date">
                                    <span>{education.startdate} - {education.enddate}</span>
                                    <br />
                                    <span>{education.location}</span>
                                </div>
                                <div className="education-school">
                                    <h3>{education.school}</h3>
                                    <span>{education.degree}</span>
                                </div>
                            </div>

                        )
                    }
                    )}
                </section>


                <section className="experience-section">
                    <div className="section-header">
                        <h2>Professional Experience</h2>
                    </div>

                    {experienceArray.map((experience) => {
                        return (
                            <div key={experience.company} className="education-block">
                                <div className="education-date">
                                    <span>{experience.startdate} - {experience.enddate}</span>
                                    <br />
                                    <span>{experience.location}</span>
                                </div>
                                <div className="education-school">
                                    <h3>{experience.company}</h3>
                                    <span>{experience.position}</span>
                                    <p>{experience.description}</p>
                                </div>
                            </div>

                        )
                    }
                    )}
                </section>


            </div>

        </div>
    )
}