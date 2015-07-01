
import React from 'react'
import cx from 'classnames'

class PageHeader extends React.Component {

  render () {
    let description = this.props.description ? (<p className='m0'>{this.props.description}</p>) : false
    return (
      <header {...this.props}
        className={cx(
          'flex',
          'flex-wrap',
          (this.props.center ? 'flex-center' : 'flex-baseline'),
          'py3',
          'mb4',
          'border-bottom'
        )}>
        <div className='flex-auto'>
          <h1 className='m0'>
            {this.props.title}
          </h1>
          {description}
        </div>
        {this.props.children}
      </header>
    )
  }

}

export default PageHeader

