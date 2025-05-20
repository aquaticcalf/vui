import Image from "next/image"
import { Avatar, GithubAvatar, GitlabAvatar, BitbucketAvatar, AvatarGroup } from "@/components/ui/avatar"
import { Stack } from "@/components/ui/stack"
import Link from "next/link"

export default function Home() {
	return (
		<div className="min-h-screen bg-white dark:bg-black font-[family-name:var(--font-geist-sans)] text-zinc-900 dark:text-zinc-100 antialiased selection:bg-blue-100 dark:selection:bg-blue-900/40">
			<main className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 pt-16 pb-24">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-24">
					<div className="lg:col-span-5 flex flex-col justify-center">
						<h1 className="text-4xl sm:text-5xl font-semibold mb-6 tracking-tight text-black dark:text-white leading-tight">
							vui <span className="text-zinc-500 dark:text-zinc-400">components</span>
						</h1>
						<p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-md">
							A React UI library inspired by Vercel&apos;s Geist Design System with minimal, functional components.
						</p>
					</div>
					<div className="lg:col-span-7 border border-zinc-200 dark:border-zinc-800 rounded-lg p-8 bg-zinc-50/50 dark:bg-zinc-900/50 backdrop-blur-sm">
						<div className="flex flex-wrap gap-4 items-center justify-center h-full">
							<Avatar username="vercel" size={50} />
							<GithubAvatar username="github" size={50} />
							<GitlabAvatar username="gitlab" size={50} />
							<BitbucketAvatar username="bitbucket" size={50} />
							<Avatar username="placeholder" size={50} placeholder />
						</div>
					</div>
				</div>

				<section>
					<h2 className="text-2xl font-medium mb-8 text-black dark:text-white">Core Components</h2>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
						<div className="group border border-zinc-200 dark:border-zinc-800 rounded-lg p-6 transition-all hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-sm bg-white dark:bg-black">
							<div className="mb-5 flex items-center gap-3">
								<span className="inline-flex items-center justify-center bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 size-10 rounded-full">
									<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
										<circle cx="12" cy="12" r="10" />
										<circle cx="12" cy="12" r="4" />
									</svg>
								</span>
								<h3 className="text-lg font-medium text-black dark:text-white">Avatar</h3>
							</div>
							<p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
								Display user avatars with support for multiple platforms and placeholder states
							</p>
							<div className="flex flex-wrap gap-4">
								<Stack className="items-center" gap={2}>
									<Avatar username="vercel" size={32} />
									<span className="text-xs text-center text-zinc-500 dark:text-zinc-400">
										Default
									</span>
								</Stack>
								<Stack className="items-center" gap={2}>
									<GithubAvatar username="github" size={32} />
									<span className="text-xs text-zinc-500 dark:text-zinc-400">GitHub</span>
								</Stack>
								<Stack className="items-center" gap={2}>
									<GitlabAvatar username="gitlab" size={32} />
									<span className="text-xs text-zinc-500 dark:text-zinc-400">GitLab</span>
								</Stack>
								<Stack className="items-center" gap={2}>
									<BitbucketAvatar username="bitbucket" size={32} />
									<span className="text-xs text-zinc-500 dark:text-zinc-400">Bitbucket</span>
								</Stack>
								<Stack className="items-center" gap={2}>
									<Avatar username="placeholder" size={32} placeholder />
									<span className="text-xs text-center text-zinc-500 dark:text-zinc-400">
										Placeholder
									</span>
								</Stack>
							</div>
						</div>

						<div className="group border border-zinc-200 dark:border-zinc-800 rounded-lg p-6 transition-all hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-sm bg-white dark:bg-black">
							<div className="mb-5 flex items-center gap-3">
								<span className="inline-flex items-center justify-center bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 size-10 rounded-full">
									<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
										<line x1="12" y1="5" x2="12" y2="19"></line>
										<line x1="5" y1="12" x2="19" y2="12"></line>
									</svg>
								</span>
								<h3 className="text-lg font-medium text-black dark:text-white">Stack</h3>
							</div>
							<p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
								Easily create vertical stacks with customizable spacing between elements
							</p>
							<Stack gap={3} className="border border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 p-4 rounded-md">
								<div className="bg-purple-50 dark:bg-purple-900/20 p-2 rounded text-sm text-center">Item 1</div>
								<div className="bg-purple-50 dark:bg-purple-900/20 p-2 rounded text-sm text-center">Item 2</div>
								<div className="bg-purple-50 dark:bg-purple-900/20 p-2 rounded text-sm text-center">Item 3</div>
							</Stack>
						</div>

						<div className="group border border-zinc-200 dark:border-zinc-800 rounded-lg p-6 transition-all hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-sm bg-white dark:bg-black">
							<div className="mb-5 flex items-center gap-3">
								<span className="inline-flex items-center justify-center bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 size-10 rounded-full">
									<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
										<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
										<line x1="3" y1="9" x2="21" y2="9"></line>
										<line x1="9" y1="21" x2="9" y2="9"></line>
									</svg>
								</span>
								<h3 className="text-lg font-medium text-black dark:text-white">Composition</h3>
							</div>
							<p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
								Combine components to create complex, reusable interface patterns
							</p>
							<Stack gap={3}>
								<div className="flex items-center gap-3 p-3 border border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 rounded-md">
									<GithubAvatar username="octocat" size={32} />
									<Stack gap={1}>
										<h4 className="font-medium text-sm text-black dark:text-white">Octocat</h4>
										<p className="text-xs text-zinc-500 dark:text-zinc-400">GitHub Mascot</p>
									</Stack>
								</div>
								<div className="flex items-center gap-3 p-3 border border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 rounded-md">
									<GithubAvatar username="nextjs" size={32} />
									<Stack gap={1}>
										<h4 className="font-medium text-sm text-black dark:text-white">Next.js</h4>
										<p className="text-xs text-zinc-500 dark:text-zinc-400">React Framework</p>
									</Stack>
								</div>
							</Stack>
						</div>
					</div>
				</section>

				<section className="mb-24">
					<h2 className="text-2xl font-medium mb-8 text-black dark:text-white">Advanced Components</h2>

					<div className="border border-zinc-200 dark:border-zinc-800 rounded-lg p-6 bg-white dark:bg-black">
						<div className="mb-5 flex items-center gap-3">
							<span className="inline-flex items-center justify-center bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 size-10 rounded-full">
								<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
									<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
									<circle cx="9" cy="7" r="4"></circle>
									<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
									<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
								</svg>
							</span>
							<h3 className="text-lg font-medium text-black dark:text-white">Avatar Group</h3>
						</div>
						<p className="text-sm text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed max-w-2xl">
							Display multiple avatars as a group with optional limit and overflow indicator. Perfect for showing team members or project collaborators.
						</p>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-10">
							<div>
								<h4 className="text-sm font-medium mb-4 text-black dark:text-white">Basic Avatar Group</h4>
								<div className="border border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 p-6 rounded-md">
									<AvatarGroup
										members={[
											{ username: "vercel", type: "vercel" },
											{ username: "github", type: "github" },
											{ username: "gitlab", type: "gitlab" },
											{ username: "bitbucket", type: "bitbucket" },
											{ username: "nextjs" }
										]}
										size={32}
									/>
								</div>
							</div>
							<div>
								<h4 className="text-sm font-medium mb-4 text-black dark:text-white">Limited Avatar Group</h4>
								<div className="border border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 p-6 rounded-md">
									<AvatarGroup
										members={[
											{ username: "vercel", type: "vercel" },
											{ username: "github", type: "github" },
											{ username: "gitlab", type: "gitlab" },
											{ username: "bitbucket", type: "bitbucket" },
											{ username: "nextjs" },
											{ username: "react" }
										]}
										size={32}
										limit={3}
									/>
								</div>
							</div>
						</div>

						<div>
							<h4 className="text-sm font-medium mb-4 text-black dark:text-white">Real-world Example</h4>
							<div className="border border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 p-6 rounded-md">
								<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
									<div>
										<h5 className="font-medium text-sm mb-1 text-black dark:text-white">Project Collaborators</h5>
										<p className="text-xs text-zinc-500 dark:text-zinc-400">People with access to this project</p>
									</div>
									<div className="flex items-center gap-2">
										<AvatarGroup
											members={[
												{ username: "vercel", type: "vercel" },
												{ username: "github", type: "github" },
												{ username: "gitlab", type: "gitlab" },
												{ username: "bitbucket", type: "bitbucket" }
											]}
											size={24}
										/>
										<button className="border border-zinc-200 dark:border-zinc-700 rounded-md px-2 py-1 text-xs font-medium bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:border-zinc-300 dark:hover:border-zinc-600 transition-colors">
											Manage
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="border border-blue-100 dark:border-blue-900/30 rounded-lg p-8 bg-blue-50/50 dark:bg-blue-900/10 mb-24">
					<div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
						<div>
							<h2 className="text-xl font-medium mb-2 text-black dark:text-white">Ready to start building?</h2>
							<p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-md">
								Explore our documentation for installation instructions and detailed component API references.
							</p>
						</div>
						<div className="flex gap-3">
							<Link href="https://github.com/aquaticcalf/vui" className="px-4 py-2 rounded-md text-sm font-medium border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors">
								View on GitHub
							</Link>
							<Link href="/docs" className="px-4 py-2 rounded-md text-sm font-medium bg-black dark:bg-white text-white dark:text-black border border-transparent hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors">
								Read Documentation
							</Link>
						</div>
					</div>
				</section>
			</main>

			<footer className="border-t border-zinc-100 dark:border-zinc-800 py-12">
				<div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
					<div className="flex flex-col sm:flex-row justify-between items-center">
						<div className="flex items-center gap-3 mb-6 sm:mb-0">
							<Image
								className="dark:invert"
								src="/vercel.svg"
								alt="Vercel logo"
								width={20}
								height={20}
							/>
							<span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
								vui
							</span>
						</div>
						<div className="flex gap-6">
							<Link href="https://github.com/aquaticcalf/vui" className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors">
								GitHub
							</Link>
							<Link href="/docs" className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors">
								Documentation
							</Link>
							<Link href="/examples" className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors">
								Examples
							</Link>
						</div>
					</div>
				</div>
			</footer>
		</div>
	)
}