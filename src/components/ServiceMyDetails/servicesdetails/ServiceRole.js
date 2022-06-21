import { Alert, Block, BlockContent, Button, Details, Form, RadioField, Spacer, TextField } from "@qiwi/pijma-desktop";
import { useState } from 'react';
import { apiGetUserRole } from "../../../api/numbers";
import { formatNumber } from "../../../lib/utill";

const ServiceRole = () => {

    const [info, setInfo] = useState(null);
    const [value, setValue] = useState(1);
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

            if (value === 1) {

                apiGetUserRole(formatNumber(number)).then((res) => {
                    //console.log(res);
                    setInfo(res);
                    setRequestError({ error: false, message: "" })
                }).catch((err) => {
                    setRequestError({ error: true, message: err.errorMessage });
                    //console.log(err);
                    setInfo(null);

                })

            }
            else {

                // дописать потом 
            }
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
                            label: 'Получить роль пользователя',
                            value: 1,
                            disabled: false,
                        }, {
                            label: 'Сменить роль пользователя',
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
                        { title: 'ID', content: info.id },
                        { title: 'Имя', content: info.name },
                        { title: 'Описание', content: info.description },
                    ]} />
                    {/* {JSON.stringify(info)} */}
                </Spacer>

            )}
        </Spacer>
    )
}

export default ServiceRole


