
import { ArrowUpIcon, ArrowDownIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export type CryptoCardProps = {
  name: string;
  symbol: string;
  price: number;
  change: number;
  iconUrl?: string;
};

const CryptoCard = ({ name, symbol, price, change, iconUrl }: CryptoCardProps) => {
  const isPositive = change >= 0;
  
  return (
    <Card className="bg-crypto-bg-card border-crypto-bg-light hover:border-crypto-blue transition-colors overflow-hidden">
      <CardContent className="p-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-crypto-bg-light rounded-full flex items-center justify-center">
              {iconUrl ? (
                <img src={iconUrl} alt={symbol} className="h-6 w-6" />
              ) : (
                <div className="font-bold text-sm">{symbol.slice(0, 2)}</div>
              )}
            </div>
            <div>
              <h4 className="font-medium">{name}</h4>
              <span className="text-sm text-muted-foreground">{symbol}</span>
            </div>
          </div>
          <div className="text-right">
            <p className="font-medium">${price.toLocaleString()}</p>
            <div className={`flex items-center justify-end text-sm ${isPositive ? 'text-crypto-green' : 'text-crypto-red'}`}>
              {isPositive ? (
                <ArrowUpIcon className="h-3 w-3 mr-1" />
              ) : (
                <ArrowDownIcon className="h-3 w-3 mr-1" />
              )}
              <span>{Math.abs(change).toFixed(2)}%</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CryptoCard;
