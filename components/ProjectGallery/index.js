import React, { useState, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const ProjectGallery = ({ images = [], projectTitle = 'Project' }) => {
	const [selectedImageIndex, setSelectedImageIndex] = useState(null);

	const openLightbox = (index) => {
		setSelectedImageIndex(index);
		document.body.style.overflow = 'hidden';
	};

	const closeLightbox = useCallback(() => {
		setSelectedImageIndex(null);
		document.body.style.overflow = 'unset';
	}, []);

	const goToPrevious = useCallback(() => {
		setSelectedImageIndex((prev) => 
			prev === 0 ? images.length - 1 : prev - 1
		);
	}, [images.length]);

	const goToNext = useCallback(() => {
		setSelectedImageIndex((prev) => 
			prev === images.length - 1 ? 0 : prev + 1
		);
	}, [images.length]);

	React.useEffect(() => {
		const handleKeyDown = (e) => {
			if (e.key === 'Escape') closeLightbox();
			if (e.key === 'ArrowLeft') goToPrevious();
			if (e.key === 'ArrowRight') goToNext();
		};

		if (selectedImageIndex !== null) {
			window.addEventListener('keydown', handleKeyDown);
			return () => window.removeEventListener('keydown', handleKeyDown);
		}
	}, [selectedImageIndex, closeLightbox, goToPrevious, goToNext]);

	if (!images || images.length === 0) return null;

	// Single image - show large preview
	if (images.length === 1) {
		return (
			<div className='w-full'>
				<div 
					className='relative w-full h-64 rounded-lg overflow-hidden cursor-pointer group'
					onClick={() => openLightbox(0)}
				>
					<Image
						src={images[0]}
						alt={`${projectTitle} - Image 1`}
						layout='fill'
						objectFit='cover'
						className='transition-transform duration-300 group-hover:scale-110'
						sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'
					/>
					<div className='absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300' />
				</div>
				<Lightbox
					images={images}
					selectedIndex={selectedImageIndex}
					onClose={closeLightbox}
					onPrevious={goToPrevious}
					onNext={goToNext}
					projectTitle={projectTitle}
				/>
			</div>
		);
	}

	// Multiple images - show grid
	return (
		<div className='w-full space-y-3'>
			<div className='grid grid-cols-2 gap-3'>
				{/* Main large image */}
				<div 
					className='col-span-2 relative h-64 rounded-lg overflow-hidden cursor-pointer group'
					onClick={() => openLightbox(0)}
				>
					<Image
						src={images[0]}
						alt={`${projectTitle} - Main image`}
						layout='fill'
						objectFit='cover'
						className='transition-transform duration-300 group-hover:scale-110'
						sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'
						priority
					/>
					<div className='absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300' />
				</div>

				{/* Thumbnail images */}
				{images.slice(1, 5).map((image, index) => (
					<div
						key={index}
						className='relative h-32 rounded-lg overflow-hidden cursor-pointer group'
						onClick={() => openLightbox(index + 1)}
					>
						<Image
							src={image}
							alt={`${projectTitle} - Image ${index + 2}`}
							layout='fill'
							objectFit='cover'
							className='transition-transform duration-300 group-hover:scale-110'
							sizes='(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 16vw'
						/>
						<div className='absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300' />
						
						{/* Show "+X more" overlay on last thumbnail if there are more images */}
						{index === 3 && images.length > 5 && (
							<div className='absolute inset-0 bg-black/60 flex items-center justify-center'>
								<span className='text-white text-xl font-bold'>
									+{images.length - 5} more
								</span>
							</div>
						)}
					</div>
				))}
			</div>

			<Lightbox
				images={images}
				selectedIndex={selectedImageIndex}
				onClose={closeLightbox}
				onPrevious={goToPrevious}
				onNext={goToNext}
				projectTitle={projectTitle}
			/>
		</div>
	);
};

// Lightbox Component
const Lightbox = ({ images, selectedIndex, onClose, onPrevious, onNext, projectTitle }) => {
	if (selectedIndex === null) return null;

	return (
		<AnimatePresence>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				className='fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center'
				onClick={onClose}
			>
				{/* Close Button */}
				<button
					onClick={onClose}
					className='absolute top-4 right-4 z-50 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors duration-200'
					aria-label='Close lightbox'
				>
					<FiX className='w-6 h-6 text-white' />
				</button>

				{/* Image Counter */}
				<div className='absolute top-4 left-4 z-50 px-4 py-2 bg-white/10 rounded-full text-white text-sm font-medium'>
					{selectedIndex + 1} / {images.length}
				</div>

				{/* Navigation Buttons */}
				{images.length > 1 && (
					<>
						<button
							onClick={(e) => {
								e.stopPropagation();
								onPrevious();
							}}
							className='absolute left-4 z-50 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors duration-200'
							aria-label='Previous image'
						>
							<FiChevronLeft className='w-6 h-6 text-white' />
						</button>
						<button
							onClick={(e) => {
								e.stopPropagation();
								onNext();
							}}
							className='absolute right-4 z-50 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors duration-200'
							aria-label='Next image'
						>
							<FiChevronRight className='w-6 h-6 text-white' />
						</button>
					</>
				)}

				{/* Image */}
				<motion.div
					key={selectedIndex}
					initial={{ scale: 0.9, opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					exit={{ scale: 0.9, opacity: 0 }}
					transition={{ duration: 0.2 }}
					className='relative max-w-7xl max-h-[85vh] w-full mx-4'
					onClick={(e) => e.stopPropagation()}
				>
					<div className='relative w-full h-[85vh]'>
						<Image
							src={images[selectedIndex]}
							alt={`${projectTitle} - Image ${selectedIndex + 1}`}
							layout='fill'
							objectFit='contain'
							quality={100}
							priority
							sizes='(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw'
						/>
					</div>
				</motion.div>

				{/* Thumbnail Strip */}
				{images.length > 1 && (
					<div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 z-50 flex gap-2 p-2 bg-white/10 rounded-lg backdrop-blur-sm max-w-[90vw] overflow-x-auto'>
						{images.map((image, index) => (
							<button
								key={index}
								onClick={(e) => {
									e.stopPropagation();
									onNext(index);
								}}
								className={`relative w-16 h-16 rounded-md overflow-hidden flex-shrink-0 transition-all duration-200 ${
									index === selectedIndex 
										? 'ring-2 ring-white scale-110' 
										: 'opacity-60 hover:opacity-100'
								}`}
							>
								<Image
									src={image}
									alt={`Thumbnail ${index + 1}`}
									layout='fill'
									objectFit='cover'
									sizes='64px'
								/>
							</button>
						))}
					</div>
				)}
			</motion.div>
		</AnimatePresence>
	);
};

export default ProjectGallery;
