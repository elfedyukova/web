import { Alert, Block, BlockContent, Button, Form, Paragraph, Spacer, TextField } from "@qiwi/pijma-desktop";
import { useState } from 'react';
import { apiTerminalPinCodeSet } from "../../../api/numbers";
import { formatNumber } from "../../../lib/utill";

const ServiceSet = () => {

	const [number, setNumber] = useState(null);
	const [pin, setPin] = useState(null);
	const [error, setError] = useState(null);
	const [status, setStatus] = useState(null);

	const submitForm = () => {
		if (!number) {
			setError('Введите номер телефона');
		} else {
			setError(null);
			apiTerminalPinCodeSet(formatNumber(number), pin).then((res) => {
				setStatus("ok")
			}).catch((err) => {
				setStatus("error")
			})

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
						value={pin}
						onChange={text => setPin(text)}
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
			{status && <Alert
				width={154}
				type={status == "ok" ? "success" : "failure"}
				text={status == "ok" ? "Успешно" : "Неуспешно. Пожалуйста, попробуйте позже."}
			/>}
		</Spacer>
	)
}

export default ServiceSet