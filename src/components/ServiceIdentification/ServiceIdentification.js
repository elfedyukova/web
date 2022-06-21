import { Block, BlockTabs } from "@qiwi/pijma-desktop";
import { useState } from 'react';
import ServicePasport from "./identification/ServicePasport";
import ServiceKzt from "./identification/ServiceKzt";
import ServiceRubEurUsd from "./identification/ServiceRubEurUsd";

const ServiceIdentification = () => {

	const [select, setSelect] = useState(0);

	return (
		<Block>
			<BlockTabs
				select={select}
				onChange={setSelect}
				items={[
					{
						title: 'Для счетов RUB, EUR и USD',
						icon: 'card',
						content: <ServiceRubEurUsd />,
					},
					{
						title: 'Для счета KZT',
						icon: 'card',
						content: <ServiceKzt />,
					},
					{
						title: 'Паспорт пользователя',
						icon: 'passport',
						content: <ServicePasport />,
					}
				]}
			/>
		</Block>
	)
}

export default ServiceIdentification