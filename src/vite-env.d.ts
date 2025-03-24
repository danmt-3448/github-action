/// <reference types="vite/client" />
/// <reference types="@types/react" />

declare namespace NodeJS {
  interface ProcessEnv {
    VITE_BASE_URL: string
  }
}

declare module '*.svg' {
  import React = require('react')

  export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>
  const src: string
  export default src
}
