import { React } from 'react';
import config from '../core/config';
import context from '../core/context';

const Decrement = () =>
	<button
		onClick={ () => context.actions.decreaseCount(config.decrement) }
	>
		Decrease!
	</button>;

export default Decrement;
