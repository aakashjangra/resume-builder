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

const Form = () => {
  const navigate = useNavigate();
  const [education, setEducation] = useState(
      {
        degree: "Master",
        institute: "University of Palval",
        description: "faltu degree",
        startYear: "2021",
        endYear: "2023",
      }
    );



  const resumeData = useSelector((state) => state.resumeData.value);
  const dispatch = useDispatch();

  const submitHandler = () => {
    navigate("/resume");
  };


  const updateObjectField = (name, value) => {
    dispatch(update({name, value}));
  }

  // const updateObjectField = (e, objName) => {
  //   const { name, value } = e.target;

  //   console.log(objName, name, value);

  //   dispatch(updateObj({ objName, name, value }));
  // }

  const updateField = (e) => {
    const { name, value } = e.target;

    console.log(name, value);

    dispatch(update({ name, value }));
  };


  useEffect(() => {
    updateObjectField("education", education)

  }, [education])
  

  return (
    <div>
      <h1 className="font-bold p-8 bg-blue text-neutral-50 text-center">
        Resume Builder
      </h1>
      <div>
        <h2 className="flex justify-center px-28 py-10 border-4">
          Personal Details
        </h2>
        <div className="flex  flex-col grid justify-center grid-cols-2 gap-14">
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
      <div className="w-full  pt-14 text-center" >
      <button className="rounded-full bg-green-400 px-8 py-4 " onClick={submitHandler}>Submit</button>
</div>

<div className="Educational Details"> 
        <h1 className="font-bold p-8 bg-blue text-neutral-50 text-center">
        Educational Details
        </h1>
        <div className="flex  flex-col grid justify-center grid-cols-2 gap-14">
        <FormInput
          type={"text"}
          name={"education"}
          placeholder={"Degree*"}
          value={education.degree}
          onChange={(e) => {
            setEducation({...education, degree: e.target.value})
          }}
          icon={null}
        />
        <FormInput
          type={"text"}
          name={"qualification"}
          placeholder={"Qualification*"}
          value={resumeData.education.qualification}
          onChange={updateField}
          icon={null}
        />
        <FormInput
          type={"text"}
          name={"description"}
          placeholder={"Description*"}
          value={resumeData.education.description}
          onChange={updateField}
          icon={null}
        />

        <FormInput
        type={"text"}
        name={"startDate"}
        placeholder={"startDate*"}
        value={resumeData.education.startDate}
        onChange={updateField}
        icon={null}
      />
      <FormInput
      type={"text"}
      name={"education.endDate"}
      placeholder={"endDate*"}
      value={resumeData.education.endDate}
      onChange={updateField}
      icon={null}
    />

        

       </div>

</div>
    </div>
  );
};

export default Form;
