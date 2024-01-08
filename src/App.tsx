import { useState } from 'react';
import { Button } from './components/ui/button';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='text-center py-10'>
      <h1 className='text-4xl font-bold my-4'>Vite + React</h1>
      <div className='bg-gray-100 p-4 rounded-lg shadow-md max-w-md mx-auto'>
        <Button className='' onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
      </div>
    </div>
  );
}

export default App;
