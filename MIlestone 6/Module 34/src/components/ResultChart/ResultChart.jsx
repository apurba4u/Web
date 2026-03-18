import { Line, LineChart, XAxis } from 'recharts';
const resultData = [
  { "id": 1, "name": "Opu", "physics": 78, "chemistry": 82, "math": 90 },
  { "id": 2, "name": "Piyash", "physics": 65, "chemistry": 70, "math": 68 },
  { "id": 3, "name": "Rahim", "physics": 88, "chemistry": 91, "math": 85 },
  { "id": 4, "name": "Karim", "physics": 72, "chemistry": 75, "math": 80 },
  { "id": 5, "name": "Hasan", "physics": 95, "chemistry": 89, "math": 93 },
  { "id": 6, "name": "Sakib", "physics": 60, "chemistry": 64, "math": 70 },
  { "id": 7, "name": "Nayeem", "physics": 84, "chemistry": 78, "math": 88 },
  { "id": 8, "name": "Arif", "physics": 90, "chemistry": 92, "math": 94 },
  { "id": 9, "name": "Tanvir", "physics": 55, "chemistry": 60, "math": 58 },
  { "id": 10, "name": "Jahid", "physics": 76, "chemistry": 81, "math": 79 }
]
const ResultChart = () => {
  return (
    <div>
      <LineChart width={800} height={500} data={resultData}>
        <XAxis dataKey={'name'}/>
        <Line dataKey={'chemistry'}/>
        <Line dataKey={'math'} stroke='red'/>
      </LineChart>
    </div>
  );
};

export default ResultChart;