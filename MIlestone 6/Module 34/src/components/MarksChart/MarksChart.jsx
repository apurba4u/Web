import React, { use } from 'react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';

const MarksChart = ({marksPromise}) => {
  const marksDataRes = use(marksPromise)
  const marksData = marksDataRes.data
  const marksChartData = marksData.map(elem => {
    const student = {
      id: elem.id,
      name: elem.name,
      phy: elem.marks.physics,
      math: elem.marks.math,
      chem: elem.marks.chemistry
    }
    const avg = ((student.phy + student.math + student.chem) / 3)
    student.avg = avg
    return student
  })

  return (
    <div>
      <BarChart width={800} height={300} data={marksChartData}>
        <XAxis dataKey={'name'}/>
        <YAxis />
        <Bar dataKey={'avg'} fill='yellow'/>
        <Bar dataKey={'chem'} fill='red'/>
      </BarChart>
    </div>
  );
};

export default MarksChart;