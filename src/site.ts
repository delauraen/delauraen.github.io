/** Site-wide details. Edit here and every page picks up the change. */
export const site = {
	name: 'Laura Weerasinghe',
	handle: 'delauraen',
	role: 'Game Designer',
	tagline:
		'Staff Test Analyst at Blizzard Entertainment, designing and shipping game jam games on nights and weekends.',
	email: 'lrampey@gmail.com',
	itch: 'https://delauraen.itch.io',
	linkedin: 'https://www.linkedin.com/in/laura-weerasinghe/',
};

/**
 * Every jam entry, newest first. Entries with a `slug` have a case study page
 * in `src/content/work/`; the rest link out to itch.io.
 */
export const jamLog: {
	game: string;
	jam: string;
	theme?: string;
	when: string;
	url: string;
	slug?: string;
}[] = [
	{
		game: 'Race To Repair',
		jam: "GMTK Game Jam 2024",
		theme: 'Built to Scale',
		when: 'Aug 2024',
		url: 'https://delauraen.itch.io/race-to-repair',
		slug: 'race-to-repair',
	},
	{
		game: 'Leave This To Me',
		jam: 'Pirate Software Game Jam 15',
		theme: 'Shadow & Alchemy',
		when: 'Jul 2024',
		url: 'https://delauraen.itch.io/leave-this-to-me',
		slug: 'leave-this-to-me',
	},
	{
		game: 'wReck In Pieces',
		jam: 'gameplayFirst Jam 2024',
		theme: 'You Are the Enemy',
		when: 'Jun 2024',
		url: 'https://delauraen.itch.io/wreck-in-pieces',
		slug: 'wreck-in-pieces',
	},
	{
		game: 'Witches Brew',
		jam: 'Ludum Dare 55',
		theme: 'Summoning',
		when: 'Apr 2024',
		url: 'https://delauraen.itch.io/witches-brew',
		slug: 'witches-brew',
	},
	{
		game: 'Grocery Run',
		jam: 'Ludum Dare 54',
		theme: 'Limited Space',
		when: 'Oct 2023',
		url: 'https://delauraen.itch.io/grocery-run-a-ludum-dare-54-adventure',
	},
	{
		game: 'Submeowriners',
		jam: 'DeepSea Jam 2023',
		when: '2023',
		url: 'https://delauraen.itch.io/submeowriners',
	},
	{
		game: 'Baby Delivery Service',
		jam: 'Ludum Dare 53',
		theme: 'Delivery',
		when: 'Apr 2023',
		url: 'https://delauraen.itch.io/baby-delivery-service',
	},
];
