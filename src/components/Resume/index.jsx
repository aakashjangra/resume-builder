import React from 'react'
import './styles.css'
import { useSelector } from 'react-redux'

const Resume = () => {

  const resumeData = useSelector(state => state.resumeData.value);

  return (
    <div className='resume w-screen flex flex-col p-20 gap-5'>
      <div className='header text-red w-full flex justify-between pb-4 border-b-4 border-red'>
        <h1 className='font-bold text-4xl uppercase  '>{resumeData.name}</h1>
        <div className='font-semibold'>
          <p>{resumeData.address}</p>
          <p>{resumeData.phoneNo} | {resumeData.email}</p>
        </div>
      </div>

      <div className='objective border-b-4 border-red pb-4'>
        <h2 className='text-4xl text-red font-bold pb-4 uppercase '>objective</h2>
        <p className='font-semibold'>{resumeData.objective}</p>
      </div>

      <div className='education-section pb-4 border-b-4 border-red'>
        <h2 className='text-4xl text-red font-bold pb-4 uppercase '>Education</h2>
        {
          resumeData.education.map((edu) => {
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
          resumeData.experience.map((exp) => {
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
            resumeData.skills.map((skill) => {
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
          resumeData.activities.map((activity) =>
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

