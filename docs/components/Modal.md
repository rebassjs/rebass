# Modal

```.jsx
<div>
  {false && (
    <div>
      <Fixed
        top={0}
        right={0}
        bottom={0}
        left={0}
      />
      <Modal width={256}>
        <Heading>Hello</Heading>
      </Modal>
    </div>
  )}
</div>
```

prop | default | theme key | style type
---|---|---|---
borderRadius | 2 | radii | responsive
width |  | N/A | responsive
maxWidth | 100vw | maxWidths | responsive
maxHeight | 100vh | maxHeights | responsive