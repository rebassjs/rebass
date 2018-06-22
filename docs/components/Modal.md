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

Extends: [Fixed](/components/Fixed) > [Position](/components/Position)

prop | default | theme key | style type
---|---|---|---
top | 50% | N/A | responsive
left | 50% | N/A | responsive
m |  | space | responsive
mt |  | space | responsive
mr |  | space | responsive
mb |  | space | responsive
ml |  | space | responsive
mx |  | space | responsive
my |  | space | responsive
p | 3 | space | responsive
pt |  | space | responsive
pr |  | space | responsive
pb |  | space | responsive
pl |  | space | responsive
px |  | space | responsive
py |  | space | responsive
color |  | colors | responsive
bg | white | colors | responsive
borderRadius | 2 | radii | default
maxWidth | 100vw | maxWidths | responsive
maxHeight | 100vh | maxHeights | responsive
width |  | N/A | responsive