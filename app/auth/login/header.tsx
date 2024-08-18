import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Poppins({
	subsets: ["latin"],
	weight: ["600"],
});

export default function Header({ label }: { label: string }) {
	return (
		<div className="w-full flex flex-col gap-y-4 items-center">
			<h1 className={cn("text-3xl font-semibold", font.className)}>
				Auth
			</h1>
			<p className="text-sm text-muted-foreground">{label}</p>
		</div>
	);
}
