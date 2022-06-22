import { useState } from 'react';
import { apiPasswordExpire } from "../../../api/numbers";
import { formatNumber } from "../../../lib/utill";
import ActionPhone from '../../ActionPhone/ActionPhone';

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
			apiPasswordExpire(formatNumber(number)).then((res) => {
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
		<ActionPhone
			title='Продлить срок действия пароля'
			buttonLabel='Продлить'
			number={number}
			setNumber={setNumber}
			action={submitForm}
			error={error}
		/>
	)
}

export default ServiceExtend