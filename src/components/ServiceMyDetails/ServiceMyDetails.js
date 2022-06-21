import { Block, BlockTabs } from "@qiwi/pijma-desktop";
import { useState } from 'react';
import ServiceEmail from "./servicesdetails/ServiceEmail";
import ServiceNickname from "./servicesdetails/ServiceNickname";
import ServiceRole from "./servicesdetails/ServiceRole";


const ServiceMyDetails = () => {

	const [select, setSelect] = useState(0);

	return (
		<Block>
			<BlockTabs
				select={select}
				onChange={setSelect}
				items={[
					{
						title: 'Почта',
						icon: 'email',
						content: <ServiceEmail />,
					},
					{
						title: 'Никнейм QIWI Кошелька',
						icon: 'user',
						content: <ServiceNickname />,
					}
					,
					{
						title: 'Роль пользователя',
						icon: 'user',
						content: <ServiceRole />,
					}
				]}
			/>
		</Block>
	)
}

export default ServiceMyDetails