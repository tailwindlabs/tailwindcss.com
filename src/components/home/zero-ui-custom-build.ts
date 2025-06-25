/**
 * Minimal single-use build of React Zero-UI.
 * This handles UI-only state using `data-*` attributes with zero React rerenders and scoped state.
 *
 * React Zero-UI automates both the variant generation and state pattern used here,
 * and supports global UI state as well.
 *
 * Full library documentation: https://github.com/react-zero-ui/core
 */
export function createZeroUI(key: string) {
  return {
    set(value: string, { scope }: { scope: HTMLElement }) {
      scope.dataset[key] = value;
    },
  };
}
