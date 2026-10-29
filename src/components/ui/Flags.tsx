import type { ComponentPropsWithoutRef } from 'react'

export type FlagProps = ComponentPropsWithoutRef<'svg'>

export function USAFlag(props: FlagProps) {
  return (
    <svg viewBox="0 0 741 390" {...props}>
      <path fill="#b22234" d="M0 0h741v390H0z" />
      <path
        stroke="#fff"
        strokeWidth="30"
        d="M0 45h741M0 105h741M0 165h741M0 225h741M0 285h741M0 345h741"
      />
      <path fill="#3c3b6e" d="M0 0h296.4v210H0z" />
      <g fill="#fff">
        <g id="s18">
          <g id="s9">
            <g id="s5">
              <g id="s">
                <path
                  id="star"
                  d="m16.3 22.8 5.7 17.5 14.8-10.7h18.4l14.8 10.7 5.7-17.5-14.8-10.7 5.7-17.5-14.8 10.7H22l-14.8-10.7 5.7 17.5L-1.9 30.1z"
                  transform="scale(.0616)"
                />
                <use href="#star" x="49.4" />
                <use href="#star" x="98.8" />
                <use href="#star" x="148.2" />
                <use href="#star" x="197.6" />
                <use href="#star" x="247" />
              </g>
              <use href="#s" x="24.7" y="21" />
            </g>
            <use href="#s5" y="42" />
          </g>
          <use href="#s9" y="84" />
        </g>
        <use href="#s18" y="126" />
      </g>
    </svg>
  )
}

export function UKFlag(props: FlagProps) {
  return (
    <svg viewBox="0 0 60 30" {...props}>
      <clipPath id="s">
        <path d="M0 0v30h60V0z" />
      </clipPath>
      <path fill="#012169" d="M0 0v30h60V0z" />
      <path
        stroke="#fff"
        strokeWidth="6"
        d="m0 0 60 30M60 0 0 30"
        clipPath="url(#s)"
      />
      <path
        stroke="#C8102E"
        strokeWidth="4"
        d="m0 0 60 30M60 0 0 30"
        clipPath="url(#s)"
      />
      <path stroke="#fff" strokeWidth="10" d="M30 0v30M0 15h60" />
      <path stroke="#C8102E" strokeWidth="6" d="M30 0v30M0 15h60" />
    </svg>
  )
}

export function UAEFlag(props: FlagProps) {
  return (
    <svg viewBox="0 0 600 300" {...props}>
      <path fill="#00732f" d="M0 0h600v100H0z" />
      <path fill="#fff" d="M0 100h600v100H0z" />
      <path fill="#000" d="M0 200h600v100H0z" />
      <path fill="red" d="M0 0h150v300H0z" />
    </svg>
  )
}

export function IndiaFlag(props: FlagProps) {
  return (
    <svg viewBox="0 0 900 600" {...props}>
      <path fill="#f93" d="M0 0h900v200H0z" />
      <path fill="#fff" d="M0 200h900v200H0z" />
      <path fill="#128807" d="M0 400h900v200H0z" />
      <g transform="translate(450 300)">
        <circle r="92.5" fill="none" stroke="#000080" strokeWidth="6.5" />
        <circle r="15" fill="#000080" />
        <g id="d">
          <g id="c">
            <g id="b">
              <g id="a">
                <path
                  fill="#000080"
                  d="M0-92.5 7-20 0-12.5-7-20z"
                  transform="rotate(7.5)"
                />
                <path fill="#000080" d="M0-92.5 7-20 0-12.5-7-20z" />
              </g>
              <use href="#a" transform="rotate(15)" />
            </g>
            <use href="#b" transform="rotate(30)" />
          </g>
          <use href="#c" transform="rotate(60)" />
        </g>
        <use href="#d" transform="rotate(120)" />
        <use href="#d" transform="rotate(240)" />
      </g>
    </svg>
  )
}
