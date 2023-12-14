import './styles/App.css'
import { v4 as uuidv4 } from 'uuid';
import PersonalCard from './components/Cards/PersonalCard'
import ResumeOutput from './components/ResumeOutput'
import { useState } from 'react'
import EducationCard from './components/Cards/EducationCard'
import ExperienceCard from './components/Cards/ExperienceCard'



function App() {

  const [person, setPerson] = useState({ name: 'Eneida Yawen', email: 'eneida@test.com', number: '+55 13 99999999', address: 'Sao Paulo, BR' })
  const [education, setEducation] = useState([{ id: '1', school: 'Sao Paulo University', degree: 'Computer Science', startdate: '2019', enddate: '2023', location: 'Sao Paulo, BR' }])
  const [experience, setExperience] = useState([{ id: '1', company: 'SuperCool Company', position: 'Full Stack Developer', startdate: '2023', enddate: 'Current', location: 'Sao Paulo, BR', description: 'Created super cool applications with React.Js ' }])

  //personal

  function handlePersonChange(e) {
    const dataKey = e.target.getAttribute('data-key');
    setPerson({
      ...person,
      [dataKey]: e.target.value
    });
  }


  //educational 

  function handleEducationChange(e) {
    const index = education.findIndex(obj => {
      return obj.id === e.id;
    })

    const tempArray = [...education]
    tempArray[index] = e
    setEducation(tempArray)
  }

  function deleteEducation(e) {
    const newArray = education.filter(obj => {
      return obj.id !== e.id
    })

    setEducation(newArray)
  }

  function addEducation(e) {
    e.id = uuidv4()
    console.log(e);
    setEducation([...education, e])
  }

  // experience

  function handleExperienceChange(e) {
    const index = experience.findIndex(obj => {
      return obj.id === e.id;
    })

    const tempArray = [...experience]
    tempArray[index] = e
    setExperience(tempArray)
  }

  function deleteExperience(e) {
    const newArray = experience.filter(obj => {
      return obj.id !== e.id
    })

    setExperience(newArray)
  }

  function addExperience(e) {
    e.id = uuidv4()
    console.log(e);
    setExperience([...experience, e])
  }


  return (
    <div className='app'>
      <div className='side-container'>
        <PersonalCard
          name={person.name}
          email={person.email}
          number={person.number}
          address={person.address}
          onChange={handlePersonChange}
        />

        <EducationCard
          educationArray={education}
          updateEducationArray={handleEducationChange}
          deleteEducation={deleteEducation}
          addEducation={addEducation}
        />

        <ExperienceCard
          experienceArray={experience}
          updateExperienceArray={handleExperienceChange}
          deleteExperience={deleteExperience}
          addExperience={addExperience}
        />

      </div>


      <ResumeOutput
        person={person}
        educationArray={education}
        experienceArray={experience}
      />
    </div>
  )
}

export default App
