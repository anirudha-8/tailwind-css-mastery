import FeatureCard from "../components/FeatureCard";

const Feature = () => {
	return (
		<div className="p-4 grid sm:grid-cols-2 md:grid-cols-3 gap-8">
			<FeatureCard featureName={"Feature One"} />
			<FeatureCard featureName={"Feature Two"} />
			<FeatureCard featureName={"Feature Three"} />
			<FeatureCard featureName={"Feature Four"} />
			<FeatureCard featureName={"Feature Five"} />
			<FeatureCard featureName={"Feature Six"} />
			<FeatureCard featureName={"Feature Seven"} />
			<FeatureCard featureName={"Feature Eight"} />
			<FeatureCard featureName={"Feature Nine"} />
			<FeatureCard featureName={"Feature Ten"} />
			<FeatureCard featureName={"Feature Eleven"} />
			<FeatureCard featureName={"Feature Twelve"} />
		</div>
	);
};
export default Feature;
