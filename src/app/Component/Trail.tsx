"use client"
import React, { useState, useEffect } from 'react';

// Higher Order Component
const withLoadingIndicator = (WrappedComponent:any) => {
  return function WithLoadingIndicator(props:any) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      // Simulate data loading with a setTimeout
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }, []);

    if (isLoading) {
      return <div>Loading...</div>;
    }

    return <WrappedComponent {...props} />;
  };
};

// A regular functional component
function MyComponent() {
  return <div>This is the content of MyComponent.</div>;
}

// Wrap MyComponent with the HOC
const MyComponentWithLoading = withLoadingIndicator(MyComponent);

// Usage
function Trail() {
  return (
    <div>
      <h1>Higher Order Component (Functional Component) Trail</h1>
      <MyComponentWithLoading />
    </div>
  );
}

export default Trail;