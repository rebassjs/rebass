<div>
  <Button
    onClick={e => update(toggle('fixed'))}
    children='Toggle Fixed'
  />
  {fixed && (
    <Fixed
      m={2}
      p={3}
      bg='green3'
      zIndex={1}
      right={0}
      bottom={0}>
      Hello
    </Fixed>
  )}
</div>
