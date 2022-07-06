import { React } from 'react';
import config from '../core/config';
import context from '../core/context';

const Increment = () =>
	<button
		onClick={ () => context.actions.increaseCount(config.increment) }
	>
		Increase!
	</button>;

export default Increment;
