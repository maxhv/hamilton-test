interface SeriesItem {
  id: string,
  thumbnail: Thumbnail,
  title: string,
}

export interface Thumbnail {
  path: string,
  extension: string,
}

export const HeroSeriesItem = ({id, thumbnail, title}: SeriesItem) => {
  const {path, extension}: Thumbnail = thumbnail;

  return (
    <div className="hero-series-item">
      <div className="hero-series-item-image">
        <img src={`${path}.${extension}`}/>
      </div>
      <p className="hero-series-item-title">{title}</p>
    </div>
  )
}
