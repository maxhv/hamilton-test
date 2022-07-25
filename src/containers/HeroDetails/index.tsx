import isEmpty from 'lodash/isEmpty';
import {Props} from './interface';
import { Divider, Button } from 'antd';

import {HeroImage} from './HeroImage';
import {HeroAbout} from './HeroAbout';
import {HeroSeries} from './HeroSeries';

export const HeroDetails = ({ hero, onClose }: Props) => {
  if (isEmpty(hero)) return null;

  const {id, description, thumbnail, series} = hero;

  return (
    <div className="hero">
      <div className="hero-main">
        <HeroImage thumbnail={thumbnail}/>
        <HeroAbout description={description} />
      </div>
      <Divider />
      <HeroSeries id={id} series={series} />
      <Button onClick={onClose}>Close</Button>
    </div>
  )
}
