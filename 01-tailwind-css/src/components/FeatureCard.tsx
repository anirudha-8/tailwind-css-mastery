interface FeatureCardProps {
	featureName: string;
}

const FeatureCard = ({ featureName }: FeatureCardProps) => {
	return (
		<div className="bg-slate-500 p-4 text-white text-center text-2xl sm:text-xl font-semibold rounded  transition-all hover:scale-103 cursor-pointer">
			{featureName}
		</div>
	);
};
export default FeatureCard;
