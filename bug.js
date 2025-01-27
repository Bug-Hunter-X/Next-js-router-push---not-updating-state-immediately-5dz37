```javascript
import { useRouter } from 'next/router';

function MyComponent() {
  const router = useRouter();
  const handleClick = () => {
    router.push('/another-page');
    // Some other code that relies on the route change
  };

  return (
    <button onClick={handleClick}>Go to another page</button>
  );
}


export default MyComponent; 
```