export interface Character {
  id?: number,
  name?: string,
  description?: string,
  modified?: Date,
  resourceURI?: string,
  urls?: Array<string>,
  thumbnail?: Object,
  comics?: Array<ComicList>,
  stories?: Array<StoryList>,
  events?: Array<EventList>,
  series?: Array<SeriesList>,
}

interface StorySummary {
  resourceURI?: string,
  name?: string,
  type?: string,
}

interface StoryList {
  available?: number,
  returned?: number,
  collectionURI?: string,
  items: Array<StorySummary>,
}

interface EventSummary {
  resourceURI?: string,
  name?: string,
}

interface EventList {
  available?: number,
  returned?: number,
  collectionURI?: string,
  items: Array<EventSummary>,
}

interface SeriesSummary {
  resourceURI?: string,
  name?: string,
}

export interface SeriesList {
  available?: number,
  returned?: number,
  collectionURI?: string,
  items: Array<SeriesSummary>,
}

interface ComicSummary {
  resourceURI?: string,
  name?: string,
}

interface ComicList {
  available?: number,
  returned?: number,
  collectionURI?: string,
  items: Array<ComicSummary>,
}
