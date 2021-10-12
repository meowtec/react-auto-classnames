import { render } from 'react-dom';
import './index.css';

export default function App() {
  return (
    <>
      <div
        className={['red', 'bold']}
        key="33"
      >
        <span className={{del: true}}>text</span>
      </div>
    </>
  );
}

render(
  <App />,
  document.querySelector('#root'),
);
