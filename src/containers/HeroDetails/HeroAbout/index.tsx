import {Props} from './interface';

export const HeroAbout = ({description}:Props) => (
  <div className="hero-about">
    { description && <p className="hero-description">{description}</p> }
  </div>
)
