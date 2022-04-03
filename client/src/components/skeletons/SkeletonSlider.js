import SkeletonProductCard from "./SkeletonProductCard";

const SkeletonSlider = () => {
	return (
		<div className='skeleton-slider'>
			<SkeletonProductCard />
			<SkeletonProductCard />
			<SkeletonProductCard />
			<SkeletonProductCard />
		</div>
	);
};

export default SkeletonSlider;
