import type Paper from 'paper/dist/paper-core';
// import Rope from './Rope';

declare const paper: typeof Paper;

// The number of points in the rope:
const points = 10;
// The distance between the points:
const length = 15;

// Integrates the points forward in time based off their current and previous positions
function verletIntegrate(
  currentSegment: paper.Segment,
  previousSegment: paper.Segment
) {
  const tempCurPtx = currentSegment.point.x;
  const tempCurPty = currentSegment.point.y;
  currentSegment.point.x += currentSegment.point.x - previousSegment.point.x;
  currentSegment.point.y += currentSegment.point.y - previousSegment.point.y;
  previousSegment.point.x = tempCurPtx;
  previousSegment.point.y = tempCurPty;
}

// Projects 'currentPoint' to be within 'distance' of 'anchor'
function setDistance(
  currentPoint: paper.Point,
  anchor: paper.Point,
  distance: number
) {
  const toAnchor = currentPoint.subtract(anchor);
  toAnchor.length = distance;
  return toAnchor.add(anchor);
}

function onFrame(
  rope: paper.Path,
  ropeOld: paper.Path,
  ball: paper.Path.Circle
) {
  // Define helpers based on Paper
  const { Point } = paper;

  return () => {
    for (let i = 0; i < points - 1; i++) {
      // Verlet Integration
      verletIntegrate(rope.segments[i + 1], ropeOld.segments[i + 1]);

      // Add gravity
      rope.segments[i + 1].point = rope.segments[i + 1].point.add(
        new Point(0, 0.5)
      );
    }

    // Iterate 10 times to resolve the constraints
    for (let j = 0; j < 10; j++) {
      for (let i = 0; i < points - 1; i++) {
        const nextSegment = rope.segments[i + 1];

        // Pull the segments toward eachother
        const segment = rope.segments[i];
        const toNext = segment.point.subtract(nextSegment.point);
        if (toNext.length > length) {
          toNext.length = length;
          const offset = segment.point
            .subtract(nextSegment.point)
            .subtract(toNext);
          nextSegment.point = nextSegment.point.add(offset.divide(2));
          segment.point = segment.point.subtract(offset.divide(2));
        }

        // Set the first link's position to be at the top
        if (i == 0) rope.segments[0].point = new Point(paper.view.center.x, 0);

        // Long-Distance Length Constraint (reduces iterations)
        if (
          nextSegment.point.subtract(new Point(paper.view.center.x, 0)).length >
          (i + 1) * length
        ) {
          nextSegment.point = setDistance(
            nextSegment.point,
            new Point(paper.view.center.x, 0),
            (i + 1) * length
          );
        }
      }
    }

    // Also draw a little ball at the end of the rope :)
    ball.position = rope.segments[points - 1].point;

    // Give the rope its buttery smoothness
    rope.smooth({ type: 'continuous' });

    // Define helpers based on Paper
    const { Tool, Path, Color } = paper;

    const tool = new Tool();

    tool.fixedDistance = 20;

    tool.onMouseDrag = function (event: paper.ToolEvent) {
      ball.remove();
      rope.add(event.point);
    };

    tool.onMouseDown = function () {
      rope.fullySelected = true;
    };

    tool.onMouseUp = function (event: paper.ToolEvent) {
      const ball = new Path.Circle(event.point, 5);
      ball.strokeWidth = 10;
      ball.strokeColor = new Color(0, 0, 0);

      rope.fullySelected = false;
    };
  };
}

export function drawRopeOnCanvas(canvas: HTMLCanvasElement): void {
  // Setup Paper for concrete canvas
  paper.setup(canvas);

  // Define helpers based on Paper
  const { Color, Path, Point } = paper;

  // The rope (and its previous positions)
  const rope = new Path({
    strokeColor: 'red',
    strokeWidth: 5,
    strokeCap: 'round',
  });
  const ropeOld = new Path();

  const start = paper.view.center.divide([5, 0.5]);

  for (let i = 0; i < points; i++) {
    rope.add(start.add(new Point(i * length, 0)));
    ropeOld.add(start.add(new Point(i * length, 0)));
  }

  // The Black Ball (at the end of The Red Rope)
  const ball = new Path.Circle(paper.view.center, 5);
  ball.strokeWidth = 10;
  ball.strokeColor = new Color(0, 0, 0);

  paper.view.onFrame = onFrame(rope, ropeOld, ball);
}
