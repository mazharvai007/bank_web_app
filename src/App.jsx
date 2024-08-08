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

			<section id="home" className={`${styles.flexStart}`}>
				{/* <div className={`${styles.boxWidth} text-white`}> */}
				<Hero />
				{/* </div> */}
			</section>

			<section className={`${styles.flexStart} ${styles.paddingX}`}>
				<div className={`${styles.boxWidth} text-white`}>
					<Stats />
				</div>
			</section>

			<section
				id="features"
				className={`${styles.flexStart} ${styles.paddingX}`}
			>
				<div className={`${styles.boxWidth} text-white`}>
					<Business />
				</div>
			</section>

			<section
				id="product"
				className={`${styles.flexStart} ${styles.paddingX}`}
			>
				<div className={`${styles.boxWidth} `}>
					<Billing />
				</div>
			</section>

			<section className={`${styles.flexStart} ${styles.paddingX}`}>
				<div className={`${styles.boxWidth} `}>
					<CarDeal />
				</div>
			</section>

			<section
				id="client"
				className={`${styles.flexStart} ${styles.paddingX}`}
			>
				<div className={`${styles.boxWidth} `}>
					<Testimonials />
				</div>
			</section>

			<section className={`${styles.flexStart} ${styles.paddingX}`}>
				<div className={`${styles.boxWidth} `}>
					<Clients />
				</div>
			</section>

			<section className={`${styles.flexStart} ${styles.paddingX}`}>
				<div className={`${styles.boxWidth} `}>
					<CTA />
					<Footer />
				</div>
			</section>
		</div>
	);
};

export default App;
