import { Block, BlockContent, Button, Form, Paragraph, RadioField, Spacer, TextField } from "@qiwi/pijma-desktop";
import { useState } from 'react';

const ServiceRubEurUsd = () => {

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
        <Paragraph>Установить идентификацию (для счетов RUB, EUR и USD)</Paragraph>
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
                            label: 'Минимальный',
                            value: 1,
                            disabled: false,
                        }, {
                            label: 'Основной ограниченный',
                            value: 2,
                            disabled: false,
                        }, 
                        {
                            label: 'Профессиональный',
                            value: 2,
                            disabled: false,
                        }, 
                        {
                            label: 'Минимальный при этом данные о пользователе остаются',
                            value: 2,
                            disabled: false,
                        }, 
                        {
                            label: 'Основной',
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

export default ServiceRubEurUsd
