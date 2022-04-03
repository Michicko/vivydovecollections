import React from "react";
import SkeletonElement from "./SkeletonElement";

const SkeletonProductCard = () => {
  return (
		<div className='skeleton-wrapper'>
			<div className='skeleton-product-card'>
				<SkeletonElement type='card' />
				<div className='body'>
					<SkeletonElement type='text' />
					<SkeletonElement type='text' />
				</div>
			</div>
		</div>
	);
}
 
export default SkeletonProductCard;