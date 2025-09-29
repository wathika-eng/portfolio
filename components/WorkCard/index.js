import React from 'react';
import Image from 'next/image';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { 
	SiDjango, 
	SiJavascript, 
	SiPython, 
	SiReact, 
	SiGo, 
	SiPostgresql, 
	SiMongodb, 
	SiDocker, 
	SiNextdotjs,
	SiTailwindcss,
	SiTypescript,
	SiNodedotjs,
	SiExpress,
	SiFlask,
	SiFastapi,
	SiRedis,
	SiGit,
	SiLinux,
	SiHtml5,
	SiCss3
} from 'react-icons/si';

const WorkCard = ({
	img,
	name,
	description,
	technologies = [],
	githubUrl,
	liveUrl,
	onClick,
}) => {
	// Map technology names to their respective icons and colors
	const getTechIcon = (tech) => {
		const techMap = {
			'Django': { icon: SiDjango, color: 'text-green-600' },
			'JavaScript': { icon: SiJavascript, color: 'text-yellow-500' },
			'Python': { icon: SiPython, color: 'text-blue-500' },
			'React': { icon: SiReact, color: 'text-blue-400' },
			'Go': { icon: SiGo, color: 'text-blue-400' },
			'Golang': { icon: SiGo, color: 'text-blue-400' },
			'PostgreSQL': { icon: SiPostgresql, color: 'text-blue-700' },
			'MongoDB': { icon: SiMongodb, color: 'text-green-500' },
			'Docker': { icon: SiDocker, color: 'text-blue-600' },
			'Next.js': { icon: SiNextdotjs, color: 'text-gray-900 dark:text-white' },
			'Tailwind': { icon: SiTailwindcss, color: 'text-teal-500' },
			'TailwindCSS': { icon: SiTailwindcss, color: 'text-teal-500' },
			'TypeScript': { icon: SiTypescript, color: 'text-blue-600' },
			'Node.js': { icon: SiNodedotjs, color: 'text-green-600' },
			'Express': { icon: SiExpress, color: 'text-gray-700' },
			'Flask': { icon: SiFlask, color: 'text-gray-800' },
			'FastAPI': { icon: SiFastapi, color: 'text-green-600' },
			'Redis': { icon: SiRedis, color: 'text-red-600' },
			'Git': { icon: SiGit, color: 'text-orange-600' },
			'Linux': { icon: SiLinux, color: 'text-gray-800' },
			'HTML': { icon: SiHtml5, color: 'text-orange-600' },
			'CSS': { icon: SiCss3, color: 'text-blue-600' },
		};
		
		return techMap[tech] || { icon: null, color: 'text-gray-600' };
	};
	return (
		<motion.div
			initial={{ opacity: 0, y: 30 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6 }}
			whileHover={{ y: -8 }}
			className='group bg-white dark:bg-gray-700 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-600'>
			
			{/* Image Section */}
			<div className='relative overflow-hidden h-56 tablet:h-64'>
				<Image
					alt={name}
					className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out'
					src={img}
					width={800}
					height={600}
					quality={100}
				/>
				<div className='absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300' />
				
				{/* Overlay Actions */}
				<div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
					<div className='flex gap-3'>
						{githubUrl && (
							<button
								onClick={(e) => {
									e.stopPropagation();
									window.open(githubUrl);
								}}
								className='p-3 bg-white/90 dark:bg-gray-800/90 rounded-lg hover:bg-white dark:hover:bg-gray-800 transition-colors duration-200'>
								<FiGithub className='w-5 h-5 text-gray-800 dark:text-white' />
							</button>
						)}
						<button
							onClick={onClick}
							className='p-3 bg-gray-900/90 dark:bg-white/90 rounded-lg hover:bg-gray-900 dark:hover:bg-white transition-colors duration-200'>
							<FiExternalLink className='w-5 h-5 text-white dark:text-gray-900' />
						</button>
					</div>
				</div>
			</div>

			{/* Content Section */}
			<div className='p-6 space-y-4'>
				<div className='space-y-2'>
					<h3 className='text-xl font-bold text-gray-900 dark:text-white transition-colors duration-300'>
						{name || 'Project Name'}
					</h3>
					
					<p className='text-gray-600 dark:text-gray-300 text-sm leading-relaxed line-clamp-3'>
						{description || 'Project description goes here. Provide a brief overview of what the project does and its purpose.'}
					</p>
				</div>

				{/* Technologies */}
				{technologies.length > 0 && (
					<div className='space-y-3'>
						<h4 className='text-sm font-semibold text-gray-700 dark:text-gray-300'>Technologies:</h4>
						<div className='flex flex-wrap gap-3'>
							{technologies.slice(0, 6).map((tech, index) => {
								const { icon: IconComponent, color } = getTechIcon(tech);
								return (
									<div
										key={index}
										className='flex items-center gap-2 px-3 py-1.5 bg-gray-100 dark:bg-gray-600 rounded-md'
										title={tech}
									>
										{IconComponent && (
											<IconComponent className={`w-4 h-4 ${color}`} />
										)}
										<span className='text-gray-700 dark:text-gray-200 text-xs font-medium'>
											{tech}
										</span>
									</div>
								);
							})}
							{technologies.length > 6 && (
								<span className='px-3 py-1.5 bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-300 rounded-md text-xs font-medium'>
									+{technologies.length - 6} more
								</span>
							)}
						</div>
					</div>
				)}

				{/* Action Button */}
				<div className='pt-2'>
					<button
						onClick={onClick}
						className='w-full py-2.5 bg-gray-50 dark:bg-gray-600 hover:bg-gray-100 dark:hover:bg-gray-500 text-gray-700 dark:text-gray-200 font-medium rounded-lg transition-all duration-300 border border-gray-200 dark:border-gray-500'>
						View Project Details
					</button>
				</div>
			</div>
		</motion.div>
	);
};

export default WorkCard;
