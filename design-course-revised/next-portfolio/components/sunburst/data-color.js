export default {
  name: "Operations summary",
  color: "#FFF",
  children: [
    {
      name: "Running",
      color: "#C2E358",
      children: [
        {
          name: "Alarm",
          color: "#9ED763",
          children: [
            {
              name: "Low",
              color: "#2C9E4B",
              size: 89
            },
            {
              name: "Medium",
              color: "#2C9E4B",
              size: 10
            }
          ]
        },
        {
          name: "Operational",
          color: "#9ED763",
          size: 63
        },
        {
          name: "Stand-by",
          color: "#9ED763",
          size: 18
        }
      ]
    },
    {
      name: "Stopped",
      color: "#F78608",
      children: [
        {
          name: "Fault",
          color: "#EE3711",
          size: 10
        },
        {
          name: "Maintenence",
          color: "#EE3711",
          size: 2
        },
        {
          name: "Alarm",
          color: "#EE3711",
          children: [
            {
              name: "Hight",
              color: "#E6172F",
              size: 2
            }
          ]
        }
      ]
    }
  ]
};