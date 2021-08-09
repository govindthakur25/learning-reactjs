function Button(props){
  return <button onClick={() => props.increamentCounter(props.increament)}>
    +{props.increament}
  </button>;
}
function Display(props) {
  return <div>{props.counterValue}</div>
}
function App() {
  const [counter, setCounter] = useState(0);
  const handleClick = (inc) => setCounter(counter+inc);
  return <div>
    <Button increamentCounter={handleClick} increament={1}/>
    <Button increamentCounter={handleClick} increament={5}/>
    <Button increamentCounter={handleClick} increament={10}/>
    <Button increamentCounter={handleClick} increament={15}/>
    <Display counterValue={counter}/>
  </div>;
}
ReactDOM.render(
  <App />,
  document.getElementById('mountNode')
)