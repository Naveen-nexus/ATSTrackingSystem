import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const COLORS = ['#3b82f6','#6366f1','#8b5cf6','#a855f7','#ec4899','#ef4444','#f59e0b'];

export const SkillBarChart = ({ data }) => (
  <ResponsiveContainer width="100%" height={220}>
    <BarChart data={data} layout="vertical" margin={{ top: 0, right: 30, left: 10, bottom: 0 }}>
      <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f0f0f0" />
      <XAxis type="number" tick={{ fontSize: 11, fill: '#9ca3af' }} axisLine={false} tickLine={false} />
      <YAxis dataKey="skill" type="category" tick={{ fontSize: 12, fill: '#6b7280' }} axisLine={false} tickLine={false} width={70} />
      <Tooltip formatter={(v) => [`${v} postings`, 'Demand']} contentStyle={{ fontSize: 12, borderRadius: 8 }} />
      <Bar dataKey="count" radius={[0, 4, 4, 0]}>
        {data.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
      </Bar>
    </BarChart>
  </ResponsiveContainer>
);
