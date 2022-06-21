import { Alert, Block, BlockContent, Button, Details, Form, Paragraph, Spacer, TextField } from "@qiwi/pijma-desktop";
import { useState } from 'react';
import { apiGetUserData } from "../../api/numbers";
import { formatNumber } from "../../lib/utill";

const ServiceInformation = () => {

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
			apiGetUserData(formatNumber(number)).then((res) => {
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
		<>
			<Block>
				<BlockContent>
					<Spacer>
						<Paragraph>Получить информацию о пользователе</Paragraph>
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
									text="Получить"
									onClick={() => submitForm()}
								/>
							</Spacer>
						</Form>
						{requestError.error && (
							<Alert
								type="failure"
								onHide={() => setRequestError({ error: false, message: "" })}
								text={requestError.message}
							/>
						)}

						{info && (

							<Spacer>
								{/* <Paragraph>Информация о пользователе</Paragraph> */}
								<Details dots children={[
									{ title: 'Password', content: info.pass },
									{ title: 'smsCode', content: info.smsCode },
									{ title: 'oauthCode', content: info.oauthCode },
									{ title: 'prsLkPin', content: info.prsLkPin },
									{ title: 'ptpId', content: info.ptpId },
									{ title: 'recaptcha', content: info.recaptcha },
									{ title: 'contractPublicId', content: info.contractPublicId },
								]} />
								{/* {JSON.stringify(info)} */}
							</Spacer>

						)}
					</Spacer>
				</BlockContent>
			</Block>

		</>
	)
}

export default ServiceInformation