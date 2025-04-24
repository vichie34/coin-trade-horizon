
import { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowUpIcon, ArrowDownIcon, StarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export type AssetData = {
  id: string;
  name: string;
  symbol: string;
  price: number;
  change24h: number;
  volume24h: number;
  marketCap: number;
  iconUrl?: string;
};

// Mock data
const mockMarketData: AssetData[] = [
  { id: '1', name: 'Bitcoin', symbol: 'BTC', price: 48392.34, change24h: 2.34, volume24h: 32782345234, marketCap: 921834762345, iconUrl: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png' },
  { id: '2', name: 'Ethereum', symbol: 'ETH', price: 2843.12, change24h: -1.27, volume24h: 18263428976, marketCap: 341872634521, iconUrl: 'https://cryptologos.cc/logos/ethereum-eth-logo.png' },
  { id: '3', name: 'Binance Coin', symbol: 'BNB', price: 378.45, change24h: 0.89, volume24h: 2183427865, marketCap: 61827364521, iconUrl: 'https://cryptologos.cc/logos/bnb-bnb-logo.png' },
  { id: '4', name: 'XRP', symbol: 'XRP', price: 0.5438, change24h: -2.56, volume24h: 1982763452, marketCap: 28376452187, iconUrl: 'https://cryptologos.cc/logos/xrp-xrp-logo.png' },
  { id: '5', name: 'Cardano', symbol: 'ADA', price: 1.23, change24h: 3.45, volume24h: 1238764532, marketCap: 41287634521, iconUrl: 'https://cryptologos.cc/logos/cardano-ada-logo.png' },
  { id: '6', name: 'Solana', symbol: 'SOL', price: 98.76, change24h: 5.67, volume24h: 3287652345, marketCap: 32876234521, iconUrl: 'https://cryptologos.cc/logos/solana-sol-logo.png' },
  { id: '7', name: 'Polkadot', symbol: 'DOT', price: 21.34, change24h: -0.45, volume24h: 982736452, marketCap: 21983726345, iconUrl: 'https://cryptologos.cc/logos/polkadot-new-dot-logo.png' },
  { id: '8', name: 'Dogecoin', symbol: 'DOGE', price: 0.1234, change24h: 1.23, volume24h: 1238764532, marketCap: 16789234567, iconUrl: 'https://cryptologos.cc/logos/dogecoin-doge-logo.png' },
  { id: '9', name: 'Avalanche', symbol: 'AVAX', price: 67.89, change24h: -3.21, volume24h: 876543219, marketCap: 18765432198, iconUrl: 'https://cryptologos.cc/logos/avalanche-avax-logo.png' },
  { id: '10', name: 'Chainlink', symbol: 'LINK', price: 14.56, change24h: 2.78, volume24h: 765432198, marketCap: 7654321987, iconUrl: 'https://cryptologos.cc/logos/chainlink-link-logo.png' }
];

// Also mock gold and other assets
const mockCommodityData: AssetData[] = [
  { id: 'g1', name: 'Gold', symbol: 'XAU', price: 1876.54, change24h: 0.43, volume24h: 8765432198, marketCap: 12876543219, iconUrl: 'https://cdn-icons-png.flaticon.com/512/2534/2534501.png' },
  { id: 'g2', name: 'Silver', symbol: 'XAG', price: 23.45, change24h: -0.28, volume24h: 2345678901, marketCap: 3456789012, iconUrl: 'https://cdn-icons-png.flaticon.com/512/2534/2534759.png' },
  { id: 'g3', name: 'Platinum', symbol: 'XPT', price: 967.23, change24h: 0.87, volume24h: 1234567890, marketCap: 2345678901, iconUrl: 'https://cdn-icons-png.flaticon.com/512/5280/5280856.png' },
  { id: 'o1', name: 'Crude Oil', symbol: 'OIL', price: 78.34, change24h: -1.56, volume24h: 9876543210, marketCap: 10987654321, iconUrl: 'https://cdn-icons-png.flaticon.com/512/2933/2933952.png' },
  { id: 'o2', name: 'Natural Gas', symbol: 'GAS', price: 2.78, change24h: 2.34, volume24h: 7654321098, marketCap: 8765432109, iconUrl: 'https://cdn-icons-png.flaticon.com/512/7869/7869340.png' }
];

type MarketTableProps = {
  type?: 'crypto' | 'commodity' | 'all';
};

const MarketTable = ({ type = 'crypto' }: MarketTableProps) => {
  const [favorites, setFavorites] = useState<string[]>([]);
  
  const toggleFavorite = (id: string) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(favId => favId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };
  
  let displayData: AssetData[] = [];
  
  switch (type) {
    case 'crypto':
      displayData = mockMarketData;
      break;
    case 'commodity':
      displayData = mockCommodityData;
      break;
    case 'all':
      displayData = [...mockMarketData, ...mockCommodityData];
      break;
    default:
      displayData = mockMarketData;
  }
  
  return (
    <div className="w-full">
      <div className="rounded-md border border-crypto-bg-light">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead className="w-[30px]"></TableHead>
              <TableHead className="w-[270px]">Asset</TableHead>
              <TableHead className="text-right">Price</TableHead>
              <TableHead className="text-right">24h Change</TableHead>
              <TableHead className="text-right">24h Volume</TableHead>
              <TableHead className="text-right">Market Cap</TableHead>
              <TableHead className="text-right w-[100px]">Trade</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {displayData.map((asset) => (
              <TableRow key={asset.id} className="hover:bg-crypto-bg-light">
                <TableCell className="p-2">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-8 w-8"
                    onClick={() => toggleFavorite(asset.id)}
                  >
                    <StarIcon 
                      className={`h-4 w-4 ${favorites.includes(asset.id) ? 'text-crypto-yellow fill-crypto-yellow' : 'text-muted-foreground'}`}
                    />
                  </Button>
                </TableCell>
                <TableCell className="font-medium">
                  <div className="flex items-center">
                    <div className="w-8 h-8 mr-3 rounded-full bg-crypto-bg-dark flex items-center justify-center overflow-hidden">
                      {asset.iconUrl ? (
                        <img src={asset.iconUrl} alt={asset.name} className="h-5 w-5" />
                      ) : (
                        <span className="text-xs font-bold">{asset.symbol.slice(0, 2)}</span>
                      )}
                    </div>
                    <div>
                      <div className="font-medium">{asset.name}</div>
                      <div className="text-xs text-muted-foreground">{asset.symbol}</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-right font-medium">
                  ${asset.price < 1 ? asset.price.toFixed(4) : asset.price.toLocaleString()}
                </TableCell>
                <TableCell className={`text-right ${asset.change24h >= 0 ? 'text-crypto-green' : 'text-crypto-red'}`}>
                  <div className="flex items-center justify-end">
                    {asset.change24h >= 0 ? (
                      <ArrowUpIcon className="h-3 w-3 mr-1" />
                    ) : (
                      <ArrowDownIcon className="h-3 w-3 mr-1" />
                    )}
                    <span>{Math.abs(asset.change24h).toFixed(2)}%</span>
                  </div>
                </TableCell>
                <TableCell className="text-right text-muted-foreground">
                  ${(asset.volume24h / 1_000_000).toFixed(2)}M
                </TableCell>
                <TableCell className="text-right text-muted-foreground">
                  ${(asset.marketCap / 1_000_000_000).toFixed(2)}B
                </TableCell>
                <TableCell className="text-right">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="bg-crypto-bg-dark hover:bg-crypto-blue hover:text-white transition-colors"
                  >
                    Trade
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default MarketTable;
