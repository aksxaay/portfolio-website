// data for the smooth sunburst chart
export default {
  name: "Operation Summary",
  children: [
    {
      name: "Running",
      children: [
        {
          name: "Alarm",
          children: [{ name: "Low", size: 89 }, { name: "Medium", size: 10 }]
        },
        { name: "Operational", size: 63 },
        { name: "Stand-by", size: 18 }
      ]
    },
    {
      name: "Stopped",
      children: [
        { name: "Fault", size: 10 },
        { name: "Maintenence", size: 2 },
        { name: "Alarm", children: [{ name: "Hight", size: 2 }] }
      ]
    }
  ]
};
