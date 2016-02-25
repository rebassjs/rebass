
import React from 'react'
import rcp from 'react-component-permutations'

const Example = ({ name, Component, raw, ...props }) => {
  const type = name === 'Input' ? ['text'] : [
    'default',
    'info',
  ]
  const permutations = rcp(raw, {
    label: [name],
    children: ['rcp-' + name]
  })

  return (
    <div className='Example'
      style={{
        padding: 16,
        border: '1px solid #eee',
        borderRadius: 2,
      }}>
      {!permutations &&
        <Component
          name={`hello_${name}`}
          label={name}
          value={0.25}
          children={name}
        />
      }
      {permutations &&
        <div className=''>
          {permutations.map((p, i) => (
            <Component {...p}
              style={{ margin: 8 }}
              key={i}
              name={name}
              children={name} />
          ))}
        </div>
      }
    </div>
  )
}

export default Example

