import styles from './style';
import {
	Navbar,
	Hero,
	Stats,
	Business,
	Billing,
	CarDeal,
	Clients,
	CTA,
	Testimonials,
	Footer,
} from './components';

const App = () => {
	return (
		<div className="bg-primary w-full overflow-hidden">
			<header className={`${styles.paddingX} ${styles.flexCenter}`}>
				<div className={`${styles.boxWidth} text-white`}>
					<Navbar />
				</div>
			</header>

			<section className={`${styles.flexStart}`}>
				{/* <div className={`${styles.boxWidth} text-white`}> */}
				<Hero />
				{/* </div> */}
			</section>

			<section className={`${styles.flexStart} ${styles.paddingX}`}>
				<div className={`${styles.boxWidth} text-white`}>
					<Stats />
				</div>
			</section>

			<section className={`${styles.flexStart} ${styles.paddingX}`}>
				<div className={`${styles.boxWidth} text-white`}>
					<Business />
					<Billing />
					<CarDeal />
					<Testimonials />
					<Clients />
					<CTA />
					<Footer />
				</div>
			</section>
		</div>
	);
};

export default App;
