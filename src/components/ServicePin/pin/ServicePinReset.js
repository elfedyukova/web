import { Block, BlockContent, Button, Form, Paragraph, Spacer, TextField } from "@qiwi/pijma-desktop";
import { useState } from 'react';

const ServicePinReset = () => {

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
		<Spacer>
			<Paragraph>Обнулить срок действия PIN-кода</Paragraph>
			<Form>
				<Spacer>
					<TextField
						title="Номер телефона"
						type="tel"
						mask={['+', /7/, '(', /\d/, /\d/, /\d/, ')', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]}
						value={number}
						onChange={text => setNumber(text)}
						error={error}
					/>
					<Button
						kind="brand"
						type="submit"
						size="accent"
						text="Обнулить"
						onClick={() => submitForm()}
					/>
				</Spacer>
			</Form>
		</Spacer>
	)
}

export default ServicePinReset