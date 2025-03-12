import BaseContainer from "@/components/grid-container";

export function GridContainer({ children }: { children: React.ReactNode }) {
  return (
    <BaseContainer>
      <div className="px-0 py-2 sm:px-2">{children}</div>
    </BaseContainer>
  );
}
