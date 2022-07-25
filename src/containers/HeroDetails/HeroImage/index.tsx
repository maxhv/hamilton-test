import {Props, Thumbnail} from './interface';

export const HeroImage = ({thumbnail}:Props) => {
  const {path, extension}: Thumbnail = thumbnail;

  return (
    <div className="hero-image">
      <picture>
        <img src={`${path}.${extension}`} alt="hero image"/>
      </picture>
    </div>
  )
}
