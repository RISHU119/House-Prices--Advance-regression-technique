
import React from 'react';
import type { HouseData } from '../types';

interface DataTableProps {
  data: HouseData[];
}

const formatCurrency = (value: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(value);

function DataTable({ data }: DataTableProps): React.ReactNode {
  return (
    <div className="w-full overflow-hidden rounded-lg border border-slate-200">
      <div className="overflow-x-auto max-h-80">
        <table className="w-full text-sm text-left text-slate-500">
          <thead className="text-xs text-slate-700 uppercase bg-slate-100 sticky top-0">
            <tr>
              <th scope="col" className="px-6 py-3">SqFt</th>
              <th scope="col" className="px-6 py-3">Bedrooms</th>
              <th scope="col" className="px-6 py-3">Bathrooms</th>
              <th scope="col" className="px-6 py-3 text-right">Price</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {data.map((row) => (
              <tr key={row.id} className="border-b hover:bg-slate-50">
                <td className="px-6 py-4">{row.sqft.toLocaleString()}</td>
                <td className="px-6 py-4">{row.bedrooms}</td>
                <td className="px-6 py-4">{row.bathrooms}</td>
                <td className="px-6 py-4 font-medium text-slate-900 text-right">{formatCurrency(row.price)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DataTable;
