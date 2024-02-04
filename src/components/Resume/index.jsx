import React, { useEffect, useState } from 'react'
import './styles.css'
import { useSelector } from 'react-redux'
import { faGithub, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

const Resume = () => {
  const [showSkills, setShowSkills] = useState(false);
  const [showActivities, setShowActivities] = useState(false);

  const resumeData = useSelector(state => state.resumeData.value);

  useEffect(() => {

    resumeData.skills.map((skill) => {
      if(skill){
        setShowSkills(true)
      }
    })

    resumeData.activities.map((activity) => {
      if(activity){
        setShowActivities(true)
      }
    })
  }, [])
  

  return (
    <div>
    <div className='resume print:border-none print:m-0  border-4 border-black flex flex-col m-5 p-3  gap-5'>
      <div className='header w-full flex justify-between pb-4 border-b-4 border-red'>
        <div>
          <h1 className='font-normal text-7xl uppercase text-red '>{resumeData.firstname} {resumeData.lastname}</h1>
          <div className='font-semibold text-red'>
            <p>{resumeData.address}</p>
            <p>{resumeData.phoneNo}
              {
                (resumeData.phoneNo && resumeData.email) && (
                  <span> | </span>
                )
              }

              {resumeData.email}</p>
          </div>

        </div>
        <div className=' place-self-end'>
          <div className='social-icons pt-2 flex gap-4'>
            <a className='text-blue' href={resumeData.website} target='_blank'><FontAwesomeIcon className='w-7 h-7' icon={faGlobe} /></a>
            <a className='text-blue' href={resumeData.linkedin} target='_blank'><FontAwesomeIcon className='w-7 h-7' icon={faLinkedin} /></a>
            <a className='text-sky-400' href={resumeData.twitter} target='_blank'><FontAwesomeIcon className='w-7 h-7' icon={faTwitterSquare} /></a>
            <a className='text-black' href={resumeData.github} target='_blank'><FontAwesomeIcon className='w-7 h-7' icon={faGithub} /></a>
          </div>
        </div>
      </div>
      {
        (resumeData.objective ) && (
          <div className='objective border-b-4 border-red pb-4'>
          <h2 className='text-4xl text-red font-bold pb-4 uppercase '>objective</h2>
          <p className='font-semibold'>{resumeData.objective}</p>
  
        </div>
        )
      }
     

      <div className='education-section pb-4 border-b-4 border-red'>
        <h2 className='text-4xl text-red font-bold pb-4 uppercase '>Education</h2>

        <div className='education font-semibold'>
          <div className='flex justify-between'>
            <div>
              <span className='font-bold'>{resumeData.education.degree}</span> | {resumeData.education.institute}
            </div>
            <div>{resumeData.education.startYear} - {resumeData.education.endYear}</div>
          </div>
          <p>{resumeData.education.description}</p>
        </div>
      </div>
      <div className='experience-section pb-4 border-b-4 border-red'>
        <h2 className='text-4xl text-red font-bold pb-4 uppercase '>Experience</h2>
        {
          resumeData.experience.map((exp, indx) => {
            return (
              <div className='experience font-semibold' key={indx}>
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

    {
      showSkills && (
        <div className="w-full skills pb-4 border-b-4 border-red">
        <h2 className='text-4xl text-red font-bold pb-4 uppercase'>Skills</h2>
        <div className="w-full grid grid-cols-3 font-semibold">
          {
            resumeData.skills.map((skill, indx) => {
              if(!skill){
                return null;
              } 
              
              return (
                <li key={indx}>
                  {skill}
                </li>
              );
            })
          }

        </div>
      </div>
  )
}
      

      {
        showActivities && (
          <div className="activities">
          <h2 className='text-4xl text-red font-bold pb-4 uppercase '>Activities</h2>
          {
            resumeData.activities.map((activity, indx) =>
            {
              
              if(!activity){
                return null;
              } 
              
              return (
                <li className='pb-2 w-full font-semibold' key={indx}>
                  {activity}
                </li>
              );
              
            })
          }
        </div>
        )
      }
      
    </div>
    <div className=' print:hidden  download my-8 flex justify-center w-full'>
      <button className='text-center bg-blue-200 text-white p-4 rounded-full ' onClick={()=>{
      window.print()
      }} >Download Resume</button>
      </div>
      </div>
  )
}

export default Resume

