import './chars.css'
import { PieChart } from '@mui/x-charts/PieChart';

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
                outerRadius: 140,
                paddingAngle: 5,
                cornerRadius: 20,
                startAngle: -115,
                endAngle: 225,
                cx: 240,
                cy: 150,
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
        </main>
    )
}

export default Chars

