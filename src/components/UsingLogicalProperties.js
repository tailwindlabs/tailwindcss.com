export function UsingLogicalProperties({ feature, syntax, children }) {
  return (
    <>
      <p>
        {feature} can be controlled with{' '}
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties">
          logical properties
        </a>{' '}
        in the inline dimension using the <code>{syntax}</code> utilities.
      </p>
      {children}
    </>
  )
}
