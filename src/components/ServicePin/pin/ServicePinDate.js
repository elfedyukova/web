import { Alert, Block, BlockContent, Button, Flex, FlexItem, Form, Icon, Paragraph, Spacer, TextField } from "@qiwi/pijma-desktop";
import { useState } from 'react';
import { apiTerminalPinCodeSet, apiTerminalPinCodeSetLastDate } from "../../../api/numbers";
import { formatDate, formatNumber } from "../../../lib/utill";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ServicePinDate = () => {

    const [number, setNumber] = useState(null);
    const [startDate, setStartDate] = useState(new Date());
    const [error, setError] = useState(null);
    const [status, setStatus] = useState(null);
    const [isOpen, setIsOpen] = useState(null);

    const handleClick = (e) => {
        e.preventDefault();
        setIsOpen(!isOpen);
    };
    const handleChange = (e) => {
        setIsOpen(!isOpen);
        setStartDate(e);
    };


    const submitForm = () => {
        if (!number) {
            setError('Введите номер телефона');
        } else {
            setError(null);
            apiTerminalPinCodeSetLastDate(formatNumber(number), formatDate(startDate)).then((res) => {
                setStatus("ok")
            }).catch((err) => {
                setStatus("error")
            })

        }
    }

    return (
        <Spacer>
            <Paragraph>Установить время последней смены PIN-кода</Paragraph>
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
                    <Flex align="flex-start">
                        <FlexItem pr={4}>
                            <TextField
                                title="PIN"
                                type="text"
                                value={formatDate(startDate)}
                            //onChange={text => setPin(text)}
                            />
                        </FlexItem>
                        <FlexItem pr={4}>
                            <Button kind="simple" size="normal" icon={<Icon name="calendar" />} onClick={() => setIsOpen(!isOpen)} />
                        </FlexItem>
                    </Flex>
                    {isOpen && (
                        <DatePicker selected={startDate} onChange={handleChange} inline />
                    )}
                    <Button
                        kind="brand"
                        type="submit"
                        size="accent"
                        text="Установить"
                        onClick={() => submitForm()}
                    />
                </Spacer>
            </Form>
            {status && <Alert
                width={154}
                type={status == "ok" ? "success" : "failure"}
                text={status == "ok" ? "Успешно" : "Неуспешно. Пожалуйста, попробуйте позже."}
            />}
        </Spacer>
    )
}

export default ServicePinDate