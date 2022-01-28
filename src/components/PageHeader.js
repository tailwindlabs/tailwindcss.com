export function PageHeader({ title, description }) {
  if (!title && !description) return null

  return (
    <header
      id="header"
      className="prose md:prose-md xl:-mt-[3.75rem] mb-[1.875rem] xl:mb-[3.75rem]"
    >
      <h1>{title}</h1>
      <div className="mt-[1.875rem] md:mt-[3.75rem] -mb-5">
        {description && <p>{description}</p>}
      </div>
    </header>
  )
}
