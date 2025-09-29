import React from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { motion } from 'framer-motion';
import yourData from '../../data/portfolio.json';

const Socials = ({ className }) => {
	const getSocialIcon = (title) => {
		switch (title.toLowerCase()) {
			case 'github':
				return FiGithub;
			case 'linkedin':
				return FiLinkedin;
			case 'email':
				return FiMail;
			default:
				return FiMail;
		}
	};

	return (
		<div className={`${className} flex gap-4 justify-center tablet:justify-start`}>
			{yourData.socials.map((social, index) => {
				const IconComponent = getSocialIcon(social.title);
				return (
					<motion.a
						key={index}
						href={social.link}
						target="_blank"
						rel="noopener noreferrer"
						whileHover={{ scale: 1.05, y: -2 }}
						whileTap={{ scale: 0.95 }}
						className="group relative p-3 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-600"
					>
						<IconComponent className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300" />
						
						{/* Tooltip */}
						<div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
							{social.title}
						</div>
					</motion.a>
				);
			})}
		</div>
	);
};

export default Socials;
