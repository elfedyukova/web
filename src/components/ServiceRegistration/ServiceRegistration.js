import { Block, BlockTabs } from "@qiwi/pijma-desktop";
import { useState } from 'react';
import ServiceDrop from "./registration/ServiceDrop";
import ServiceOauth from "./registration/ServiceOauth";



const ServiceRegistration = () => {

	const [select, setSelect] = useState(0);

	return (
		<Block>
			<BlockTabs
				select={select}
				onChange={setSelect}
				items={[
					{
						title: 'Скинуть регистрацию в QIWI',
						icon: 'qiwi',
						content: <ServiceDrop />,
					},
					{
						title: 'Сбросить блокировку в oAuth',
						icon: 'reject',
						content: <ServiceOauth />,
					}
				]}
			/>
		</Block>
	)
}

export default ServiceRegistration