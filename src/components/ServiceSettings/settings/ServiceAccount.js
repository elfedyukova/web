import { Block, BlockContent, Button, Form, Paragraph, RadioField, Spacer, TextField } from "@qiwi/pijma-desktop";
import { useState } from 'react';

const ServiceAccount  = () => {

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
        <Paragraph>Удалить счет</Paragraph>
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
                            label: 'RUB',
                            value: 1,
                            disabled: false,
                        }, {
                            label: 'KZT',
                            value: 2,
                            disabled: false,
                        }, {
                            label: 'USD',
                            value: 2,
                            disabled: false,
                        }, {
                            label: 'UER',
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
                        text="Удалить"
                        onClick={() => submitForm()}
                    />
                </Spacer>
            </Form>
        </Spacer>
    )
}

export default ServiceAccount
