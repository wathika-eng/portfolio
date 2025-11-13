import React, { useState } from 'react';
import Image from 'next/image';
import { FiGithub, FiExternalLink, FiImage } from 'react-icons/fi';
import { motion } from 'framer-motion';
import ProjectDetailModal from '../ProjectDetailModal';
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
	SiCss3,
	SiDart,
	SiFlutter,
	SiPostman
} from 'react-icons/si';

const WorkCard = ({
	img,
	name,
	description,
	technologies = [],
	githubUrl,
	liveUrl,
	onClick,
	images = [],
	project,
}) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	// Map technology names to their respective icons
	const getTechIcon = (tech) => {
		const techMap = {
			'Django': { icon: SiDjango },
			'JavaScript': { icon: SiJavascript },
			'Python': { icon: SiPython },
			'React': { icon: SiReact },
			'React Native': { icon: SiReact },
			'ReactNative': { icon: SiReact },
			'Go': { icon: SiGo },
			'Golang': { icon: SiGo },
			'PostgreSQL': { icon: SiPostgresql },
			'MongoDB': { icon: SiMongodb },
			'Docker': { icon: SiDocker },
			'Next.js': { icon: SiNextdotjs },
			'Tailwind': { icon: SiTailwindcss },
			'TailwindCSS': { icon: SiTailwindcss },
			'TypeScript': { icon: SiTypescript },
			'Node.js': { icon: SiNodedotjs },
			'Express': { icon: SiExpress },
			'Flask': { icon: SiFlask },
			'FastAPI': { icon: SiFastapi },
			'Redis': { icon: SiRedis },
			'Git': { icon: SiGit },
			'Linux': { icon: SiLinux },
			'HTML': { icon: SiHtml5 },
			'CSS': { icon: SiCss3 },
			'SQL': { icon: SiPostgresql },
			'Dart': { icon: SiDart },
			'Flutter': { icon: SiFlutter },
			'Postman': { icon: SiPostman },
		};
		
		return techMap[tech] || { icon: null };
	};

	const handleCardClick = () => {
		setIsModalOpen(true);
	};

	const projectData = project || {
		id: Math.random().toString(),
		title: name,
		description: description,
		imageSrc: img,
		images: images.length > 0 ? images : [img],
		technologies: technologies,
		githublink: githubUrl,
		url: liveUrl,
	};

	return (
		<>
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				whileHover={{ y: -8 }}
				onClick={handleCardClick}
				className='group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 cursor-pointer'>
				
				{/* Image Section */}
				<div className='relative overflow-hidden h-56 tablet:h-64'>
					<Image
						alt={name}
						className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out'
						src={img}
						width={800}
						height={600}
						quality={100}
					/>
					<div className='absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 group-hover:from-black/70 transition-all duration-300' />
					
					{/* Multiple Images Indicator */}
					{images && images.length > 1 && (
						<div className='absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1.5 bg-black/70 backdrop-blur-sm rounded-full text-white text-xs font-medium'>
							<FiImage className='w-3.5 h-3.5' />
							<span>{images.length} photos</span>
						</div>
					)}
					
					{/* Overlay Actions */}
					<div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
						<div className='flex gap-3'>
							{githubUrl && (
								<button
									onClick={(e) => {
										e.stopPropagation();
										window.open(githubUrl, '_blank');
									}}
									className='p-3 bg-white/90 dark:bg-gray-800/90 rounded-lg hover:bg-white dark:hover:bg-gray-800 transition-all duration-200 hover:scale-110'
									aria-label='View GitHub repository'>
									<FiGithub className='w-5 h-5 text-gray-800 dark:text-white' />
								</button>
							)}
							{(liveUrl || onClick) && (
								<button
									onClick={(e) => {
										e.stopPropagation();
										if (onClick) onClick();
										else if (liveUrl) window.open(liveUrl, '_blank');
									}}
									className='p-3 bg-gray-900/90 dark:bg-white/90 rounded-lg hover:bg-gray-900 dark:hover:bg-white transition-all duration-200 hover:scale-110'
									aria-label='View live project'>
									<FiExternalLink className='w-5 h-5 text-white dark:text-gray-900' />
								</button>
							)}
						</div>
					</div>

					{/* Bottom gradient for title */}
					<div className='absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
						<p className='text-sm font-medium'>Click to view details</p>
					</div>
				</div>

				{/* Content Section */}
				<div className='p-6 space-y-4'>
					<div className='space-y-2'>
						<h3 className='text-xl font-bold text-gray-900 dark:text-white transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400'>
							{name || 'Project Name'}
						</h3>
						
						<p className='text-gray-600 dark:text-gray-300 text-sm leading-relaxed line-clamp-3'>
							{description || 'Project description goes here. Provide a brief overview of what the project does and its purpose.'}
						</p>
					</div>

					{/* Technologies */}
					{technologies.length > 0 && (
						<div className='space-y-3'>
							<h4 className='text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide'>
								Tech Stack
							</h4>
							<div className='flex flex-wrap gap-2'>
								{technologies.slice(0, 5).map((tech, index) => {
									const { icon: IconComponent } = getTechIcon(tech);
									return (
										<div
											key={index}
											className='flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:scale-105 transition-transform duration-200 border border-gray-200 dark:border-gray-600'
											title={tech}
										>
											{IconComponent && (
												<IconComponent className='w-4 h-4 text-gray-700 dark:text-gray-300' />
											)}
											<span className='text-xs font-semibold text-gray-700 dark:text-gray-300'>
												{tech}
											</span>
										</div>
									);
								})}
								{technologies.length > 5 && (
									<div className='flex items-center px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600'>
										<span className='text-xs font-semibold text-gray-600 dark:text-gray-300'>
											+{technologies.length - 5}
										</span>
									</div>
								)}
							</div>
						</div>
					)}

					{/* Action Button */}
					<div className='pt-2'>
						<button
							onClick={handleCardClick}
							className='w-full py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 font-semibold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 group/btn'>
							<span>View Project</span>
							<FiExternalLink className='w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200' />
						</button>
					</div>
				</div>
			</motion.div>

			{/* Project Detail Modal */}
			<ProjectDetailModal
				project={projectData}
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
			/>
		</>
	);
};

export default WorkCard;
