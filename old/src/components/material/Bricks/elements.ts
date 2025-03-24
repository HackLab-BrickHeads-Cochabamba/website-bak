import { Position, type Elements } from "@vue-flow/core";

export function defineNodes(
  spaceX: number = 220,
  spaceY: number = 110,
  nodeSize: number = 110
): Elements {
  const styles = {
    backgroundColor: "#1FD750",
    color: "white",
    borderRadius: "100%",
    width: `${nodeSize}px`,
    height: `${nodeSize}px`,
    "background-repeat": "no-repeat",
    "background-size": "60%",
    "background-position": "center",
    "box-shadow": "inset 0 0 15px 10px rgba(12,12,12, 0.25)",
  };

  function newDistance(gap: number) {
    let inital = 0;
    return function () {
      inital += gap;
      return inital;
    };
  }

  const distance = newDistance(spaceX);
  const initialElements: Elements = [
    {
      id: "education",
      // label: "Educación",
      type: "custom",
      position: { x: distance(), y: spaceY },
      sourcePosition: Position.Right,
      targetPosition: Position.Right,
      draggable: false,
      style: {
        "background-image": "url('/images/icons/education_white.png')",
      },
    },
    {
      id: "link-k-t",
      source: "education",
      target: "technology",
      animated: true,
    },
    {
      id: "technology",
      // label: "Tecnología",
      sourcePosition: Position.Right,
      targetPosition: Position.Left,
      position: { x: distance(), y: spaceY * 2 },
      draggable: false,
      style: {
        "background-image": "url('/images/icons/tech_white.png')",
      },
    },
    {
      id: "link-t-s",
      source: "technology",
      target: "science",
      animated: true,
    },
    {
      id: "science",
      // label: "Ciencia",
      sourcePosition: Position.Right,
      targetPosition: Position.Left,
      position: { x: distance(), y: spaceY },
      draggable: false,
      style: {
        "background-image": "url('/images/icons/science_white.png')",
      },
    },
    {
      id: "link-s-c",
      source: "science",
      target: "culture",
      animated: true,
    },
    {
      id: "culture",
      // label: "Cultura",
      sourcePosition: Position.Left,
      targetPosition: Position.Left,
      position: { x: distance(), y: spaceY * 2 },
      draggable: false,
      style: {
        "background-image": "url('/images/icons/society_white.png')",
      },
    },
  ];

  initialElements.map((i) => {
    i.style = { ...styles, ...i.style };
  });
  return initialElements;
}
