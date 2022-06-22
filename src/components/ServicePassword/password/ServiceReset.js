import { useState } from 'react';
import ActionPhone from '../../ActionPhone/ActionPhone';
import { apiPasswordExpire } from "../../../api/numbers";
import { formatNumber } from "../../../lib/utill";

const ServiceReset = () => {

	const [number, setNumber] = useState(null);
	const [error, setError] = useState(null);

	const submitForm = () => {
		if (!number) {
			setError('Введите номер телефона');
		} else {
			setError(null);
			// тут будет fetch
			apiPasswordExpire(formatNumber(number)).then((res) => {
				//console.log(res);
				//setInfo(res);
				//setRequestError({ error: false, message: "" })
			}).catch((err) => {
				//setRequestError({ error: true, message: err.errorMessage });
				//console.log(err);
				//setInfo(null);

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
		/>
	)
}

export default ServiceReset