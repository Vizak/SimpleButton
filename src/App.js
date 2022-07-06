import { React } from 'react';
import './App.scss';
import Increment from './components/Increment';
const App = ({ state: { count }}) =>
	<div className="App" role="App">
		<div>Count: { count }</div>
		<div>{ Increment() }</div>
	</div>;

export default App;
