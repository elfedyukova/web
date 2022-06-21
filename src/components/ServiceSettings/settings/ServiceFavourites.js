import { Block, BlockContent, Button, Form, Paragraph, Spacer, TextField } from "@qiwi/pijma-desktop";
import { useState } from 'react';

const ServiceFavourites = () => {

	const [info, setInfo] = useState(null);
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
					<Paragraph>Удалить избранное</Paragraph>
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
								text="Удалить"
								onClick={() => submitForm()}
							/>
						</Spacer>
					</Form>
				</Spacer>
	)
}

export default ServiceFavourites