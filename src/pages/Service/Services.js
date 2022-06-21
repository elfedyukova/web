import { Block, BlockContent, Card, Flex, FlexItem, MenuLink } from "@qiwi/pijma-desktop";
import { useEffect } from 'react';
import { useSearchParams } from "react-router-dom";
import ServiceInformation from '../../components/ServiceInformation/ServiceInformation';
import ServicePassword from '../../components/ServicePassword/ServicePassword';
import ServiceRegistration from "../../components/ServiceRegistration/ServiceRegistration";
import ServiceUser from "../../components/ServiceUser/ServiceUser";
import ServiceSettings from "../../components/ServiceSettings/ServiceSettings";
import ServicePin from "../../components/ServicePin/ServicePin";
import ServicePayment from "../../components/ServicePayment/ServicePayment";
import ServiceMyDetails from "../../components/ServiceMyDetails/ServiceMyDetails";
import ServiceIdentification from "../../components/ServiceIdentification/ServiceIdentification";

export default function Services() {

  let [searchParams, setSearchParams] = useSearchParams();
  let m = searchParams.get("m");

  useEffect(() => {
    if (m === null) {
      setSearchParams({ m: 0 })
    }
  }, [m])

  const menuItems = [
    'Информация', 'Пароль', 'Регистрация', 'Пользователь', 'Настройки', 'PIN-код', 'Платежи', 'Мои данные', 'Идентификация'
  ]

  return (
    <Flex direction='row' justify='space-between'>
      <FlexItem width={0.65}>

        {parseInt(m) === 0 ? (
          <ServiceInformation />
         ) : parseInt(m) === 1 ? (
          <ServicePassword />
         )
        : parseInt(m) === 2 ? (
        <ServiceRegistration />
        )
        : parseInt(m) === 3 ? (
          <ServiceUser />
        )
        : parseInt(m) === 4 ? (
          <ServiceSettings />
        )
        : parseInt(m) === 5 ? (
          <ServicePin />
        )
        : parseInt(m) === 6 ? (
          <ServicePayment />
        )
        : parseInt(m) === 7 ? (
          <ServiceMyDetails />
          )
          : parseInt(m) === 8 ? (
            <ServiceIdentification /> 
        ) : null}
        
      </FlexItem>

      <FlexItem width={1 / 3}>
        <Block>
          <Card py={5}>
            {menuItems.map((item, idx) => (
              <MenuLink
                key={idx}
                title={item}
                onClick={() => setSearchParams({ m: idx })}
              />
            ))}
          </Card>
        </Block>
      </FlexItem>
    </Flex>

  )
}