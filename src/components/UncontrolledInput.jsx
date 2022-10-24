import { useRef } from 'react';
export const UncontrolledInput = () => {
  const nameInput = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nameInput.current.value);
    // console.log(nameInput.current.name);
    //POST
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        name='name'
        placeholder='enter first and last name'
        ref={nameInput}
      />
      <input type='submit' value='Submit' />
    </form>
  );
};
