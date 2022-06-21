import { Block, BlockContent, Button, Form, Paragraph, Spacer, TextField } from "@qiwi/pijma-desktop";
import { useState } from 'react';

const ServiceSet = () => {

	const [number, setNumber] = useState(null);
    const [text, setText] = useState(null);
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
			<Paragraph>Установить PIN-код для терминала</Paragraph>
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
                     <TextField
        title="PIN"
        type="text"
        value={text}
        onChange={text => setText(text)}
      />
					<Button
						kind="brand"
						type="submit"
						size="accent"
						text="Установить"
						onClick={() => submitForm()}
					/>
				</Spacer>
			</Form>
		</Spacer>
	)
}

export default ServiceSet