import React from 'react';
import Image from 'next/image';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { motion } from 'framer-motion';

const WorkCard = ({
	img,
	name,
	description,
	technologies = [],
	githubUrl,
	liveUrl,
	onClick,
}) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className='overflow-hidden rounded-lg p-4 bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300 link'
			onClick={onClick}>
			<div className='relative rounded-lg overflow-hidden group h-64 md:h-80'>
				<Image
					alt={name}
					className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out'
					src={img}
					width={800}
					height={600}
					quality={100}
				/>
				<div className='absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center'>
					<span className='text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-lg font-medium'>
						View Details
					</span>
				</div>
			</div>

			<div className='mt-6 space-y-3'>
				<h1 className='text-2xl md:text-3xl font-bold text-gray-900 dark:text-white'>
					{name || 'Project Name'}
				</h1>

				<p className='text-gray-600 dark:text-gray-300 text-lg'>
					{description ||
						'Project description goes here. Provide a brief overview of what the project does and its purpose.'}
				</p>

				{technologies.length > 0 && (
					<div className='flex flex-wrap gap-2 pt-2'>
						{technologies.map((tech, index) => (
							<span
								key={index}
								className='px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm text-gray-800 dark:text-gray-200'>
								{tech}
							</span>
						))}
					</div>
				)}

				<div className='flex space-x-4 pt-4'>
					{githubUrl && (
						<a
							href={githubUrl}
							target='_blank'
							rel='noopener noreferrer'
							className='flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors'
							onClick={(e) => e.stopPropagation()}>
							<FiGithub className='mr-2' size={20} />
							Code
						</a>
					)}
					{liveUrl && (
						<a
							href={liveUrl}
							target='_blank'
							rel='noopener noreferrer'
							className='flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors'
							onClick={(e) => e.stopPropagation()}>
							<FiExternalLink className='mr-2' size={20} />
							Live Demo
						</a>
					)}
				</div>
			</div>
		</motion.div>
	);
};

export default WorkCard;
