import { Block, BlockTabs } from "@qiwi/pijma-desktop";
import { useState } from 'react';
import ServicePinDelete from "./pin/ServicePinDelete";
import ServicePinReset from "./pin/ServicePinReset";
import ServiceSet from "./pin/ServiceSet";

const ServicePin = () => {

	const [select, setSelect] = useState(0);

	return (
		<Block>
			<BlockTabs
				select={select}
				onChange={setSelect}
				items={[
					{
						title: 'Установить',
						icon: 'check',
						content: <ServiceSet />,
					},
					{
						title: 'Удалить',
						icon: 'delete',
						content: <ServicePinDelete />,
					},
					{
						title: 'Обнулить',
						icon: 'clock',
						content: <ServicePinReset />,
					}
				]}
			/>
		</Block>
	)
}

export default ServicePin