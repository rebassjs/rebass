<div>
  <Button
    onClick={e => update(toggle('drawer'))}
    children='Toggle Drawer'
  />
  {drawer && (
    <Fixed
      top
      right
      bottom
      left
      onClick={e => update(toggle('drawer'))}
    />
  )}
  <Drawer
    open={drawer}
    position='right'
    p={3}
    color='white'
    bg='gray9'>
    <Heading>Hello</Heading>
  </Drawer>
</div>
