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
      z={1}
      right
      bottom>
      Hello
    </Fixed>
  )}
</div>
