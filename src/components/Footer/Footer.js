import { Link } from "react-router-dom";
import { Block, BlockContent, FooterNav, NavLink } from '@qiwi/pijma-desktop'

export default function Footer() {
  return (
    <footer>


      <Block>
        <BlockContent>
          <FooterNav children={[
            { href: 'https://qiwi.com', target: '_self', children: 'Telegramm' },
            { href: '#', target: '_self', children: 'Kaiten' },
            { href: '#', target: '_self', children: 'Помощь' },
            { href: '#', target: '_self', children: 'Новости' },
          ]}
          />
          <NavLink href="https://qiwi.com">Telegramm</NavLink>
        </BlockContent>
      </Block>
    </footer>



  )
}