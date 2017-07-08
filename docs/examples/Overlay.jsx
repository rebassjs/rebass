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
      <Overlay>
        <Heading>Hello</Heading>
      </Overlay>
    </div>
  )}
</div>
