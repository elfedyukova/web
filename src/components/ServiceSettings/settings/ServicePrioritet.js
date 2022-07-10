import { Block, BlockContent, Button, Form, RadioField, Spacer, TextField } from "@qiwi/pijma-desktop";
import { useState } from 'react';
import { apiPrioritetAdd, apiPrioritetClear } from "../../../api/numbers";
import { formatNumber } from "../../../lib/utill";
import ActionPhone from "../../ActionPhone/ActionPhone";

const ServicePrioritet = () => {

    const [number, setNumber] = useState(null);
    const [status, setStatus] = useState(null);
    const [error, setError] = useState(null);
    const [radio, setRadio] = useState(1);

    const submitForm = () => {
        if (!number) {
            setError('Введите номер телефона');
        } else {
            setError(null);
            if (radio === 1) {
                apiPrioritetAdd(formatNumber(number)).then((res) => {
                    setStatus("ok")
                }).catch((err) => {
                    setStatus("error")
                })
            } else {
                apiPrioritetClear(formatNumber(number)).then((res) => {
                    setStatus("ok")
                }).catch((err) => {
                    setStatus("error")
                })
            }
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
                label: 'Установить P2P флаг',
                value: 1,
                disabled: false,
            }, {
                label: 'Снять P2P флаг',
                value: 2,
                disabled: false,
            }
            ]}
        />
    )
}

export default ServicePrioritet
