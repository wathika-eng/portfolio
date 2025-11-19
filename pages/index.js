import { useRef } from 'react';
import Header from '../components/Header';
import ServiceCard from '../components/ServiceCard';
import Socials from '../components/Socials';
import WorkCard from '../components/WorkCard';
import { useIsomorphicLayoutEffect } from '../utils';
import { stagger } from '../animations';
import Footer from '../components/Footer';
import Head from 'next/head';
import Button from '../components/Button';
import Link from 'next/link';
import Cursor from '../components/Cursor';
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
} from 'react-icons/si';// Local Data
export default function Home({ data }) {
	// Ref
	const workRef = useRef();
	const aboutRef = useRef();
	const textOne = useRef();
	const textTwo = useRef();
	const textThree = useRef();
	const textFour = useRef();

	// Map technology names to their respective icons and colors
	const getTechIcon = (tech) => {
		const techMap = {
			'Django': { icon: SiDjango, color: 'text-green-600' },
			'JavaScript': { icon: SiJavascript, color: 'text-yellow-500' },
			'Python': { icon: SiPython, color: 'text-blue-500' },
			'React': { icon: SiReact, color: 'text-blue-400' },
			'React Native': { icon: SiReact, color: 'text-blue-400' },
			'ReactNative': { icon: SiReact, color: 'text-blue-400' },
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
			'Dart': { icon: SiDart, color: 'text-blue-500' },
			'Flutter': { icon: SiFlutter, color: 'text-blue-400' },
			'Postman': { icon: SiPostman, color: 'text-orange-500' },
		};
		
		return techMap[tech] || { icon: null, color: 'text-gray-600' };
	};

	// Handling Scroll
	const handleWorkScroll = () => {
		window.scrollTo({
			top: workRef.current.offsetTop,
			left: 0,
			behavior: 'smooth',
		});
	};

	const handleAboutScroll = () => {
		window.scrollTo({
			top: aboutRef.current.offsetTop,
			left: 0,
			behavior: 'smooth',
		});
	};

	useIsomorphicLayoutEffect(() => {
		stagger(
			[textOne.current, textTwo.current, textThree.current, textFour.current],
			{ y: 40, x: -10, transform: 'scale(0.95) skew(10deg)' },
			{ y: 0, x: 0, transform: 'scale(1)' }
		);
	}, []);

	return (
		<div className={`relative min-h-screen bg-white dark:bg-gray-900 ${data.showCursor && 'cursor-none'}`}>
			{data.showCursor && <Cursor />}
			<Head>
				<title>{data.name} - Backend Developer & API Specialist</title>
				<meta name="description" content="Joseph Wathika - Backend Developer specializing in API development, testing, and integration. Building scalable solutions with Go, Python, and modern technologies." />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta property="og:title" content={`${data.name} - Backend Developer & API Specialist`} />
				<meta property="og:description" content="Backend Developer specializing in API development, testing, and integration. Building scalable solutions with Go, Python, and modern technologies." />
				<meta property="og:type" content="website" />
				<link rel="canonical" href="https://yourdomain.com" />
			</Head>

			<div className='gradient-circle'></div>
			<div className='gradient-circle-bottom'></div>

			<div className='container mx-auto mb-10 px-4 laptop:px-8'>
				<Header
					handleWorkScroll={handleWorkScroll}
					handleAboutScroll={handleAboutScroll}
				/>
				
				{/* Hero Section */}
				<section className='min-h-[80vh] flex flex-col justify-center laptop:mt-20 mt-10'>
					<div className='max-w-6xl mx-auto'>
						<div className='space-y-2 laptop:space-y-4'>
							<h1
								ref={textOne}
								className='text-4xl tablet:text-6xl laptop:text-7xl laptopl:text-8xl font-bold leading-tight text-gray-900 dark:text-white'>
								{data.headerTaglineOne}
							</h1>
							<h1
								ref={textTwo}
								className='text-4xl tablet:text-6xl laptop:text-7xl laptopl:text-8xl font-bold leading-tight text-gray-900 dark:text-white'>
								{data.headerTaglineTwo}
							</h1>
							<h1
								ref={textThree}
								className='text-4xl tablet:text-6xl laptop:text-7xl laptopl:text-8xl font-bold leading-tight text-gray-900 dark:text-white'>
								{data.headerTaglineThree}
							</h1>
							<h1
								ref={textFour}
								className='text-4xl tablet:text-6xl laptop:text-7xl laptopl:text-8xl font-bold leading-tight text-gray-600 dark:text-gray-300'>
								{data.headerTaglineFour}
							</h1>
						</div>

						{/* Call to Action */}
						<div className='mt-12 laptop:mt-16 flex flex-col tablet:flex-row gap-6 items-start'>
							<div className='flex gap-4'>
								<Button 
									onClick={handleWorkScroll}
									type='primary'
									className='bg-gray-900 dark:bg-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl'>
									View My Work
								</Button>
								<Button 
									onClick={handleAboutScroll}
									className='border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-gray-900 dark:hover:border-white hover:text-gray-900 dark:hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300'>
									About Me
								</Button>
							</div>
							<Socials className='mt-4 tablet:mt-0' />
						</div>
					</div>
				</section>

				{/* Work Section */}
				<section className='py-20 laptop:py-32' ref={workRef}>
					<div className='max-w-7xl mx-auto'>
						<div className='text-center mb-16'>
							<h2 className='text-4xl laptop:text-5xl font-bold text-gray-900 dark:text-white mb-4'>
								Featured Work
							</h2>
							<p className='text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto'>
								Here are some of the projects I&apos;ve worked on recently. Each project showcases different aspects of my development skills.
							</p>
						</div>

						<div className='grid grid-cols-1 tablet:grid-cols-2 laptopl:grid-cols-3 gap-8'>
							{data.projects.map((project) => (
								<WorkCard
									key={project.id}
									img={project.imageSrc}
									name={project.title}
									description={project.description}
									technologies={project.technologies}
									githubUrl={project.githublink}
									liveUrl={project.url}
									images={project.images || [project.imageSrc]}
									project={project}
								/>
							))}
						</div>
					</div>
				</section>
				{/* Services Section */}
				<section className='py-20 laptop:py-32 bg-gray-50 dark:bg-gray-800'>
					<div className='max-w-7xl mx-auto'>
						<div className='text-center mb-16'>
							<h2 className='text-4xl laptop:text-5xl font-bold text-gray-900 dark:text-white mb-4'>
								What I Do
							</h2>
							<p className='text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto'>
								I offer a range of services to help businesses build robust, scalable solutions.
							</p>
						</div>
						
						<div className='grid grid-cols-1 tablet:grid-cols-2 laptopl:grid-cols-3 gap-8'>
							{data.services.map((service, index) => (
								<ServiceCard
									key={index}
									name={service.title}
									description={service.description}
								/>
							))}
						</div>
					</div>
				</section>
				{/* This button should not go into production */}
				{process.env.NODE_ENV === 'development' && (
					<div className='fixed bottom-5 right-5'>
						<Link href='/edit'>
							<Button type='primary'>Edit Data</Button>
						</Link>
					</div>
				)}
				{/* About Section */}
				<section className='py-20 laptop:py-32' ref={aboutRef}>
					<div className='max-w-7xl mx-auto'>
						<div className='grid grid-cols-1 laptop:grid-cols-2 gap-16 items-center'>
							<div>
								<h2 className='text-4xl laptop:text-5xl font-bold text-gray-900 dark:text-white mb-8'>
									About Me
								</h2>
								<p className='text-xl laptop:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8'>
									{data.aboutpara}
								</p>
								
								{/* Skills Preview */}
								<div className='space-y-6'>
									<div>
										<h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-4'>
											Technologies I Work With
										</h3>
										<div className='grid grid-cols-2 gap-4'>
											{/* Languages */}
											<div>
												<h4 className='text-sm font-medium text-gray-600 dark:text-gray-400 mb-3'>Languages</h4>
												<div className='flex flex-wrap gap-3'>
													{data.resume.languages.map((tech, index) => {
														const { icon: IconComponent, color } = getTechIcon(tech);
														return (
															<div
																key={index}
																className='flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200'
																title={tech}
															>
																{IconComponent && (
																	<IconComponent className={`w-5 h-5 ${color}`} />
																)}
																<span className='text-gray-800 dark:text-gray-200 text-sm font-medium'>
																	{tech}
																</span>
															</div>
														);
													})}
												</div>
											</div>
											
											{/* Frameworks */}
											<div>
												<h4 className='text-sm font-medium text-gray-600 dark:text-gray-400 mb-3'>Frameworks & Tools</h4>
												<div className='flex flex-wrap gap-3'>
													{data.resume.frameworks.concat(data.resume.others || []).map((tech, index) => {
														const { icon: IconComponent, color } = getTechIcon(tech);
														return (
															<div
																key={index}
																className='flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200'
																title={tech}
															>
																{IconComponent && (
																	<IconComponent className={`w-5 h-5 ${color}`} />
																)}
																<span className='text-gray-800 dark:text-gray-200 text-sm font-medium'>
																	{tech}
																</span>
															</div>
														);
													})}
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							
							{/* Stats or Additional Info */}
							<div className='space-y-8'>
								<div className='grid grid-cols-2 gap-6'>
									<div className='text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg'>
										<div className='text-3xl font-bold text-gray-900 dark:text-white mb-2'>{data.projects.length}+</div>
										<div className='text-gray-600 dark:text-gray-300'>Projects Completed</div>
									</div>
									<div className='text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg'>
										<div className='text-3xl font-bold text-gray-900 dark:text-white mb-2'>{data.services.length}+</div>
										<div className='text-gray-600 dark:text-gray-300'>Services Offered</div>
									</div>
								</div>
								
								<div className='p-8 bg-gray-50 dark:bg-gray-800 rounded-lg'>
									<h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-4'>
										Currently Available
									</h3>
									<p className='text-gray-600 dark:text-gray-300 mb-6'>
										I&apos;m open to new opportunities and exciting projects. Let&apos;s build something amazing together!
									</p>
									<Button 
										onClick={() => window.open('mailto:joseph_wathika@yahoo.com')}
										className='bg-gray-900 dark:bg-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300'>
										Get In Touch
									</Button>
								</div>
							</div>
						</div>
					</div>
				</section>
				<Footer />
			</div>
		</div>
	);
}

export async function getStaticProps() {
	// Read local portfolio data at build time. Use revalidate to enable ISR.
	const data = await import('../data/portfolio.json').then((m) => m.default || m);

	return {
		props: { data },
		// Rebuild the page in the background at most once every 60 seconds
		revalidate: 60,
	};
}
