import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FormInput from "../FormInput/FormInput";
import { faEnvelope, faGlobe, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedinIn,
  faTwitterSquare,

} from "@fortawesome/free-brands-svg-icons";

const Form = () => {
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
          />
          <FormInput
            type={"text"}
            name={"lastname"}
            placeholder={"Last Name*"}
          />
          <FormInput
            type={"text"}
            name={"phoneNumber"}
            placeholder={"Phone Number"}
            icon={faPhone}
          />

          <FormInput
            type={"text"}
            name={"website"}
            placeholder={"Your Website"}
            icon={faGlobe}
          />

          <FormInput type={"text"} name={"github"} placeholder={"GitHub"} icon={faGithub} />

          <FormInput
            type={"text"}
            name={"linkedin"}
            placeholder={"LinkedIn"}
            icon={faLinkedinIn}
          />

          <FormInput
            type={"text"}
            name={"email"}
            placeholder={"Email"}
            icon={faEnvelope}
          />

          <FormInput
            type={"text"}
            name={"twitter"}
            placeholder={"twitter"}
            icon={faTwitterSquare}
          />
        </div>
      </div>
    </div>
  );
};

export default Form;
