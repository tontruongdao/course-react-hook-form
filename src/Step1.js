import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'

const Step1 = () => {
  const { register, handleSubmit, errors } = useForm()
  const history = useHistory()

  const onSubmit = (data) => {
    history.push("/step2")
  }

  return (
    <div>
      <h2>Step 2</h2>
      <form>
        <input 
          {...register("firstName")}
          type="text"
          placeholder="First Name"
        />
        <input
          {...register("lastName")}
          type="text"
          placeholder="Last Name"
        />
        <button type="submit">Next</button>
      </form>
    </div>
  )
}

export default Step1
