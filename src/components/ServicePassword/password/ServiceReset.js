import { useState } from 'react';
import ActionPhone from '../../ActionPhone/ActionPhone';
import { apiPasswordExpire, apiPasswordReset } from "../../../api/numbers";
import { formatNumber } from "../../../lib/utill";

const ServiceReset = () => {

	const [status, setStatus] = useState(null);
	const [number, setNumber] = useState(null);
	const [error, setError] = useState(null);
	const [success, setSuccess] = useState(true);
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
			apiPasswordReset(formatNumber(number)).then((res) => {
				//console.log(res);
				//setInfo(res);
				//setRequestError({ error: false, message: "" })
				setStatus("ok")
				setRequestError({ error: false, message: "" })
			}).catch((err) => {
				//setRequestError({ error: true, message: err.errorMessage });
				//console.log(err);
				//setInfo(null);
				setRequestError({ error: true, message: err.errorMessage });
				//console.log(err);
				//setInfo(null);
				setStatus("error")

			})
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
			status={status}
		/>
	)
}

export default ServiceReset