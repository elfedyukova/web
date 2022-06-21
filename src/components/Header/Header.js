import { Link, useLocation, useNavigate } from "react-router-dom";
import {Actions, Block, BlockContent, Box, Flex, FlexItem, Header, HeaderMenu, Lnk} from '@qiwi/pijma-desktop'
import { useState } from "react";

export default function AppHeader() {

  let navigate = useNavigate();
  let location = useLocation();

    return (
<Block>
      <BlockContent indent="s">
        <Header>
          <Flex height={1} justify='space-between'>
            <FlexItem align="center" shrink={0} mr={10}>
              <Lnk href={window.location.href}>
                <Box
                  as="img"
                  src="https://static.qiwi.com/img/qiwi_com/header/qiwi-wallet-logo.svg"
                  width={24}
                  height={12}
                />
              </Lnk>
            </FlexItem>
            <FlexItem shrink={0} mr={6}>
              <HeaderMenu
                children={[
                  { active: location.pathname === '/', title: 'Главная', onClick: () => navigate('/', { replace: true }) },
                  { active: location.pathname === '/get', title: 'Получить номер', onClick: () => navigate('/get', { replace: true }) },
                  { active: location.pathname === '/service', title: 'Сервис', onClick: () => navigate('/service', { replace: true }) },
                ]}
              />
            </FlexItem>
          </Flex>
        </Header>
      </BlockContent>
    </Block>

    )
}