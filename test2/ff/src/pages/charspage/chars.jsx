import './chars.css'
import { PieChart } from '@mui/x-charts/PieChart';
import { LineChart } from '@mui/x-charts/LineChart';

const data1 = [
    { label: 'Electron', value: 30 },
    { label: 'Pop', value: 80 },
    { label: 'Rock', value: 50 },
    { label: 'Rap', value: 70 },
    { label: 'Shanson', value: 20 },
  ];


function Chars() {
    return (
        <main className='content'>
            
            <div className="chars-bar">
            <h2 className='chars-bar__title'>
                    Популярные жанры
                </h2>
            <PieChart
             series={[
                {
                data: data1,
                innerRadius: 38,
                outerRadius: 190,
                paddingAngle: 5,
                cornerRadius: 20,
                startAngle: -115,
                endAngle: 225,
                cx: 240,
                cy: 210,
                        },    
                    ]  
                } 
                width={500}
                height={500}
                slotProps={{
                    legend: { hidden: true },
                  }}
            />
            </div>
            <div className="charts-collect">
            <div className="charts-users">
                  <h2 className="chars-users__title">
                    Статистика пользовалетей
                  </h2>
                  <LineChart xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                    series={[
                        {
                            data: [2, 5.5, 2, 8.5, 1.5, 5],
                        },
                    ]} width={500} height={300}
                  />
            </div>
            <div className="charts-admins">
                  <h2 className="charts-admins__title">
                    Статистика админов
                  </h2>
                  <LineChart
                    xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                    series={[
                        {
                        data: [2, 5.5, 2, 8.5, 1.5, 5],
                        area: true,
                        },
                    ]}
                    width={500}
                    height={300}
                />
            </div>
            </div>
        </main>
    )
}

export default Chars

