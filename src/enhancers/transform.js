import PropTypes from 'prop-types'
import cx from 'classnames'
import { insertSingleProperty } from '../css'

export const propTypes = {
  transform: PropTypes.string,
  transformOrigin: PropTypes.string
}

export const propNames = Object.keys(propTypes)

export const parseProps = ({ transform, transformOrigin }) => {
  return cx(
    transform !== undefined && insertSingleProperty('transform', transform),
    transformOrigin !== undefined &&
      insertSingleProperty('transform', transformOrigin)
  )
}
