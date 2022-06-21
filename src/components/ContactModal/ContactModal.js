import { Actions, Block, BlockContent, Breaker, Button, Form, Heading, Paragraph, SimpleModal, Spacer, TextField, Typo } from "@qiwi/pijma-desktop";
import { useState } from 'react';

const ContactModal = () => {


    const [modal, setModal] = useState(false);


    return (
        <>
            <Block>
                <BlockContent indent="m">
                    <Spacer size="m">
                        <Typo as="p" display="block" size="4" height="6" weight="300" color="#000">
                            <Breaker>{'Не нашли ответ на свой вопрос? \n Мы здесь, чтобы помочь вам!'}</Breaker>
                        </Typo>
                        <Button
                            kind="simple"
                            size="minor"
                            text="Связаться с нами"
                            onClick={() => setModal(true)}
                        />
                    </Spacer>
                </BlockContent>
            </Block>

            <SimpleModal
                show={modal}
                size="m"
                closable
                backdropClose
                onHide={() => setModal(false)}
                children={
                    <Spacer size="l">
                        <Spacer size="l">
                            <Heading size="2">Куда отправить квитанцию?</Heading>
                            {/* <TextField
                title="Адрес электронной почты"
                type="text"
                value={text}
                onChange={text => setText(text)}
              /> */}
                        </Spacer>
                        <Actions size="normal">
                            <Button
                                kind="brand"
                                size="normal"
                                type="button"
                                text="Отправить"
                                onClick={() => setModal(false)}
                            />
                        </Actions>
                    </Spacer>
                }
            />
        </>
    )

}

export default ContactModal