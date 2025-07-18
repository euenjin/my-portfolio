import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: '[Eunjin Ahn] - Data Science & Computer Science student @NYU',
	description:
		'Welcome to my portfolio! I am a passionate student who is passionate about data science and computer science. Specializing in deriving actionable insights from data and turning them into real-world solutions,
	keywords: [
		'Data Science',
		'Computer Science',
		'Problem Solving',
		'Project Management',
		'React',
		'Node.js',
		'Python',
		'Java',
		'Research',
		'[Eunjin Ahn]',
	],
	authors: [{ name: '[Eunjin Ahn]' }],
	creator: '[Eunjin Ahn]',
	openGraph: {
		title: '[Eunjin Ahn] - Full-Stack Developer Portfolio',
		description:
			'Passionate full-stack developer creating complete web solutions. Explore my projects and technical expertise across the entire development stack.',
		url: 'https://your-domain.com',
		siteName: '[Your Name] - Portfolio',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: '[Your Name] - Full-Stack Developer Portfolio',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: '[Your Name] - Full-Stack Developer',
		description:
			'Passionate full-stack developer creating complete web solutions. Explore my projects and technical expertise across the entire development stack.',
		creator: '@yourusername',
		images: ['/og-image.jpg'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
