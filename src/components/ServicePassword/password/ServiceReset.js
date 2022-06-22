import { Block, BlockContent, Button, Form, Paragraph, Spacer, TextField } from "@qiwi/pijma-desktop";
import { useState } from 'react';
import ActionPhone from '../../ActionPhone/ActionPhone';

const ServiceReset = () => {

	const [number, setNumber] = useState(null);
	const [error, setError] = useState(null);

	const submitForm = () => {
		if (!number) {
			setError('Введите номер телефона');
		} else {
			setError(null);
			// тут будет fetch
		}
	}

	return (
		<ActionPhone
			title='Обнулить срок действия пароля'
			buttonLabel='Обнулить'
			number={number}
			setNumber={setNumber}
			action={submitForm}
			error={error}
		/>
	)
}

export default ServiceReset