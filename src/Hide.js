import sys from 'system-components'
import tag from 'clean-tag'

export const breakpoints = bps => ({
  xs: `@media screen and (max-width: ${bps[0]})`,
  sm: `@media screen and (min-width: ${bps[0]}) and (max-width: ${bps[1]})`,
  md: `@media screen and (min-width: ${bps[1]}) and (max-width: ${bps[2]})`,
  lg: `@media screen and (min-width: ${bps[2]})`,
});

export const hidden = key => props =>
  (props[key]
    ? {
      [breakpoints(props.theme.breakpoints)[key]]: {
        display: 'none',
      },
    }
    : null)

export const xs = hidden('xs')
export const sm = hidden('sm')
export const md = hidden('md')
export const lg = hidden('lg')

export const Hide = sys({ is: tag, blacklist: ['xs', 'sm', 'md', 'lg'] }, xs, sm, md, lg)

export default Hide
