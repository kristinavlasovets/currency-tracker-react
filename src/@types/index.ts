export interface IChartItem {
  id: number;
  date: number;
  rate: number;
}

export interface ICurrencyItem {
  code: string;
  value: number;
}

export interface ICurrency {
  meta: {
    last_updated_at: string;
  };
  data: ICurrencyItem;
}

export interface IOption {
  label: string;
}

export interface IChartCurrency {
  price_close: number;
  price_high: number;
  price_low: number;
  price_open: number;
  time_close: string;
  time_open: string;
  time_period_end: string;
  time_period_start: string;
  trades_count: number;
  volume_traded: number;
}
