import { Block, BlockTabs } from "@qiwi/pijma-desktop";
import { useState } from 'react';
import ServiceBlock from "./services/ServiceBlock";
import ServiceUnblock from "./services/ServiceUnblock";



const ServiceUser = () => {

	const [select, setSelect] = useState(0);

	return (
		<Block>
			<BlockTabs
				select={select}
				onChange={setSelect}
				items={[
					{
						title: 'Заблокировать пользователя',
						icon: 'refund',
						content: <ServiceBlock />,
					},
					{
						title: 'Разблокировать пользователя',
						icon: 'reject',
						content: <ServiceUnblock />,
					}
				]}
			/>
		</Block>
	)
}

export default ServiceUser