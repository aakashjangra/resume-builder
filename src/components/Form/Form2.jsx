import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Form = () => {
  return (
    <div>
    <h1 className="font-bold p-8 bg-blue text-neutral-50 text-center">Resume Builder</h1>
    <div >
    <h2 className="flex justify-center px-28 py-10 border-4">Personal Details</h2>
    <div className="flex  flex-col grid justify-center grid-cols-2 gap-14">
    <input className="px-5 py-2" type="text" name="Your Website" placeholder="FirstName" id="FirstName"   />
    <input className="px-5 py-2" type="text" name="Last Name*" placeholder="Last Name*" id="Last Name*"   />
    <div className='relative'>
    <input className="px-5 py-2 w-full" type="text" name="Email" placeholder="Email" id="Email"/>
    <FontAwesomeIcon className='absolute right-5 top-3' icon={faEnvelope} />
    </div>
    <input className="px-5 py-2" type="text" name="Phone Number" placeholder="Phone Number" id="Phone Number"   />
    <input className="px-5 py-2" type="text" name="Your Website" placeholder="Your Website" id="Your Website"   />
    <input className="px-5 py-2" type="text" name="Github" placeholder="Github" id="Github"   />
    <input className="px-5 py-2" type="text" name="Linked In" placeholder="Linked IN" id="Linked IN"   />
    <input className="px-5 py-2" type="text" name="Twitter" placeholder="Twitter" id="Twitter"   />
    </div>
    </div>
    </div>
  )
}

export default Form