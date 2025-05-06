import { SiGoland, SiLinux, SiGit, SiJava } from 'react-icons/si';

const ProIcons = () => {
	return (
		<div className='flex gap-6 mt-8 text-4xl text-gray-700 dark:text-white'>
			<SiGoland title='Golang' />
			<SiLinux title='Linux' />
			<SiGit title='Git' />
			<SiJava title='Java' />
		</div>
	);
};

export default ProIcons;
