import React from 'react'
import { Alert, Button, Form, Paragraph, RadioField, Spacer, TextField } from '@qiwi/pijma-desktop'

const ActionPhone = ({ title, buttonLabel, number, setNumber, action, error, status, radio, setRadio, radioOptions }) => {

	return (
		<Spacer>
			<Paragraph>{title}</Paragraph>
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

					{radio && setRadio && radioOptions &&
						<RadioField
							options={radioOptions}
							value={radio}
							onChange={(value) => setRadio(value)}
						/>}

					<Button
						kind="brand"
						type="submit"
						size="accent"
						text={buttonLabel}
						onClick={() => action()}
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

export default ActionPhone