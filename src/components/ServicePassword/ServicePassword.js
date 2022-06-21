import { Block, BlockTabs } from "@qiwi/pijma-desktop";
import { useState } from 'react';
import ServiceExtend from "./password/ServiceExtend";
import ServiceReset from "./password/ServiceReset";
import ServiceReturn from "./password/ServiceReturn";


const ServicePassword = () => {

	const [select, setSelect] = useState(0);

	return (
		<Block>
			<BlockTabs
				select={select}
				onChange={setSelect}
				items={[
					{
						title: 'Продлить',
						icon: 'refund',
						content: <ServiceExtend />,
					},
					{
						title: 'Обнулить',
						icon: 'reject',
						content: <ServiceReset />,
					},
					{
						title: 'Вернуть',
						icon: 'backward',
						content: <ServiceReturn />,
					}
				]}
			/>
		</Block>
	)
}

export default ServicePassword