import { Block, BlockContent, Button, Form, RadioField, Spacer, TextField } from "@qiwi/pijma-desktop";
import { useState } from 'react';

const ServiceP2P  = () => {

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
                                    label: 'Установить P2P флаг',
                                    value: 1,
                                    disabled: false,
                                }, {
                                    label: 'Снять P2P флаг',
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
                                text="Отправить"
                                onClick={() => submitForm()}
                            />
                        </Spacer>
                    </Form>
                </Spacer>
    )
}

export default ServiceP2P
