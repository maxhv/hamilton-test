import {useEffect, useRef, useState} from "react";
import {SeriesList} from "../../../interfaces/character";
import {HeroSeriesItem} from './components/HeroSeriesItem';
import {SeriesItem, Series} from './interfaces';
import {fetchAllSeries} from './utils';

export const HeroSeries = ({id, series: {available, items}}: SeriesList | any) => {
  const [series, setSeries] = useState<Array<SeriesItem>>([]);
  const prevId = useRef();

  useEffect(() => {
    const getSeries = async (items: Array<Series>) => {
      prevId.current = id;

      const urlsMap: Array<string> = items.map(item => item.resourceURI);

      try {
        const responses = await fetchAllSeries(urlsMap);

        const allResponsesSeries = responses.map(response => {
          const { results = [] } = response?.data?.data;
          // @ts-ignore
          return results;
        })

        setSeries(allResponsesSeries.flat(1));
      } catch (error) {
        console.error(error)
      }
    }

    if (available && (!prevId.current || prevId.current !== id)) getSeries(items);
  }, [id]);

  return (
    <div className="hero-series">
      <h2>Series:</h2>
      {
        series.map(item => <HeroSeriesItem key={item.id} id={item.id} thumbnail={item.thumbnail} title={item.title} />)
      }
    </div>
  )
}
