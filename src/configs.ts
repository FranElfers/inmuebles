export type SideBarLinkType = {
	url: string;
	text: string;
}

export const clientSideBarLinks: SideBarLinkType[] = [
	{
		url: "/",
		text: "Home",
	},
	{
		url: "/places",
		text: "Places",
	},
	{
		url: "/admin",
		text: "Admin",
	},
]

export const adminSideBarLinks: SideBarLinkType[] = [
	{
		url: "/",
		text: "Home",
	},
	{
		url: "/admin",
		text: "Admin",
	},
	{
		url: "/admin/db",
		text: "Databases",
	},
]
