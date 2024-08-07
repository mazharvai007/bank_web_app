const Button = (props) => {
	const { title, link, customStyle } = props;

	return (
		<a
			href={link}
			className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient outline rounded-[10px] ${customStyle}`}
		>
			{title}
		</a>
	);
};

export default Button;
