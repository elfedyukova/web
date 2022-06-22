import React from 'react'
import { Button, Form, Paragraph, Spacer, TextField } from '@qiwi/pijma-desktop'

const ActionPhone = ({ title, buttonLabel, number, setNumber, action, error }) => {

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
		</Spacer>
	)
}

export default ActionPhone