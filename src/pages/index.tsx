// SSR - Server Side Rendering

export default function Home(props) {

  return (
    <div>
    <h1>index</h1>
    <p>{JSON.stringify(props.episodes)}</p>
    </div>
  )
}

export async function getServerSideProps() {
  const response = await fetch('http://local.test:3333/episodes')
  const data = await response.json()

  return {
    props: {
      episodes: data,
    }
  }
}