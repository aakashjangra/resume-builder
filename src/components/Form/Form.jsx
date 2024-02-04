import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FormInput from "./FormInput";
import {
  faEnvelope,
  faGlobe,
  faHouse,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedinIn,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { update, updateObj } from "../../store/features/resumeData/resumeData.slice";
import { useEffect, useState } from "react";

const Form = ({children}) => {
  const navigate = useNavigate();
  const resumeData = useSelector((state) => state.resumeData.value);
  const dispatch = useDispatch();

  const [education, setEducation] = useState(
    {
      degree: "Master",
      institute: "University of Palval",
      description: "faltu degree",
      startYear: "2021",
      endYear: "2023",
    }
  );
  const [experience, setExperience] = useState(
    [
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
    ]
  )
  const[skills,setSkills] = useState(
   [
    '' ,'' ,''
   ]
  )

  const [activities, setActivities] = useState(['', '', '']);

  const updateSkillOrActivity = (type, array, indx, value) => {
    const newArr = [...array]
    newArr[indx] = value;
    
    if(type === 'activity'){
      setActivities(newArr)
    } else {
      setSkills(newArr);
    }
  }
  
  const submitHandler = () => {
    navigate("/resume");
  };


  const updateObjectField = (name, value) => {
    dispatch(update({ name, value }));
  }
  const updateField = (e) => {
    const { name, value } = e.target;

    console.log(name, value);

    dispatch(update({ name, value }));
  };

  const [fieldToShow, setFieldToShow] = useState(0);
  
  const FORM_FIELDS = [
    <div>
  
  <div>
    <h2 className="flex justify-center px-28 py-10  mb-6 border-4">
      Personal Details
    </h2>
    <div className="grid justify-center grid-cols-2 gap-14">
      <FormInput
        type={"text"}
        name={"firstname"}
        placeholder={"First Name"}
        value={resumeData.firstname}
        onChange={updateField}
        icon={null}
      />
      <FormInput
        type={"text"}
        name={"lastname"}
        placeholder={"Last Name"}
        value={resumeData.lastname}
        onChange={updateField}
        icon={null}
      />
      <FormInput
        type={"text"}
        name={"objective"}
        placeholder={"Objective*"}
        value={resumeData.objective}
        onChange={updateField}
        icon={null}
      />
      <FormInput
        type={"text"}
        name={"phoneNo"}
        placeholder={"Phone Number"}
        value={resumeData.phoneNo}
        onChange={updateField}
        icon={faPhone}
      />

      <FormInput
        type={"text"}
        name={"address"}
        placeholder={"Address"}
        value={resumeData.address}
        onChange={updateField}
        icon={faHouse}
      />

      <FormInput
        type={"text"}
        name={"website"}
        placeholder={"Your Website"}
        value={resumeData.website}
        onChange={updateField}
        icon={faGlobe}
      />

      <FormInput
        type={"text"}
        name={"github"}
        placeholder={"GitHub"}
        icon={faGithub}
        value={resumeData.github}
        onChange={updateField}
      />

      <FormInput
        type={"text"}
        name={"linkedin"}
        placeholder={"LinkedIn"}
        icon={faLinkedinIn}
        value={resumeData.linkedin}
        onChange={updateField}
      />

      <FormInput
        type={"text"}
        name={"email"}
        placeholder={"Email"}
        icon={faEnvelope}
        value={resumeData.email}
        onChange={updateField}
      />

      <FormInput
        type={"text"}
        name={"twitter"}
        placeholder={"twitter"}
        icon={faTwitterSquare}
        value={resumeData.twitter}
        onChange={updateField}
      />
    </div>
    
  </div>
 
    </div>,
      <div className="Educational Details">
        <h1 className="font-bold p-8 mb-6 bg-blue text-neutral-50 text-center">
          Educational Details
        </h1>
        <div className="flex-col grid justify-center grid-cols-2 gap-14">

          {
            Object.keys(education).map((key) => {
              return (

                <FormInput
                  key={key}
                  type={`${key === 'startYear' || key === 'endYear' ? 'number' : 'text'}`}
                  name={key}
                  placeholder={key}
                  value={experience[key]}
                  onChange={(e) => {
                    setEducation({ ...education, [key]: e.target.value })
                  }}
                  icon={null}
                />
              )
            })
          }

        </div>
      </div>, 

      <div className="Experience Details">
          {
            experience.map((exp, indx) => {
              return (
                <div  key={indx}>
                  <h1 className="font-[600] text-3xl  w-full text-center my-5 ">Experience {indx}</h1>
                  <div className="grid grid-cols-2  gap-4">
                  {
                    Object.keys(exp).map((key) => {
                      return (
                        
                        <FormInput
                          key={key}
                          type={`${key === 'startYear' || key === 'endYear' ? 'number' : 'text'}`}
                          name={key}
                          placeholder={key}
                          value={experience[indx][key]}
                          onChange={(e) => {
                            updateExperienceState(indx, key, e.target.value);
                          }}
                          icon={null}
                          required
                        />
                      )
                    })
                  }
                </div>
                </div>
              )
            })
          }
      </div>,

      <div className=" skills">
      {
        skills.map((skill , indx ) => {
          return (
           
            
            <FormInput
              key={indx}
              type= 'text'
              name='skill'
              placeholder={`skill ${indx}`}
              value={skill}
              onChange={(e) => {
                updateSkillOrActivity('skill', skills, indx, e.target.value)
              }}
              icon={null}
              required
            />
          
          )
        })
      }
     

      <div className="activities">
    
        {
          activities.map((activity, indx) => {
            return (
              
                <FormInput
                  key={indx}
                  type='text'
                  name='activity'
                  placeholder={`Activity ${indx}`}
                  value={activity}
                  onChange={(e) => {
                    updateSkillOrActivity('activity', activities, indx, e.target.value)
                  }}
                  icon={null}
                />
              )
          })
        }
      </div>
      </div>
  ]

  const changeField = (indx) => {
    if(indx < 0 || indx >= FORM_FIELDS.length) return;//invalid index

    setFieldToShow(indx);
  } 

  const updateExperienceState = (index, name, value) => {
    const newArray = experience.map((item, i) => {
      if (index === i) {
        return { ...item, [name]: value };
      } else {
        return item;
      }
    });
    setExperience(newArray);
  };

  useEffect(() => {
    updateObjectField("education", education)
  }, [education])

  useEffect(() => {
    updateObjectField("experience", experience)
  }, [experience])

  useEffect(() => {
    updateObjectField("activities", activities)
  },[activities])
  
  useEffect(() => {
    updateObjectField("skills", skills)
  },[skills])

  return (
    <div>
      
    <h1 className="font-bold p-8  mb-5 bg-blue text-neutral-50   text-center">
    Resume Builder
    </h1>
      {FORM_FIELDS[fieldToShow]} 

      <div className="w-full flex justify-around p-10">  
      {
        fieldToShow > 0 && (
          <button 
            className="bg-orange-300 p-4 rounded-md font-bold"
            onClick={() => {changeField(fieldToShow - 1)}}
          >
            PREV
          </button>
        )
      }

        {
          (fieldToShow === FORM_FIELDS.length - 1) && (
            <button 
              className="bg-green-300 p-4 rounded-md font-bold"
              onClick={submitHandler}
            >
              Generate Resume
            </button>
          )
        }

        {
          (fieldToShow < FORM_FIELDS.length - 1) && (
            <button 
              className="bg-sky-300 p-4 rounded-md font-bold"
              onClick={() => {changeField(fieldToShow + 1)}}
            >
              NEXT
            </button>
          )
        }

      </div>

      

      
    </div>
  );
};

export default Form;
