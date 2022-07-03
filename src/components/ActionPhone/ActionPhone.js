import React from 'react'
import { Alert, Button, Form, Paragraph, Spacer, TextField } from '@qiwi/pijma-desktop'

const ActionPhone = ({ title, buttonLabel, number, setNumber, action, error, status }) => {

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
				type="success"
				text={status == "ok" ? "Успешно" : "Неуспешно"}
			/>}
		</Spacer>
	)
}

export default ActionPhone