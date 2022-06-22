import { Block, BlockContent, Button, Form, Paragraph, Spacer, TextField } from "@qiwi/pijma-desktop";
import { useState } from 'react';
import { apiGetUserData, apiPasswordExpire, apiPasswordExtend } from "../../../api/numbers";
import { formatNumber } from "../../../lib/utill";

const ServiceExtend = () => {

	const [info, setInfo] = useState(null);
	const [number, setNumber] = useState(null);
	const [error, setError] = useState(null);
	const [requestError, setRequestError] = useState({
		error: false,
		message: "",
	});


	const submitForm = () => {
		if (!number) {
			setError('Введите номер телефона');
		} else {
			setError(null);
			// тут будет fetch
			apiPasswordExtend(formatNumber(number)).then((res) => {
				//console.log(res);
				setInfo(res);
				setRequestError({ error: false, message: "" })
			}).catch((err) => {
				setRequestError({ error: true, message: err.errorMessage });
				//console.log(err);
				setInfo(null);

			})
		}
	}

	return (
		<Spacer>
			<Paragraph>Продлить срок действия пароля</Paragraph>
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
						text="Продлить"
						onClick={() => submitForm()}
					/>
				</Spacer>
			</Form>
		</Spacer>
	)
}

export default ServiceExtend