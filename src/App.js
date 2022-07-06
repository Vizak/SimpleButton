import { React } from 'react';
import './App.scss';
import Decrement from './components/Decrement';
import Increment from './components/Increment';

const App = ({ state: { count }}) =>
	<div className="App" role="App">
		<div>Count: { count }</div>
		<div>{ Increment() }</div>
		<div>{ Decrement() }</div>
	</div>;

export default App;
