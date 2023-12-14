import { FaAngleDown } from "react-icons/fa6";
import { FaBriefcase } from "react-icons/fa6";
import { FaPenToSquare } from "react-icons/fa6";
import { useState } from 'react'
import AddButton from "../Buttons/AddButton";
import CancelButton from "../Buttons/CancelButton";
import SaveButton from "../Buttons/SaveButton";
import DeleteButton from "../Buttons/DeleteButton";





export default function ExperienceCard({ experienceArray, updateExperienceArray, deleteExperience, addExperience }) {
    const [isActive, setActive] = useState("false");
    const [isActiveEdit, setActiveEdit] = useState("false");
    const [currentExperience, setCurrentExperience] = useState({ id: '', company: '', position: '', startdate: '', enddate: '', location: '', description: '' });


    const handleToggle = () => {
        setActive(!isActive);
    };

    const handleToggleEdit = (id) => {
        const currentKey = id
        setCurrentExperience(experienceArray.find(ex => ex.id === currentKey))
        setActiveEdit(!isActiveEdit);
    };

    const handleToggleAdd = () => {
        setActiveEdit(!isActiveEdit);
    }

    const updateCurrentExp = (e) => {
        const dataKey = e.target.getAttribute('data-key');

        setCurrentExperience({
            ...currentExperience,
            [dataKey]: e.target.value
        });
    }

    const resetCurrentExp = () => {
        setCurrentExperience({ id: '', company: '', position: '', startdate: '', enddate: '', location: '', description: '' })
        setActiveEdit('false')
    }

    const saveCurrentExp = () => {
        if (currentExperience.id === '') {
            addExperience(currentExperience)
            resetCurrentExp()
        } else {
            updateExperienceArray(currentExperience)
            resetCurrentExp()
        }
    }

    const deleteCurrentExp = () => {
        if (currentExperience.id === '') {
            resetCurrentExp()
        } else {
            deleteExperience(currentExperience)
            resetCurrentExp()
        }
    }

    return (

        <form className="card">
            <div className="card-heading">
                <h1><FaBriefcase />Experience</h1>
                <FaAngleDown size={'2rem'} onClick={handleToggle} className={isActive ? 'icon' : 'icon-open'} />
            </div>
            <div className={isActive ? 'item-container' : 'item-container open'}>


                <div className={isActiveEdit ? null : 'hidden'}>

                    {experienceArray.map((experience) => {
                        return (
                            <div type='button' key={experience.id} data-key={experience.id} className="education-item" onClick={() => handleToggleEdit(experience.id)} >
                                <h3>{experience.company}</h3>
                                <FaPenToSquare size={'1.5rem'} />
                            </div>
                        )
                    }
                    )}

                    <AddButton
                        string={'Experience'}
                        onClick={handleToggleAdd}
                    />

                </div>

                <div className={isActiveEdit ? 'hidden' : 'edit-container'}>
                    <br />
                    <div className="input-field">
                        <span>Company:</span>
                        <input type="text" value={currentExperience.company} key='company' data-key='company' onChange={updateCurrentExp} />
                    </div>
                    <div className="input-field">
                        <span>Position:</span>
                        <input type="text" key='position' data-key='position' value={currentExperience.position} onChange={updateCurrentExp} />
                    </div>
                    <div className="input-field">
                        <span>Start Date:</span>
                        <input type="text" key='startdate' data-key='startdate' value={currentExperience.startdate} onChange={updateCurrentExp} />
                    </div>
                    <div className="input-field">
                        <span>End Date:</span>
                        <input type="text" key='enddate' data-key='enddate' value={currentExperience.enddate} onChange={updateCurrentExp} />
                    </div>
                    <div className="input-field">
                        <span>Location:</span>
                        <input type="text" key='location' data-key='location' value={currentExperience.location} onChange={updateCurrentExp} />
                    </div>
                    <div className="input-field">
                        <span>Description:</span>
                        <input type="text" key='description' data-key='description' value={currentExperience.description} onChange={updateCurrentExp} />
                    </div>



                    <div className="buttons-container">

                        <DeleteButton onClick={deleteCurrentExp} />
                        <CancelButton onClick={resetCurrentExp} />
                        <SaveButton onClick={saveCurrentExp} />

                    </div>

                </div>

            </div>




        </form>
    )
}