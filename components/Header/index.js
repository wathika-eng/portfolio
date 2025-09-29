import { Popover } from '@headlessui/react';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Button from '../Button';
// Local Data
import data from '../../data/portfolio.json';

const Header = ({ handleWorkScroll, handleAboutScroll, isBlog }) => {
	const router = useRouter();
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	const { name, showBlog, showResume } = data;

	useEffect(() => {
		setMounted(true);
	}, []);

	return (
		<>
			<Popover className='block tablet:hidden mt-5'>
				{({ open }) => (
					<>
						<div className='flex items-center justify-between p-2 laptop:p-0'>
							<h1
								onClick={() => router.push('/')}
								className='font-medium p-2 laptop:p-0 link'>
								{name}.
							</h1>

							<div className='flex items-center'>
								{data.darkMode && (
									<Button
										onClick={() =>
											setTheme(theme === 'dark' ? 'light' : 'dark')
										}>
										<Image
											className='h-6 w-6'
											src={`/images/${
												theme === 'dark' ? 'moon.svg' : 'sun.svg'
											}`}
											alt='Toggle theme'
											width={24}
											height={24}
										/>
									</Button>
								)}

								<Popover.Button>
									<Image
										className='h-5 w-5'
										src={`/images/${
											!open
												? theme === 'dark'
													? 'menu-white.svg'
													: 'menu.svg'
												: theme === 'light'
												? 'cancel.svg'
												: 'cancel-white.svg'
										}`}
										alt='Menu toggle'
										width={20}
										height={20}
									/>
								</Popover.Button>
							</div>
						</div>
						<Popover.Panel
							className={`absolute right-0 z-10 w-11/12 p-4 ${
								theme === 'dark' ? 'bg-slate-800' : 'bg-white'
							} shadow-md rounded-md`}>
							{!isBlog ? (
								<div className='grid grid-cols-1'>
									<Button onClick={handleWorkScroll}>Work</Button>
									<Button onClick={handleAboutScroll}>About</Button>
									{showBlog && (
										<Button onClick={() => router.push('/blog')}>Blog</Button>
									)}
									{showResume && (
										<Button
											onClick={() =>
												window.open('mailto:joseph_wathika@yahoo.com')
											}>
											Resume
										</Button>
									)}

									<Button
										onClick={() =>
											window.open('mailto:joseph_wathika@yahoo.com')
										}>
										Contact
									</Button>
								</div>
							) : (
								<div className='grid grid-cols-1'>
									<Button onClick={() => router.push('/')} classes='first:ml-1'>
										Home
									</Button>
									{showBlog && (
										<Button onClick={() => router.push('/blog')}>Blog</Button>
									)}
									{showResume && (
										<Button
											onClick={() => router.push('/resume')}
											classes='first:ml-1'>
											Resume
										</Button>
									)}

									<Button
										onClick={() =>
											window.open('mailto:joseph_wathika@yahoo.com')
										}>
										Contact
									</Button>
								</div>
							)}
						</Popover.Panel>
					</>
				)}
			</Popover>
			<div
				className={`mt-10 hidden flex-row items-center justify-between sticky backdrop-blur-lg ${
					theme === 'light' && 'bg-white/90'
				} dark:bg-gray-900/90 dark:text-white top-0 z-50 tablet:flex py-4 px-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700`}>
				<h1
					onClick={() => router.push('/')}
					className='font-bold text-2xl cursor-pointer text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-300'>
					{name}
				</h1>
				{!isBlog ? (
					<div className='flex items-center space-x-2'>
						<Button 
							onClick={handleWorkScroll}
							className='px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all duration-300 font-medium'>
							Work
						</Button>
						<Button 
							onClick={handleAboutScroll}
							className='px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all duration-300 font-medium'>
							About
						</Button>
						{showBlog && (
							<Button 
								onClick={() => router.push('/blog')}
								className='px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all duration-300 font-medium'>
								Blog
							</Button>
						)}
						{showResume && (
							<Button
								onClick={() => router.push('/resume')}
								className='px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all duration-300 font-medium'>
								Resume
							</Button>
						)}

						<Button
							onClick={() => window.open('mailto:joseph_wathika@yahoo.com')}
							className='px-6 py-2 bg-gray-900 dark:bg-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 text-white font-medium rounded-lg transition-all duration-300 shadow-md'>
							Contact
						</Button>
						{mounted && theme && data.darkMode && (
							<Button
								onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
								className='p-2 ml-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-300'>
								<Image
									className='h-6 w-6'
									src={`/images/${
										theme === 'dark' ? 'moon.svg' : 'sun.svg'
									}`}
									alt='Toggle theme'
									width={24}
									height={24}
								/>
							</Button>
						)}
					</div>
				) : (
					<div className='flex'>
						<Button onClick={() => router.push('/')}>Home</Button>
						{showBlog && (
							<Button onClick={() => router.push('/blog')}>Blog</Button>
						)}
						{showResume && (
							<Button
								onClick={() => router.push('/resume')}
								classes='first:ml-1'>
								Resume
							</Button>
						)}

						<Button
							onClick={() => window.open('mailto:joseph_wathika@yahoo.com')}>
							Contact
						</Button>

						{mounted && theme && data.darkMode && (
							<Button
								onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
								<Image
									className='h-6 w-6'
									src={`/images/${
										theme === 'dark' ? 'moon.svg' : 'sun.svg'
									}`}
									alt='Toggle theme'
									width={24}
									height={24}
								/>
							</Button>
						)}
					</div>
				)}
			</div>
		</>
	);
};

export default Header;
