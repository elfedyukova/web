import { Block, BlockContent, Button, Form, Paragraph, RadioField, Spacer, TextField } from "@qiwi/pijma-desktop";
import { useState } from 'react';
import { apiBalanceDelete } from "../../../api/numbers";
import { formatNumber } from "../../../lib/utill";
import ActionPhone from "../../ActionPhone/ActionPhone";

const ServiceAccount = () => {

    const currencies = ["RUB", "KZT", "USD", "EUR"];
    const [number, setNumber] = useState(null);
    const [status, setStatus] = useState(null);
    const [error, setError] = useState(null);
    const [radio, setRadio] = useState(1);

    const submitForm = () => {
        if (!number) {
            setError('Введите номер телефона');
        } else {
            setError(null);
            apiBalanceDelete(formatNumber(number), currencies[radio - 1]).then((res) => {
                setStatus("ok")
            }).catch((err) => {
                setStatus("error")
            })

        }
    }

    return (

        <ActionPhone
            title=''
            buttonLabel='Отправить'
            number={number}
            setNumber={setNumber}
            action={submitForm}
            error={error}
            status={status}
            radio={radio}
            setRadio={setRadio}
            radioOptions={[{
                label: 'RUB',
                value: 1,
                disabled: false,
            }, {
                label: 'KZT',
                value: 2,
                disabled: false,
            }, {
                label: 'USD',
                value: 3,
                disabled: false,
            }, {
                label: 'EUR',
                value: 4,
                disabled: false,
            }
            ]}
        />
    )
}

export default ServiceAccount
