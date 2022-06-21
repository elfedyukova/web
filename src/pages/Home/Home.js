import { Block, BlockContent, Box, Breaker, Button, Flex, FlexItem, Icon, Paragraph, Spacer, Striper, Typo } from "@qiwi/pijma-desktop";
import ContactModal from "../../components/ContactModal/ContactModal";

export default function Home() {
  return (
    <Flex direction='row' justify='space-between'>
      <FlexItem width={0.65}>
        <Block>
          <BlockContent indent="m">
            <Spacer size="m">
              <Paragraph size="m">
                Фронтенд QA API - есть две версии сайта, которые настроены на новый qa-api-backend. Доступен для стендов TEST и PROD.
              </Paragraph>
              <Paragraph size="m">
                Бэкенд QA API - интерфейс представлен в виде Swagger UI. Каждый контроллер и эндпоинт имеет подпись и описание на русском языке. Доступен для стендов TEST и PROD.
              </Paragraph>
              <Paragraph size="m">
                Если у вас есть желание использовать какие-то методы через сайт, но их еще здесь нет, то дайте знать в чате.
              </Paragraph>
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