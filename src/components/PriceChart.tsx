
import { useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  TooltipProps
} from "recharts";
import { Skeleton } from "@/components/ui/skeleton";
import { 
  Select, 
  SelectTrigger, 
  SelectValue, 
  SelectContent, 
  SelectItem 
} from "@/components/ui/select";

// Mock data for demo purposes
const generateMockChartData = (days = 30, trend: 'up' | 'down' | 'volatile' = 'volatile') => {
  const data = [];
  let baseValue = 40000;
  
  for (let i = 0; i < days; i++) {
    let change;
    
    switch (trend) {
      case 'up':
        change = (Math.random() * 1000) - 200; // Mostly positive
        break;
      case 'down':
        change = (Math.random() * 1000) - 800; // Mostly negative
        break;
      default:
        change = (Math.random() * 1000) - 500; // Mixed
    }
    
    baseValue += change;
    if (baseValue < 30000) baseValue = 30000;
    if (baseValue > 60000) baseValue = 60000;
    
    data.push({
      date: new Date(Date.now() - (days - i) * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      price: Math.round(baseValue),
    });
  }
  
  return data;
};

const mockData = generateMockChartData(30);

// Custom tooltip
const CustomTooltip = ({ active, payload, label }: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-crypto-bg-dark p-3 border border-crypto-bg-light rounded-md shadow-md">
        <p className="text-sm text-white font-medium">{label}</p>
        <p className="text-sm text-crypto-blue">${payload[0].value?.toLocaleString()}</p>
      </div>
    );
  }
  return null;
};

type PriceChartProps = {
  assetName: string;
  loading?: boolean;
};

const PriceChart = ({ assetName, loading = false }: PriceChartProps) => {
  const chartRef = useRef<HTMLDivElement>(null);
  
  return (
    <Card className="bg-crypto-bg-card border-crypto-bg-light">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-medium">{assetName} Price</CardTitle>
        <Select defaultValue="30d">
          <SelectTrigger className="w-[80px] h-8 text-xs bg-crypto-bg-dark">
            <SelectValue placeholder="Period" />
          </SelectTrigger>
          <SelectContent className="bg-crypto-bg-dark border-crypto-bg-light">
            <SelectItem value="24h">24H</SelectItem>
            <SelectItem value="7d">7D</SelectItem>
            <SelectItem value="30d">30D</SelectItem>
            <SelectItem value="90d">90D</SelectItem>
            <SelectItem value="1y">1Y</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="w-full h-[300px] chart-skeleton flex items-center justify-center">
            <Skeleton className="h-[250px] w-full" />
          </div>
        ) : (
          <div ref={chartRef} className="w-full h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={mockData}
                margin={{
                  top: 5,
                  right: 10,
                  left: 10,
                  bottom: 5,
                }}
              >
                <defs>
                  <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3772FF" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3772FF" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid stroke="#2C2C35" strokeDasharray="3 3" vertical={false} />
                <XAxis 
                  dataKey="date" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#8E9196', fontSize: 12 }}
                  dy={10}
                />
                <YAxis 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#8E9196', fontSize: 12 }}
                  dx={-10}
                  tickFormatter={(value) => `$${value.toLocaleString()}`}
                />
                <Tooltip content={<CustomTooltip />} />
                <Line
                  type="monotone"
                  dataKey="price"
                  stroke="#3772FF"
                  strokeWidth={2}
                  dot={false}
                  activeDot={{ r: 6, fill: "#3772FF", stroke: "#0B0B0F", strokeWidth: 2 }}
                  fillOpacity={1}
                  fill="url(#colorPrice)"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default PriceChart;
