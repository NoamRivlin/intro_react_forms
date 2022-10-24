import { useState } from 'react';

const ControlledInput = () => {
  const [email, setEmail] = useState('');

  return (
    <form>
      <input
        type='email'
        name='email'
        placeholder='Enter email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button>Submit</button>
      <p>Form value:{email} </p>
    </form>
  );
};

export default ControlledInput;
