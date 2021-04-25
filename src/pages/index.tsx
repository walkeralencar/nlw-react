// SPA - Single Page Application
// SSR - Server Side Rendering
// SSG - Static Site Generator

import { useEffect } from "react";

export default function Home() {
  useEffect (() => {
    fetch('http://local.test:3333/episodes')
      .then(response => response.json())
      .then(data => console.log(data))
    },[])
  return (
    <h1>index</h1>
  )
}