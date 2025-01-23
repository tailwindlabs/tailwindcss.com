"use client";

import { oklch2hex } from "colorizr";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import {
	Button,
	Tooltip,
	TooltipPanel,
	TooltipTrigger,
} from "@headlessui/react";

export function Color({ name, shade }: { name: string; shade: string }) {
	const [justCopied, setJustCopied] = useState(false);

	const buttonRef = useRef<HTMLButtonElement>(null);

	const colorVariableName = `--color-${name}-${shade}`;

	const copyHexToClipboard = () => {
		if (!buttonRef.current) {
			return;
		}

		const styleValue = buttonRef.current
			.computedStyleMap()
			.get(colorVariableName);

		if (!styleValue) {
			return;
		}

		const oklchWithCSSFunctionalNotation = styleValue.toString();

		// oklch(0.808 0.114 19.571) to 0.808 0.114 19.571
		const oklch = oklchWithCSSFunctionalNotation.slice(6, -1);

		// 0.808 0.114 19.571 to [0.808, 0.114, 19.571]
		const oklchTuple = oklch.split(" ").map(Number) as [number, number, number];

		const hex = oklch2hex(oklchTuple);

		navigator.clipboard.writeText(hex);

		setJustCopied(true);
	};

	useEffect(() => {
		const timeout = setTimeout(() => {
			if (!justCopied) {
				return;
			}

			setJustCopied(false);
		}, 1300);

		return () => clearTimeout(timeout);
	}, [justCopied]);

	return (
		<Tooltip as="div" showDelayMs={100} hideDelayMs={0} className="relative">
			<TooltipTrigger>
				<Button
					ref={buttonRef}
					type="button"
					onClick={copyHexToClipboard}
					onTouchEnd={copyHexToClipboard}
					style={{ backgroundColor: `var(${colorVariableName})` }}
					className={clsx(
						"h-full w-full cursor-pointer aspect-1/1 rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 flex items-center justify-center",
					)}
				/>
			</TooltipTrigger>
			<TooltipPanel
				as="div"
				anchor="top"
				className="pointer-events-none z-10 translate-y-2 rounded-full border border-gray-950 bg-gray-950/90 py-0.5 pr-2 pb-1 pl-3 text-center font-mono text-xs/6 font-medium whitespace-nowrap text-white opacity-100 inset-ring inset-ring-white/10 transition-[opacity] starting:opacity-0"
			>
				{justCopied ? "Copied!" : "Click to copy"}
			</TooltipPanel>
		</Tooltip>
	);
	/*
		
		*/
}
