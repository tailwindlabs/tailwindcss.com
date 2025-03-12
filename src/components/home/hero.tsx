"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import GridContainer from "../grid-container";
import { SearchButton } from "../search";
import cover from "./cover.png";
import { Editor } from "./editor";
import LinkButton from "./link-button";

const SYMBOL = { color: "var(--color-slate-400)" };
const ELEMENT = { color: "var(--color-pink-400)" };
const KEYWORD = { color: "var(--color-slate-300)" };
const STRING = { color: "var(--color-sky-300)" };

const Hero: React.FC = () => {
  let [step, setStep] = useState(0);
  let [isTyping, setIsTyping] = useState(false);

  // Very small screens should never try to drag the editor into a wider view.
  let showResponsiveDemo = "window" in globalThis ? window.matchMedia("(min-width: 40rem)").matches : false;

  // We can not rely on starting animations when elements go into view on these
  // screens since the code might overflow and not be visible.
  let shouldAutostartTypingAnimations =
    "window" in globalThis ? window.matchMedia("(min-width: 48rem)").matches : false;

  function nextStep() {
    setStep((step) => step + 1);
    setIsTyping(false);
    setTimeout(() => setIsTyping(true), TRANSITION.duration * 1000);
  }

  useEffect(() => {
    function start() {
      setIsTyping(true);
    }
    let timeout = setTimeout(start, 1000);
    return () => clearTimeout(timeout);
  }, []);

  // Widen or shrink screen
  useEffect(() => {
    if ((step !== 7 && step !== 11 && step !== 12) || !showResponsiveDemo) return;
    let timeout = setTimeout(() => setStep(step + 1), step === 11 ? 1200 : 800);
    return () => clearTimeout(timeout);
  });

  return (
    <div>
      <div
        aria-hidden="true"
        className="flex h-16 items-end px-2 font-mono text-xs/6 whitespace-pre text-black/20 max-sm:px-4 sm:h-24 dark:text-white/25"
      >
        <span className="hidden max-sm:inline">text-4xl </span>
        <span className="hidden sm:max-md:inline">text-5xl </span>
        <span className="hidden lg:max-xl:inline">text-6xl </span>
        <span className="hidden xl:inline">text-8xl </span>
        <span className="inline dark:hidden">text-gray-950 </span>
        <span className="hidden dark:inline">text-white </span>tracking-tighter{" "}
        <span className="max-sm:hidden">text-balance</span>
      </div>
      <GridContainer>
        <h1 className="px-2 text-4xl tracking-tighter text-balance max-lg:font-medium max-sm:px-4 sm:text-5xl lg:text-6xl xl:text-8xl">
          Rapidly build modern websites without ever leaving your HTML.
        </h1>
      </GridContainer>
      <div
        aria-hidden="true"
        className="flex h-6 items-end px-2 font-mono text-xs/6 whitespace-pre text-black/20 max-sm:px-4 sm:h-10 dark:text-white/25"
      >
        text-lg <span className="inline dark:hidden">text-gray-950</span>
        <span className="hidden dark:inline">text-white</span> font-medium
      </div>
      <GridContainer>
        <p className="max-w-(--breakpoint-md) px-2 text-lg/7 font-medium text-gray-600 max-sm:px-4 dark:text-gray-400">
          A utility-first CSS framework packed with classes like{" "}
          <span className="font-mono text-[1.0625rem] text-sky-500 dark:text-sky-400">flex</span>,{" "}
          <span className="font-mono text-[1.0625rem] text-sky-500 dark:text-sky-400">pt-4</span>,{" "}
          <span className="font-mono text-[1.0625rem] text-sky-500 dark:text-sky-400">text-center</span> and{" "}
          <span className="font-mono text-[1.0625rem] text-sky-500 dark:text-sky-400">rotate-90</span> that can be
          composed to build any design, directly in your markup.
        </p>
      </GridContainer>
      <GridContainer className="mt-10 px-4 sm:hidden">
        <LinkButton href="docs/installation" className="z-1 w-full text-center">
          Get started
        </LinkButton>
      </GridContainer>
      <GridContainer className="mt-4 sm:mt-10 sm:px-2">
        <div className="flex gap-4 max-sm:px-4">
          <LinkButton href="docs/installation" className="z-1 max-sm:hidden">
            Get started
          </LinkButton>
          <SearchButton className="grid w-full grid-cols-[auto_1fr_auto] items-center gap-1 rounded-full px-4 py-2 text-left text-sm/6 text-gray-950/50 inset-ring inset-ring-gray-950/8 sm:w-80 dark:bg-white/5 dark:text-white/50 dark:inset-ring-white/15">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              className="-ml-0.5 size-4 fill-gray-600 dark:fill-gray-500"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
            Quick search
            <kbd className="hidden font-sans text-xs/4 text-gray-500 dark:text-gray-400 [.os-macos_&]:block">
              <span className="opacity-60">⌘</span>K
            </kbd>
            <kbd className="hidden font-sans text-xs/4 text-gray-500 not-[.os-macos_&]:block dark:text-gray-400">
              <span className="opacity-60">Ctrl</span>&nbsp;K
            </kbd>
          </SearchButton>
        </div>
      </GridContainer>
      <GridContainer className="mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <div className="bg-gray-950/5 p-2 lg:col-span-2 lg:-mx-px dark:bg-white/10">
            <Editor>
              <div
                className={clsx(
                  "*:flex *:*:max-w-none *:*:shrink-0 *:*:grow *:overflow-auto *:rounded-lg *:bg-white/10! *:p-5 dark:*:bg-white/5!",
                  "**:[.line]:isolate **:[.line]:block **:[.line]:not-last:min-h-[1lh]",
                  "*:inset-ring *:inset-ring-white/10 dark:*:inset-ring-white/5",
                )}
              >
                <pre tabIndex={0}>
                  <code>
                    <code>
                      <span className="line">
                        <span style={SYMBOL}>&lt;</span>
                        <span style={ELEMENT}>div</span>
                        <span style={SYMBOL}> </span>
                        <span style={KEYWORD}>class</span>
                        <span style={SYMBOL}>=</span>
                        <span style={STRING}>
                          "flex flex-col items-center
                          <TypeWord
                            isTyping={isTyping}
                            word=" gap-6"
                            step={6}
                            currentStep={step}
                            onNextStep={nextStep}
                            autostart={shouldAutostartTypingAnimations}
                          />
                          <TypeWord
                            isTyping={isTyping}
                            word=" p-7"
                            step={0}
                            currentStep={step}
                            onNextStep={nextStep}
                            autostart={shouldAutostartTypingAnimations}
                          />
                          <TypeWord
                            isTyping={isTyping}
                            word=" md:flex-row"
                            step={8}
                            currentStep={step}
                            onNextStep={nextStep}
                            autostart={shouldAutostartTypingAnimations}
                          />
                          <TypeWord
                            isTyping={isTyping}
                            word=" md:gap-8"
                            step={10}
                            currentStep={step}
                            onNextStep={nextStep}
                            autostart={shouldAutostartTypingAnimations}
                          />{" "}
                          rounded-2xl"
                        </span>
                        <span style={SYMBOL}>&gt;</span>
                      </span>
                      <span className="line">
                        <span>{"  "}</span>
                        <span style={SYMBOL}>&lt;</span>
                        <span style={ELEMENT}>div</span>
                        <span style={SYMBOL}>&gt;</span>
                      </span>
                      <span className="line">
                        <span>{"    "}</span>
                        <span style={SYMBOL}>&lt;</span>
                        <span style={ELEMENT}>img</span>
                        <span style={SYMBOL}> </span>
                        <span style={KEYWORD}>class</span>
                        <span style={SYMBOL}>=</span>
                        <span style={STRING}>
                          "size-48 shadow-xl
                          <TypeWord
                            isTyping={isTyping}
                            word=" rounded-md"
                            step={1}
                            currentStep={step}
                            onNextStep={nextStep}
                            autostart={shouldAutostartTypingAnimations}
                          />
                          "
                        </span>
                        <span style={SYMBOL}> </span>
                        <span style={KEYWORD}>alt</span>
                        <span style={SYMBOL}>=</span>
                        <span style={STRING}>""</span>
                        <span style={SYMBOL}> </span>
                        <span style={KEYWORD}>src</span>
                        <span style={SYMBOL}>=</span>
                        <span style={STRING}>"/img/cover.png"</span>
                        <span style={SYMBOL}> /&gt;</span>
                      </span>
                      <span className="line">
                        <span>{"  "}</span>
                        <span style={SYMBOL}>&lt;/</span>
                        <span style={ELEMENT}>div</span>
                        <span style={SYMBOL}>&gt;</span>
                      </span>
                      <span className="line">
                        <span>{"  "}</span>
                        <span style={SYMBOL}>&lt;</span>
                        <span style={ELEMENT}>div</span>
                        <span style={SYMBOL}> </span>
                        <span style={KEYWORD}>class</span>
                        <span style={SYMBOL}>=</span>
                        <span style={STRING}>
                          "flex
                          <TypeWord
                            isTyping={isTyping}
                            word=" items-center"
                            step={5}
                            currentStep={step}
                            onNextStep={nextStep}
                            autostart={shouldAutostartTypingAnimations}
                          />
                          <TypeWord
                            isTyping={isTyping}
                            word=" md:items-start"
                            step={9}
                            currentStep={step}
                            onNextStep={nextStep}
                            autostart={shouldAutostartTypingAnimations}
                          />
                          "
                        </span>
                        <span style={SYMBOL}>&gt;</span>
                      </span>
                      <span className="line">
                        <span>{"    "}</span>
                        <span style={SYMBOL}>&lt;</span>
                        <span style={ELEMENT}>span</span>
                        <TypeWord
                          isTyping={isTyping}
                          word={` class="text-2xl font-medium"`}
                          step={2}
                          currentStep={step}
                          onNextStep={nextStep}
                          autostart={shouldAutostartTypingAnimations}
                        />
                        <span style={SYMBOL}>&gt;</span>
                        <span style={{ color: "var(--color-slate-50)" }}>Class Warfare</span>
                        <span style={SYMBOL}>&lt;/</span>
                        <span style={ELEMENT}>span</span>
                        <span style={SYMBOL}>&gt;</span>
                      </span>
                      <span className="line">
                        <span>{"    "}</span>
                        <span style={SYMBOL}>&lt;</span>
                        <span style={ELEMENT}>span</span>
                        <TypeWord
                          isTyping={isTyping}
                          word={` class="font-medium text-sky-500"`}
                          step={3}
                          currentStep={step}
                          onNextStep={nextStep}
                          autostart={shouldAutostartTypingAnimations}
                        />
                        <span style={SYMBOL}>&gt;</span>
                        <span style={{ color: "var(--color-slate-50)" }}>The Anti-Patterns</span>
                        <span style={SYMBOL}>&lt;/</span>
                        <span style={ELEMENT}>span</span>
                        <span style={SYMBOL}>&gt;</span>
                      </span>
                      <span className="line">
                        <span>{"    "}</span>
                        <span style={SYMBOL}>&lt;</span>
                        <span style={ELEMENT}>span</span>
                        <span style={SYMBOL}> </span>
                        <span style={KEYWORD}>class</span>
                        <span style={SYMBOL}>=</span>
                        <span style={STRING}>
                          "flex
                          <TypeWord
                            isTyping={isTyping}
                            word=" gap-2 font-medium text-gray-600 dark:text-gray-400"
                            step={4}
                            currentStep={step}
                            onNextStep={nextStep}
                            autostart={shouldAutostartTypingAnimations}
                          />
                          "
                        </span>
                        <span style={SYMBOL}>&gt;</span>
                      </span>
                      <span className="line">
                        <span>{"      "}</span>
                        <span style={SYMBOL}>&lt;</span>
                        <span style={ELEMENT}>span</span>
                        <span style={SYMBOL}>&gt;</span>
                        <span style={{ color: "var(--color-slate-50)" }}>No. 4</span>
                        <span style={SYMBOL}>&lt;/</span>
                        <span style={ELEMENT}>span</span>
                        <span style={SYMBOL}>&gt;</span>
                      </span>
                      <span className="line">
                        <span>{"      "}</span>
                        <span style={SYMBOL}>&lt;</span>
                        <span style={ELEMENT}>span</span>
                        <span style={SYMBOL}>&gt;</span>
                        <span style={{ color: "var(--color-slate-50)" }}>·</span>
                        <span style={SYMBOL}>&lt;/</span>
                        <span style={ELEMENT}>span</span>
                        <span style={SYMBOL}>&gt;</span>
                      </span>
                      <span className="line">
                        <span>{"      "}</span>
                        <span style={SYMBOL}>&lt;</span>
                        <span style={ELEMENT}>span</span>
                        <span style={SYMBOL}>&gt;</span>
                        <span style={{ color: "var(--color-slate-50)" }}>2025</span>
                        <span style={SYMBOL}>&lt;/</span>
                        <span style={ELEMENT}>span</span>
                        <span style={SYMBOL}>&gt;</span>
                      </span>
                      <span className="line">
                        <span>{"    "}</span>
                        <span style={SYMBOL}>&lt;/</span>
                        <span style={ELEMENT}>span</span>
                        <span style={SYMBOL}>&gt;</span>
                      </span>
                      <span className="line">
                        <span>{"  "}</span>
                        <span style={SYMBOL}>&lt;/</span>
                        <span style={ELEMENT}>div</span>
                        <span style={SYMBOL}>&gt;</span>
                      </span>
                      <span className="line">
                        <span style={SYMBOL}>&lt;/</span>
                        <span style={ELEMENT}>div</span>
                        <span style={SYMBOL}>&gt;</span>
                      </span>
                    </code>
                  </code>
                </pre>
              </div>
            </Editor>
          </div>
          <div className="relative border-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-black)]/5 max-lg:h-66 max-lg:border-t lg:border-l dark:[--pattern-fg:var(--color-white)]/10">
            <div className="absolute right-1/2 max-lg:bottom-8 max-md:translate-x-1/2 md:right-16 lg:top-1/2 lg:-translate-y-1/2 2xl:right-1/2 2xl:translate-x-[calc(50%-3rem)]">
              <Example step={step} />
            </div>
          </div>
        </div>
      </GridContainer>
    </div>
  );
};

