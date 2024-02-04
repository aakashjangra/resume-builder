import React from 'react'

const Personel details = () => {

    
  return (
    <div>
    
    <h1 className="font-bold p-8 bg-blue text-neutral-50 text-center">
    Resume Builder
  </h1>
  <div>
    <h2 className="flex justify-center px-28 py-10 border-4">
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
  <div className="w-full  pt-14 text-center" >
    <button className="rounded-full bg-green-400 px-8 py-4 " onClick={submitHandler}>Submit</button></div>
  )
}

export default Personel details