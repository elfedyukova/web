import { Block, BlockTabs } from "@qiwi/pijma-desktop";
import { useState } from 'react';
import ServiceCancelPriority from "./payments/ServiceCancelPriority";
import ServiceResetPayments from "./payments/ServiceResetPayments";

const ServicePayment = () => {

	const [select, setSelect] = useState(0);

	return (
		<Block>
			<BlockTabs
				select={select}
				onChange={setSelect}
				items={[
					{
						title: 'Тестовый магазин',
						icon: 'refund',
						content: <ServiceResetPayments />,
					},
					{
						title: 'Приоритет',
						icon: 'reject',
						content: <ServiceCancelPriority />,
					}
				]}
			/>
		</Block>
	)
}

export default ServicePayment