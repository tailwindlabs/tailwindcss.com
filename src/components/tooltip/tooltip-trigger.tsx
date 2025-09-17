import React from "react";

type TooltipTriggerProps<T extends React.ElementType = "div"> = {
  as?: T;
  children?: React.ReactNode;
  content: string;
} & React.ComponentProps<T>;

/**
 * Wrapper component that adds tooltip functionality to any element
 * @example
 * <TooltipTrigger content="Delete item" as="button">
 *   <TrashIcon />
 * </TooltipTrigger>
 */

export const TooltipTrigger = <T extends React.ElementType = "div">({
  as: Component = "div" as T,
  children,
  content,
  ...props
}: TooltipTriggerProps<T>) => {
  return (
    <Component data-tooltip-trigger data-tooltip-content={content} {...props}>
      {children}
    </Component>
  );
};
