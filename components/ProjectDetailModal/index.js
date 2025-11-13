import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiExternalLink, FiGithub } from 'react-icons/fi';
import ProjectGallery from '../ProjectGallery';
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

const ProjectDetailModal = ({ project, isOpen, onClose }) => {
	React.useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}
		return () => {
			document.body.style.overflow = 'unset';
		};
	}, [isOpen]);

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

	if (!project) return null;

	return (
		<AnimatePresence>
			{isOpen && (
				<>
					{/* Backdrop */}
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={onClose}
						className='fixed inset-0 bg-black/60 backdrop-blur-sm z-40'
					/>

					{/* Modal */}
					<div className='fixed inset-0 z-50 overflow-y-auto'>
						<div className='min-h-full flex items-center justify-center p-4'>
							<motion.div
								initial={{ scale: 0.95, opacity: 0, y: 20 }}
								animate={{ scale: 1, opacity: 1, y: 0 }}
								exit={{ scale: 0.95, opacity: 0, y: 20 }}
								transition={{ duration: 0.2 }}
								className='bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden'
								onClick={(e) => e.stopPropagation()}
							>
								{/* Header */}
								<div className='sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4 flex items-center justify-between z-10'>
									<h2 className='text-2xl font-bold text-gray-900 dark:text-white'>
										{project.title}
									</h2>
									<button
										onClick={onClose}
										className='p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200'
										aria-label='Close modal'
									>
										<FiX className='w-6 h-6 text-gray-600 dark:text-gray-300' />
									</button>
								</div>

								{/* Content */}
								<div className='overflow-y-auto max-h-[calc(90vh-80px)]'>
									<div className='p-6 space-y-6'>
										{/* Image Gallery */}
										{project.images && project.images.length > 0 && (
											<div>
												<ProjectGallery 
													images={project.images} 
													projectTitle={project.title}
												/>
											</div>
										)}

										{/* Description */}
										<div>
											<h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-3'>
												About This Project
											</h3>
											<p className='text-gray-600 dark:text-gray-300 leading-relaxed'>
												{project.description}
											</p>
										</div>

										{/* Technologies */}
										{project.technologies && project.technologies.length > 0 && (
											<div>
												<h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-4'>
													Technologies & Tools
												</h3>
												<div className='grid grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-4 gap-3'>
													{project.technologies.map((tech, index) => {
														const { icon: IconComponent } = getTechIcon(tech);
														return (
															<div
																key={index}
																className='flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 border border-gray-200 dark:border-gray-600'
															>
																{IconComponent && (
																	<IconComponent className='w-6 h-6 flex-shrink-0 text-gray-700 dark:text-gray-300' />
																)}
																<span className='text-gray-800 dark:text-gray-200 text-sm font-medium truncate'>
																	{tech}
																</span>
															</div>
														);
													})}
												</div>
											</div>
										)}

										{/* Action Buttons */}
										<div className='flex flex-wrap gap-4 pt-4'>
											{project.url && (
												<a
													href={project.url}
													target='_blank'
													rel='noopener noreferrer'
													className='flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl'
												>
													<FiExternalLink className='w-5 h-5' />
													View Live Project
												</a>
											)}
											{project.githublink && (
												<a
													href={project.githublink}
													target='_blank'
													rel='noopener noreferrer'
													className='flex items-center gap-2 px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:border-gray-900 dark:hover:border-white hover:text-gray-900 dark:hover:text-white transition-all duration-300'
												>
													<FiGithub className='w-5 h-5' />
													View Source Code
												</a>
											)}
										</div>
									</div>
								</div>
							</motion.div>
						</div>
					</div>
				</>
			)}
		</AnimatePresence>
	);
};

export default ProjectDetailModal;
