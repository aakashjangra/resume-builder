import React from 'react'
import './styles.css'
import { useSelector } from 'react-redux'

const Resume = () => {

  const resumeData = useSelector(state => state.resumeData.value);

  const user = {
    name: 'Aditi',
    objective: 'Full Stack Engineer with a passion for creating robust and scalable web applications. Seeking a challenging position where I can leverage my expertise in both front-end and back-end technologies to contribute to the development and optimization of innovative software solutions.',
    phoneNo: '9818095566',
    email: 'aditijha1403@gmail.com',
    address: 'QutubMinar New delhi, 110030',
    education: [
      {
        degree: "Master",
        institute: "University of Palval",
        description: "faltu degree",
        startYear: "2021",
        endYear: "2023",
      },
      {
        degree: "Master",
        institute: "University of Palval",
        description: "",
        startYear: "2021",
        endYear: "2023",
      }
    ],
    skills: ['project management', 'Technical expertise', 'Leadership', 'Communication', 'Problem-solving', 'Attention to detail'],

    activities: ['Participated in several hackathons, including a winning team at the 20XX Hack event, demonstrating the ability to work under pressure and come up with innovative solutions to technical challenges. ', 'sleeping', 'drinking'],
    experience: [
      {
        position: "senior manager",
        company: "University of Palval",
        description: "Oversaw project scope, timelines, and budget, resulting in the successful launch of the new infrastructure and improved site reliability metrics",
        startYear: "2021",
        endYear: "2023",
      },
      {
        position: "Master",
        company: "University of Palval",
        description: "Managed a team of software developers and quality assurance specialists in the development and launch of a new customer relationship management (CRM) software product ",
        startYear: "2021",
        endYear: "2023",
      }
    ],
  }
  return (
    <div className='resume w-screen flex flex-col p-20 gap-5'>
      <div className='header text-red w-full flex justify-between pb-4 border-b-4 border-red'>
        <h1 className='font-bold text-4xl uppercase  '>{resumeData.name}</h1>
        <div className='font-semibold'>
          <p>{user.address}</p>
          <p>{user.phoneNo} | {user.email}</p>
        </div>
      </div>

      <div className='objective border-b-4 border-red pb-4'>
        <h2 className='text-4xl text-red font-bold pb-4 uppercase '>objective</h2>
        <p className='font-semibold'>{user.objective}</p>
      </div>

      <div className='education-section pb-4 border-b-4 border-red'>
        <h2 className='text-4xl text-red font-bold pb-4 uppercase '>Education</h2>
        {
          user.education.map((edu) => {
            return (
              <div className='education font-semibold'>
                <div className='flex justify-between'>
                  <div>
                    <span className='font-bold'>{edu.degree}</span> | {edu.institute}
                  </div>
                  <div>{edu.startYear} - {edu.endYear}</div>
                </div>
               
              </div>
            );
          })
        }
      </div>
      <div className='experience-section pb-4 border-b-4 border-red'>
        <h2 className='text-4xl text-red font-bold pb-4 uppercase '>Experience</h2>
        {
          user.experience.map((exp) => {
            return (
              <div className='experience font-semibold '>
                <div className='flex justify-between' >
                  <div>
                  <span>{exp.position}</span> | {exp.company}</div>
                  <div>{exp.startYear} - {exp.endYear}</div>
                </div>
                <div className='pb-4'>{exp.description}</div>
              </div>
            );
          })
        }
      </div>

      <div className="w-full skills pb-4 border-b-4 border-red">
        <h2 className='text-4xl text-red font-bold pb-4 uppercase'>Skills</h2>
        <div className="w-full grid grid-cols-3 font-semibold">
          {
            user.skills.map((skill) => {
              return (
                <li>
                    {skill}
                </li>
              );
            })
          }
         
        </div>
      </div>

      <div className="activities">
        <h2 className='text-4xl text-red font-bold pb-4 uppercase '>Activities</h2>
        {
          user.activities.map((activity) =>
            <li className='pb-2 w-full font-semibold'>
              {activity}
            </li>
          )
        }
      </div>
    </div>
  )
}

export default Resume

