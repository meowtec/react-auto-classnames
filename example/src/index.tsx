import { render } from 'react-dom';
import './index.css';

export default function App() {
  const j = (
    <>
      <div
        className={['red', 'bold']}
        key="33"
      >
        <span className={{del: true}}>text</span>
      </div>
    </>
  )

  console.log(j)
  return j
}

render(
  <App />,
  document.querySelector('#root'),
)