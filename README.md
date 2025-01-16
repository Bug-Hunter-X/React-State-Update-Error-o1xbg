# React State Update Error
This example demonstrates a common mistake in React: directly modifying a state variable outside of its designated update function.  This leads to unexpected behavior because React's internal mechanisms for updating the UI are bypassed.

## Bug
The `bug.js` file contains a component that attempts to increment the `count` state variable directly, rather than using `setCount`. This will cause the UI to not reflect the intended change.

## Solution
The `bugSolution.js` file shows the corrected code, using `setCount` to update the state properly. This ensures React's reconciliation process is used, leading to the UI accurately reflecting the state changes.