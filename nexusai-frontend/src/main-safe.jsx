
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Create a simple error boundary
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return React.createElement('div', { style: { padding: '20px', textAlign: 'center' } },
        React.createElement('h1', { style: { color: 'red' } }, 'Oops! Something went wrong'),
        React.createElement('p', null, 'Please try refreshing the page'),
        React.createElement('button', {
          onClick: () => window.location.reload(),
          style: {
            padding: '10px 20px',
            backgroundColor: '#4f46e5',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }
        }, 'Refresh Page')
      );
    }

    return this.props.children;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  React.createElement(React.StrictMode,
    null,
    React.createElement(ErrorBoundary, null,
      React.createElement(App)
    )
  )
);
    