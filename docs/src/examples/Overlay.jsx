<div>
  <Button
    onClick={e => update(toggle('overlay'))}
    children='Toggle Overlay'
  />
  {overlay && (
    <div>
      <Fixed
        top
        right
        bottom
        left
        onClick={e => update(toggle('overlay'))}
      />
      <Overlay w={256}>
        <Heading>Hello</Heading>
      </Overlay>
    </div>
  )}
</div>
