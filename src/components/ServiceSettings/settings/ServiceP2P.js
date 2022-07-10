import { useState } from 'react';
import { apiP2Pdisable, apiP2Penable } from '../../../api/numbers';
import { formatNumber } from "../../../lib/utill";
import ActionPhone from '../../ActionPhone/ActionPhone';

const ServiceP2P = () => {

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
                apiP2Penable(formatNumber(number)).then((res) => {
                    setStatus("ok")
                }).catch((err) => {
                    setStatus("error")
                })
            } else {
                apiP2Pdisable(formatNumber(number)).then((res) => {
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

export default ServiceP2P
