import { Block, BlockContent, Button, Form, Paragraph, RadioField, Spacer, TextField } from "@qiwi/pijma-desktop";
import { useState } from 'react';

const ServicePasport = () => {

    const [value, setValue] = useState(1);
    const [number, setNumber] = useState(null);
    const [error, setError] = useState(null);

    const submitForm = () => {
        if (!number) {
            setError('Введите номер телефона');
        } else {
            setError(null);
            // тут будет fetch
        }
    }

    return (
        <Spacer>
        <Paragraph>Установить валидность паспорта пользователя</Paragraph>
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
                    <RadioField
                        options={[{
                            label: 'Валиден',
                            value: 1,
                            disabled: false,
                        }, {
                            label: 'Не валиден',
                            value: 2,
                            disabled: false,
                        }
                    ]}
                        value={value}
                        onChange={(value) => setValue(value)}
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
        </Spacer>
    )
}

export default ServicePasport
