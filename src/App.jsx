import { useState } from 'react'
import './App.css'
import { useForm } from 'react-hook-form';

function App() {
  const [count, setCount] = useState(0)
    const {
      register,
      handleSubmit,
      watch,
      formState: { errors, isSubmitting, isSubmitted },
    } = useForm();
    const delay = (fn, ms) => {
      return new Promise(resolve => setTimeout(() => resolve(fn()), ms));
    };

    const onSubmit = async(data) => {
      await delay(() => {
        console.log(data);
      }, 3000);
    };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {isSubmitting && <p>Submitting....</p>}

        <input
          type="username" placeholder='Username'
          {...register('Username', {
            required: { value: true, message: 'This field is required' },
          })}
        />
        {errors.Username && <p className="red">{errors.Username.message}</p>}
        <br />
        <input
          type="password"
          placeholder='Password'
          {...register('password', {
            required: { value: true, message: 'This field is required' },
            minLength: { value: 3, message: 'Minimum Length is 3 characters' },
            maxLength: { value: 20, message: 'Maximum Length is 20 characters' },
          })}
        />
        {errors.password && <p className="red">{errors.password.message}</p>}
        <br />

        <input disabled={isSubmitting} type="submit" />
      </form>
    </>
  );
}

export default App
