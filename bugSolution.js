```javascript
import { useRouter } from 'next/router';

function MyComponent() {
  const router = useRouter();
  const handleClick = () => {
    router.push('/another-page');
    router.events.on('routeChangeComplete', () => {
      // Code that needs to run after route change
      console.log('Route change complete!');
    });
  };

  return (
    <button onClick={handleClick}>Go to another page</button>
  );
}

export default MyComponent;
```