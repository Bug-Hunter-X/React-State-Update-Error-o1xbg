```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect: Directly modifying the state variable
    count = count + 1; 
  }, []);

  return <div>Count: {count}</div>;
}
```