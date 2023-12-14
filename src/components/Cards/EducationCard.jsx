import { FaAngleDown } from "react-icons/fa6";
import { FaBook } from "react-icons/fa6";
import { FaPenToSquare } from "react-icons/fa6";
import { useState } from 'react'
import AddButton from "../Buttons/AddButton";
import CancelButton from "../Buttons/CancelButton";
import SaveButton from "../Buttons/SaveButton";
import DeleteButton from "../Buttons/DeleteButton";





export default function EducationCard({ educationArray, updateEducationArray, deleteEducation, addEducation }) {
    const [isActive, setActive] = useState("false");
    const [isActiveEdit, setActiveEdit] = useState("false");
    const [currentEducation, setCurrentEducation] = useState({ id: '', school: '', degree: '', startdate: '', enddate: '', location: '' });


    const handleToggle = () => {
        setActive(!isActive);
    };

    const handleToggleEdit = (id) => {
        const currentKey = id
        setCurrentEducation(educationArray.find(edu => edu.id === currentKey))
        setActiveEdit(!isActiveEdit);
    };

    const handleToggleAdd = () => {
        setActiveEdit(!isActiveEdit);
    }

    const updateCurrentEdu = (e) => {
        const dataKey = e.target.getAttribute('data-key');

        setCurrentEducation({
            ...currentEducation,
            [dataKey]: e.target.value
        });
    }

    const resetCurrentEdu = () => {
        setCurrentEducation({ id: '', school: '', degree: '', startdate: '', enddate: '', location: '' })
        setActiveEdit('false')
    }

    const saveCurrentEdu = () => {
        if (currentEducation.id === '') {
            addEducation(currentEducation)
            resetCurrentEdu()
        } else {
            updateEducationArray(currentEducation)
            resetCurrentEdu()
        }
    }

    const deleteCurrentEdu = () => {
        if (currentEducation.id === '') {
            resetCurrentEdu()
        } else {
            deleteEducation(currentEducation)
            resetCurrentEdu()
        }
    }





    return (

        <form className="card">
            <div className="card-heading">
                <h1><FaBook />Education </h1>
                <FaAngleDown size={'2rem'} onClick={handleToggle} className={isActive ? 'icon' : 'icon-open'} />
            </div>
            <div className={isActive ? 'item-container' : 'item-container open'}>


                <div className={isActiveEdit ? null : 'hidden'}>

                    {educationArray.map((education) => {
                        return (
                            <div type='button' key={education.id} data-key={education.id} className="education-item" onClick={() => handleToggleEdit(education.id)} >
                                <h3>{education.school}</h3>
                                <FaPenToSquare size={'1.5rem'} />
                            </div>
                        )
                    }
                    )}

                    <AddButton
                        string={'Education'}
                        onClick={handleToggleAdd}
                    />

                </div>

                <div className={isActiveEdit ? 'hidden' : 'edit-container'}>
                    <br />
                    <div className="input-field">
                        <span>School:</span>
                        <input type="text" value={currentEducation.school} key='school' data-key='school' onChange={updateCurrentEdu} />
                    </div>
                    <div className="input-field">
                        <span>Degree:</span>
                        <input type="text" key='degree' data-key='degree' value={currentEducation.degree} onChange={updateCurrentEdu} />
                    </div>
                    <div className="input-field">
                        <span>Start Date:</span>
                        <input type="text" key='startdate' data-key='startdate' value={currentEducation.startdate} onChange={updateCurrentEdu} />
                    </div>
                    <div className="input-field">
                        <span>End Date:</span>
                        <input type="text" key='enddate' data-key='enddate' value={currentEducation.enddate} onChange={updateCurrentEdu} />
                    </div>
                    <div className="input-field">
                        <span>Location:</span>
                        <input type="text" key='location' data-key='location' value={currentEducation.location} onChange={updateCurrentEdu} />
                    </div>


                    <div className="buttons-container">

                        <DeleteButton onClick={deleteCurrentEdu} />
                        <CancelButton onClick={resetCurrentEdu} />
                        <SaveButton onClick={saveCurrentEdu} />

                    </div>

                </div>

            </div>




        </form>
    )
}