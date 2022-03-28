import React from "react";
import { ResponsiveSunburst } from "@nivo/sunburst";
const data = {
  name: "nivo",
  color: "hsl(57, 70%, 50%)",
  children: [
    {
      name: "viz",
      color: "hsl(294, 70%, 50%)",
      children: [
        {
          name: "stack",
          color: "hsl(241, 70%, 50%)",
          children: [
            {
              name: "cchart",
              color: "hsl(188, 70%, 50%)",
              loc: 61592
            },
            {
              name: "xAxis",
              color: "hsl(215, 70%, 50%)",
              loc: 137929
            },
            {
              name: "yAxis",
              color: "hsl(262, 70%, 50%)",
              loc: 120083
            },
            {
              name: "layers",
              color: "hsl(284, 70%, 50%)",
              loc: 197403
            }
          ]
        },
        {
          name: "ppie",
          color: "hsl(182, 70%, 50%)",
          children: [
            {
              name: "chart",
              color: "hsl(311, 70%, 50%)",
              children: [
                {
                  name: "pie",
                  color: "hsl(80, 70%, 50%)",
                  children: [
                    {
                      name: "outline",
                      color: "hsl(264, 70%, 50%)",
                      loc: 81213
                    },
                    {
                      name: "slices",
                      color: "hsl(0, 70%, 50%)",
                      loc: 186108
                    },
                    {
                      name: "bbox",
                      color: "hsl(335, 70%, 50%)",
                      loc: 172377
                    }
                  ]
                },
                {
                  name: "donut",
                  color: "hsl(66, 70%, 50%)",
                  loc: 50826
                },
                {
                  name: "gauge",
                  color: "hsl(140, 70%, 50%)",
                  loc: 77497
                }
              ]
            },
            {
              name: "legends",
              color: "hsl(347, 70%, 50%)",
              loc: 62688
            }
          ]
        }
      ]
    },
    {
      name: "colors",
      color: "hsl(241, 70%, 50%)",
      children: [
        {
          name: "rgb",
          color: "hsl(175, 70%, 50%)",
          loc: 135916
        },
        {
          name: "hsl",
          color: "hsl(221, 70%, 50%)",
          loc: 90136
        }
      ]
    },
    {
      name: "utils",
      color: "hsl(30, 70%, 50%)",
      children: [
        {
          name: "randomize",
          color: "hsl(349, 70%, 50%)",
          loc: 9192
        },
        {
          name: "resetClock",
          color: "hsl(341, 70%, 50%)",
          loc: 20094
        },
        {
          name: "noop",
          color: "hsl(158, 70%, 50%)",
          loc: 69685
        }
      ]
    },
    {
      name: "set",
      color: "hsl(265, 70%, 50%)",
      children: [
        {
          name: "clone",
          color: "hsl(260, 70%, 50%)",
          loc: 121544
        },
        {
          name: "intersect",
          color: "hsl(7, 70%, 50%)",
          loc: 150825
        },
        {
          name: "merge",
          color: "hsl(289, 70%, 50%)",
          loc: 28395
        }
      ]
    },
    {
      name: "text",
      color: "hsl(28, 70%, 50%)",
      children: [
        {
          name: "trim",
          color: "hsl(198, 70%, 50%)",
          loc: 109667
        },
        {
          name: "slugify",
          color: "hsl(166, 70%, 50%)",
          loc: 38993
        }
      ]
    },
    {
      name: "misc",
      color: "hsl(83, 70%, 50%)",
      children: [
        {
          name: "greetings",
          color: "hsl(339, 70%, 50%)",
          children: [
            {
              name: "hey",
              color: "hsl(13, 70%, 50%)",
              loc: 181091
            },
            {
              name: "HOWDY",
              color: "hsl(1, 70%, 50%)",
              loc: 38170
            },
            {
              name: "aloha",
              color: "hsl(170, 70%, 50%)",
              loc: 4275
            }
          ]
        },
        {
          name: "other",
          color: "hsl(233, 70%, 50%)",
          loc: 98839
        },
        {
          name: "path",
          color: "hsl(169, 70%, 50%)",
          children: [
            {
              name: "pathA",
              color: "hsl(281, 70%, 50%)",
              loc: 31814
            },
            {
              name: "pathB",
              color: "hsl(58, 70%, 50%)",
              children: [
                {
                  name: "pathB1",
                  color: "hsl(218, 70%, 50%)",
                  loc: 132941
                },
                {
                  name: "pathB2",
                  color: "hsl(337, 70%, 50%)",
                  loc: 122503
                },
                {
                  name: "pathB3",
                  color: "hsl(84, 70%, 50%)",
                  loc: 151799
                },
                {
                  name: "pathB4",
                  color: "hsl(256, 70%, 50%)",
                  loc: 1765
                }
              ]
            },
            {
              name: "pathC",
              color: "hsl(18, 70%, 50%)",
              children: [
                {
                  name: "pathC1",
                  color: "hsl(100, 70%, 50%)",
                  loc: 154402
                },
                {
                  name: "pathC2",
                  color: "hsl(111, 70%, 50%)",
                  loc: 7532
                },
                {
                  name: "pathC3",
                  color: "hsl(317, 70%, 50%)",
                  loc: 172141
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
const Nivo = ({ data }) => (
  <ResponsiveSunburst
    data={data}
    margin={{ top: 40, right: 20, bottom: 20, left: 20 }}
    id="name"
    value="loc"
    cornerRadius={2}
    borderWidth={1}
    borderColor="white"
    colors={{ scheme: "nivo" }}
    childColor={{ from: "color" }}
    animate={false}
    motionConfig="gentle"
    isInteractive={true}
  />
);
export default function App() {
  return (
    <div style={{ width: 400, height: 300 }}>
      <Nivo data={data} />
    </div>
  );
}