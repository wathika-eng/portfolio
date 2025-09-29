import React from 'react';
import Socials from '../Socials';
import Button from '../Button';

const Footer = ({}) => {
	return (
		<footer className='mt-20 laptop:mt-32'>
			{/* Contact Section */}
			<section className='bg-gray-50 dark:bg-gray-800 py-20 laptop:py-32 rounded-lg'>
				<div className='max-w-7xl mx-auto px-4 laptop:px-8 text-center'>
					<div className='space-y-8'>
						<div className='space-y-4'>
							<h2 className='text-4xl tablet:text-6xl laptop:text-7xl font-bold text-gray-900 dark:text-white'>
								Let&apos;s Work Together
							</h2>
							<p className='text-xl laptop:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto'>
								Ready to bring your ideas to life? Let&apos;s discuss your project and create something amazing together.
							</p>
						</div>
						
						<div className='flex flex-col tablet:flex-row gap-4 justify-center items-center'>
							<Button 
								type='primary'
								onClick={() => window.open('mailto:joseph_wathika@yahoo.com')}
								className='bg-gray-900 dark:bg-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl'>
								Get In Touch
							</Button>
							<Button 
								onClick={() => window.open('https://calendly.com/your-link')}
								className='border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-gray-900 dark:hover:border-white hover:text-gray-900 dark:hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300'>
								Schedule a Call
							</Button>
						</div>
						
						<div className='pt-8'>
							<Socials />
						</div>
					</div>
				</div>
			</section>
			
			{/* Footer Bottom */}
			<div className='py-8 border-t border-gray-200 dark:border-gray-800 mt-16'>
				<div className='max-w-7xl mx-auto px-4 laptop:px-8 flex flex-col tablet:flex-row justify-between items-center gap-4'>
					<p className='text-gray-600 dark:text-gray-400 text-sm'>
						© 2024 Joseph Wathika. All rights reserved.
					</p>
					<p className='text-gray-600 dark:text-gray-400 text-sm'>
						Built with Next.js & Tailwind CSS
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
