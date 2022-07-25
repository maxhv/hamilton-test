export interface Series {
  name: string,
  resourceURI: string,
}

export interface SeriesItem {
  id: string,
  thumbnail: Thumbnail,
  title: string,
}

export interface Thumbnail {
  path: string,
  extension: string,
}
