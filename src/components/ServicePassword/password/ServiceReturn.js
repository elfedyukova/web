import { Block, BlockContent, Button, Form, Paragraph, Spacer, TextField } from "@qiwi/pijma-desktop";
import { useState } from 'react';
import { apiPasswordReturn } from "../../../api/numbers";
import { formatNumber } from "../../../lib/utill";
import ActionPhone from "../../ActionPhone/ActionPhone";

const ServiceReturn = () => {

	const [number, setNumber] = useState(null);
	const [success, setSuccess] = useState(true);
	const [status, setStatus] = useState(null);
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

			apiPasswordReturn(formatNumber(number)).then((res) => {

				setStatus("ok")
				setRequestError({ error: false, message: "" })
			}).catch((err) => {
				//setRequestError({ error: true, message: err.errorMessage });
				setStatus("error")

			})
		}
	}

	return (
		<ActionPhone
			title='Вернуть срок действия пароля'
			buttonLabel='Вернуть'
			number={number}
			setNumber={setNumber}
			action={submitForm}
			error={error}
			status={success}
		/>
	)
}

export default ServiceReturn