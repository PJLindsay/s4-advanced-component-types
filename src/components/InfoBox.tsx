import { ReactNode } from 'react'

type HintBoxProps = {
  mode: 'hint'
  children: ReactNode
}

type WarningBoxProps = {
  mode: 'warning'
  severity: 'low' | 'medium' | 'high'
  children: ReactNode
}

// use a discriminated union to make severity conditionally mandatory
// when mode is 'warning' we want severity to be required
type InfoBoxProps = HintBoxProps | WarningBoxProps

export default function InfoBox(props: InfoBoxProps) {
  const { children, mode } = props

  if (mode === 'hint') {
    return (
      <aside className="infobox infobox-hint">
        <p>{children}</p>
      </aside>
    )
  }

  // TS is smart enough to know that it is a warning (not a hint) so severity prop is possible/needed
  const { severity } = props

  return (
    <aside className={`infobox infobox-warning warning--${severity}`}>
      <h2>Warning</h2>
      <p>{children}</p>
    </aside>
  )
}
