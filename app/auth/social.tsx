"use client";

import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { useSearchParams } from "next/navigation";

export default function Social() {
	const searchParams = useSearchParams();
	const callback = searchParams.get("callbackUrl");
	
	const clickHandler = (provider: "google" | "github") => {
		signIn(provider, {
			callbackUrl: callback || DEFAULT_LOGIN_REDIRECT,
		});
	};

	return (
		<div className="flex items-center w-full gap-x-2">
			<Button
				size={"lg"}
				variant={"outline"}
				className="w-full"
				onClick={() => clickHandler("github")}>
				<FaGithub />
			</Button>
			<Button
				size={"lg"}
				variant={"outline"}
				className="w-full"
				onClick={() => clickHandler("google")}>
				<FcGoogle />
			</Button>
		</div>
	);
}