export default Hero;

const TRANSITION = { duration: 0.35 };

function Example({ step }: { step: number }) {
  return (
    <motion.div
      layout={true}
      transition={TRANSITION}
      className={clsx(
        "@container rounded-3xl bg-black/5 p-2 outline outline-white/15 backdrop-blur-md dark:bg-white/10",
        step > 7 && step !== 11 ? "w-[584px]" : "w-[262px] xl:ml-[3rem]",
      )}
    >
      <motion.div
        className={clsx(
          "relative flex w-full flex-col rounded-2xl bg-white outline outline-black/5 dark:bg-gray-950",
          step > 0 ? "p-7" : null,
          step > 6 ? "gap-6" : null,
          step > 5 ? "items-center" : null,
          step > 8 ? "@xs:flex-row" : null,
          step > 10 ? "@xs:gap-8" : null,
        )}
        layout={true}
        transition={TRANSITION}
      >
        {step === 8 || step === 11 || step === 12 ? (
          <motion.div
            key={step}
            layout={true}
            className={clsx(
              "pointer-events-none absolute top-1/2 right-auto left-0 z-1 -mt-4 mr-0 -ml-4 rounded-full text-black",
            )}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ default: TRANSITION, opacity: { duration: 1, times: [0, 0.5, 1] } }}
          >
            <svg className="size-8" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="rgba(255, 255, 255, 0.5)"
                strokeWidth="8"
                fill="rgba(0, 0, 0, 0.5)"
              />
            </svg>
          </motion.div>
        ) : null}

        <motion.img
          alt=""
          layout="position"
          transition={TRANSITION}
          className={clsx(
            "size-48 shadow-xl transition-[border-radius] duration-350 dark:outline-1 dark:-outline-offset-1 dark:outline-white/10",
            step > 1 ? "rounded-md" : null,
          )}
          src={cover.src}
          width={192}
          height={192}
        />
        <motion.div
          className={clsx("flex flex-col", step > 5 ? "items-center" : null, step > 9 ? "@xs:items-start" : null)}
          layout={true}
          transition={TRANSITION}
        >
          <motion.span
            layout="position"
            transition={TRANSITION}
            className={clsx(
              "text-gray-950 transition-[font-size] duration-350 dark:text-white",
              step > 2 ? "text-2xl font-medium" : null,
            )}
          >
            Class Warfare
          </motion.span>
          <motion.span
            transition={TRANSITION}
            layout="position"
            className={clsx(
              "text-gray-950 transition-colors duration-350 dark:text-white",
              step > 3 ? "font-medium text-sky-500!" : null,
            )}
          >
            The Anti-Patterns
          </motion.span>
          <motion.span
            layout="position"
            transition={TRANSITION}
            className={clsx(
              "flex text-gray-950 transition-colors duration-350 dark:text-white",
              step > 4 ? "gap-2 font-medium text-gray-600! dark:text-gray-400!" : null,
            )}
          >
            <motion.span layout="position" transition={TRANSITION}>
              No. 4
            </motion.span>
            <motion.span layout="position" transition={TRANSITION}>
              &middot;
            </motion.span>
            <motion.span layout="position" transition={TRANSITION}>
              2025
            </motion.span>
          </motion.span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

