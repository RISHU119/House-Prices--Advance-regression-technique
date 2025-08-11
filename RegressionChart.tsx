
import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import type { HouseData } from '../types';

interface RegressionChartProps {
  data: HouseData[];
}

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="p-2 bg-white border border-slate-300 rounded-md shadow-md">
        <p className="font-bold">{`Price: ${new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(data.price)}`}</p>
        <p className="text-sm">{`SqFt: ${data.sqft.toLocaleString()}`}</p>
      </div>
    );
  }
  return null;
};

function RegressionChart({ data }: RegressionChartProps): React.ReactNode {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <ScatterChart margin={{ top: 5, right: 20, left: 45, bottom: 20 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
        <XAxis 
          dataKey="sqft" 
          type="number" 
          name="Square Feet" 
          unit=" sqft" 
          domain={['dataMin - 100', 'dataMax + 100']}
          tick={{ fontSize: 12, fill: '#64748b' }}
          label={{ value: 'Square Footage', position: 'insideBottom', offset: -15, fill: '#475569' }}
        />
        <YAxis 
          dataKey="price" 
          type="number" 
          name="Price" 
          unit="$" 
          tickFormatter={(tick) => `${(tick / 1000)}k`}
          domain={['dataMin - 20000', 'dataMax + 20000']}
          tick={{ fontSize: 12, fill: '#64748b' }}
           label={{ value: 'Price', angle: -90, position: 'insideLeft', offset: -35, fill: '#475569' }}
        />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} content={<CustomTooltip />} />
        <Legend verticalAlign="top" height={36}/>
        <Scatter name="Houses" data={data} fill="#4f46e5" shape="circle" />
      </ScatterChart>
    </ResponsiveContainer>
  );
}

export default RegressionChart;
