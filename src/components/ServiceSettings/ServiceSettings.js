import { Block, BlockTabs } from "@qiwi/pijma-desktop";
import { useState } from 'react';
import ServiceAccount from "./settings/ServiceAccount";
import ServiceFavourites from "./settings/ServiceFavourites";
import ServiceP2P from "./settings/ServiceP2P";
import ServicePrioritet from "./settings/ServicePrioritet";


const ServiceSettings = () => {

	const [select, setSelect] = useState(0);

	return (
		<Block>
			<BlockTabs
				select={select}
				onChange={setSelect}
				items={[
					{
						title: 'P2P',
						icon: 'transfer',
						content: <ServiceP2P />,
					},
					{
						title: 'Приоритет',
						icon: 'crown',
						content: <ServicePrioritet />,
					},
					{
						title: 'Избранное',
						icon: 'user',
						content: <ServiceFavourites />,
					},
					{
						title: 'Счет',
						icon: 'bank',
						content: <ServiceAccount />,
					}
				]}
			/>
		</Block>
	)
}

export default ServiceSettings