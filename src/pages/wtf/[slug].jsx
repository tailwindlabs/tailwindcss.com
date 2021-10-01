export default () => <></>

export async function getServerSideProps(context) {
  const { slug } = context?.params

  const redirects = {
    'ambiguous-values': 'https://github.com/tailwindlabs/tailwindcss/issues/0000',
  }

  return {
    redirect: {
      permanent: false,
      destination: redirects[slug] || '/',
    },
  }
}
