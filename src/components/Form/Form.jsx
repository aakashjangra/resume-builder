import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { update } from '../../store/features/resumeData/resumeData.slice';

const Form = () => {
  const navigate = useNavigate(); 
  
  const resumeData = useSelector((state) => state.resumeData.value);
  const dispatch = useDispatch();

  const submitHandler = () => {
    navigate('/resume');
  }

  const updateField = (e) => {
    const {name, value} = e.target;

    console.log(name, value);

    dispatch(update({name, value}))
  }
  
  return (
    <div className="p-20 flex flex-col items-center">

      <label htmlFor="name">Name</label>
      <input type="text" name="name"  placeholder="Enter Name" id="name"
        value={resumeData.name}
        onChange={updateField}
      />

      <button type="submit" className="w-20 py-2 my-6 text-center bg-green-300" onClick={submitHandler}>Submit</button>
    </div>
  )
}

export default Form