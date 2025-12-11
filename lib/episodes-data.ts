export interface Episode {
  id: number
  title: string
  description: string
  season: number
  episode: number
  aired: string
  videoFile: string
}

export const generateEpisodes = (): Episode[] => {
  const episodes: Episode[] = []

  for (let i = 1; i <= 71; i++) {
    const season = Math.floor((i - 1) / 13) + 1
    const episodeNum = ((i - 1) % 13) + 1

    episodes.push({
      id: i,
      title: `Tập ${i}`,
      description: `Xem Courage đối mặt với những cuộc phiêu lưu bí ẩn ở Nowhere, Kansas. Tập ${i} mang lại những tình huống hài hước và rợn người.`,
      season,
      episode: episodeNum,
      aired: `Season ${season}`,
      videoFile: `Courage- Chú Chó Nhút Nhát (Thuyết Minh)(${i}).mp4`,
    })
  }

  return episodes
}

export const getEpisodeById = (id: number): Episode | undefined => {
  const episodes = generateEpisodes()
  return episodes.find((ep) => ep.id === id)
}

export const getRelatedEpisodes = (id: number, limit = 4): Episode[] => {
  const episodes = generateEpisodes()
  const currentEpisode = episodes.find((ep) => ep.id === id)
  if (!currentEpisode) return []

  return episodes.filter((ep) => ep.season === currentEpisode.season && ep.id !== id).slice(0, limit)
}
