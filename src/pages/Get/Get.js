import { Actions, Block, BlockContent, Box, Breaker, Button, Caption, Checkbox, Details, Flex, FlexItem, Form, Heading, Icon, Paragraph, Section, SelectField, SimpleModal, Spacer, TextAreaField, TextField, Typo } from "@qiwi/pijma-desktop";
import { Link } from "react-router-dom";
//import { useState } from "react";
import React, { useState } from "react";
import { apiGetUser, apiGetUserData } from "../../api/numbers";
import ContactModal from "../../components/ContactModal/ContactModal";




export default function Get() {


  const [checked, setChecked] = React.useState({
    first: false,
    second: false,
    third: false,
    fourth: false
  });
  const [info, setInfo] = useState(null);
  const [number, setNumber] = useState(null);
  const [level, setLevel] = React.useState({ id: 1 })
  const equals = (a, b) => a.id === b.id;
  const [time, setTime] = React.useState(3600);
  const [modal, setModal] = React.useState(false);
  const items = [
    {
      text: 'Аноним',
      value: {
        id: 1,
      }
    },
    {
      text: 'Условно идентифицированный',
      value: {
        id: 2,
      }
    },
    {
      text: 'Полностью идентифицированный',
      value: {
        id: 3,
      }
    },
    {
      text: 'Аноним с данными',
      value: {
        id: 4,
      }
    },
    {
      text: 'Идентифицированный верифицированный',
      value: {
        id: 5,
      }
    },
  ];

  const submitForm = () => {
    apiGetUser().then((res) => {
      console.log(res);
      setNumber(res);
      apiGetUserData(res).then((res2) => {
        console.log(res2);
        setInfo(res2);

        //setInfo(res);
        //setRequestError({ error: false, message: "" })
      })

    }
    )
  }

  return (
    <Flex direction='row' justify='space-between'>
      <FlexItem width={0.65}>
        <Block>
          <BlockContent>
            <Spacer size="l">
              <Checkbox
                onChange={() => setChecked({ ...checked, first: !checked.first })}
                checked={checked.first}
                label="Протухший пароль"
              />
              <Checkbox
                onChange={() => setChecked({ ...checked, second: !checked.second })}
                checked={checked.second}
                label="Заблокированный номер"
              />
              <Checkbox
                onChange={() => setChecked({ ...checked, second: !checked.second })}
                checked={checked.second}
                label="Пакет Приоритет"
              />
              <Checkbox
                onChange={() => setChecked({ ...checked, second: !checked.second })}
                checked={checked.second}
                label="4-ный смс-код"
              />
              <SelectField
                title="Выбрать уровень идентификации"
                value={level}
                items={items}
                equals={equals}
                autoFocus
                onChange={(value) => setLevel(value)}
              />
              <Box width={64}>
                <TextAreaField
                  title="Время аренды"
                  help="Время не должно превышать 28800 секунд (8 часов)"
                  value={time}
                  onChange={text => setTime(text)}
                />
              </Box>

              <Button
                kind="brand"
                type="submit"
                size="accent"
                text="Получить"
                onClick={() => submitForm()}
              />
              {info && number && (

                <Spacer>
                  {/* <Paragraph>Информация о пользователе</Paragraph> */}
                  <Details dots children={[
                    { title: 'Number', content: number },
                    { title: 'Password', content: info.pass },
                    { title: 'smsCode', content: info.smsCode },
                    { title: 'oauthCode', content: info.oauthCode },
                    { title: 'prsLkPin', content: info.prsLkPin },
                    { title: 'ptpId', content: info.ptpId },
                    { title: 'recaptcha', content: info.recaptcha },
                    { title: 'contractPublicId', content: info.contractPublicId },
                  ]} />
                  {/* {JSON.stringify(info)} */}
                </Spacer>

              )}
            </Spacer>

          </BlockContent>
        </Block>
      </FlexItem>
      <FlexItem width={1 / 3}>
        <ContactModal />


      </FlexItem>


    </Flex>


  )
}