function TypeWord({
  word,
  step,
  currentStep,
  isTyping,
  onNextStep,
  autostart,
}: {
  word: string;
  step: number;
  currentStep: number;
  isTyping: boolean;
  onNextStep: () => void;
  autostart: boolean;
}) {
  let startsWithClassEquals = word.startsWith(" class=");

  if (currentStep < step) return null;

  let cursor =
    (step === currentStep && isTyping) || (step + 1 === currentStep && !isTyping) ? (
      <span className="after:animate-typing after:absolute after:mt-1.5 after:inline-block after:h-[1.2em] after:w-px after:border-r-2 after:border-sky-400 after:bg-transparent after:content-['']" />
    ) : null;

  if (!isTyping && currentStep === step) return cursor;

  return (
    <>
      <motion.span
        initial="hidden"
        variants={{ visible: { transition: { staggerChildren: 0.075, delayChildren: 1.4 } } }}
        onAnimationComplete={onNextStep}
        {...(autostart ? { whileInView: "visible", viewport: { once: true } } : { animate: "visible" })}
      >
        {word.split("").map((letter, i) => (
          <motion.span
            key={i}
            variants={{
              hidden: { display: "none" },
              visible: { display: "inline" },
            }}
            style={{
              color: startsWithClassEquals ? (i < 6 ? KEYWORD.color : i < 7 ? SYMBOL.color : STRING.color) : undefined,
            }}
          >
            {letter}
          </motion.span>
        ))}
      </motion.span>
      {cursor}
    </>
  );
}
