<div>
  <Button
    onClick={e => update(toggle('modal'))}
    children='Toggle Modal'
  />
  {modal && (
    <div>
      <Fixed
        top={0}
        right={0}
        bottom={0}
        left={0}
        onClick={e => update(toggle('modal'))}
      />
      <Modal width={256}>
        <Heading>Hello</Heading>
      </Modal>
    </div>
  )}
</div>
