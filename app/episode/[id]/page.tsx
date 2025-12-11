import { Button } from "@/components/ui/button"
import { VideoPlayer } from "@/components/video-player"
import Link from "next/link"
import { ArrowLeft, Share2, Bookmark } from "lucide-react"
import { getEpisodeById, getRelatedEpisodes, generateEpisodes } from "@/lib/episodes-data"

type Props = {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params
  const episode = getEpisodeById(Number.parseInt(id))
  return {
    title: `${episode?.title || `Episode ${id}`} - Courage the Cowardly Dog`,
    description: episode?.description || `Watch episode ${id} of Courage the Cowardly Dog.`,
  }
}

export async function generateStaticParams() {
  const episodes = generateEpisodes()
  return episodes.map((ep) => ({
    id: ep.id.toString(),
  }))
}

export default async function EpisodePage({ params }: Props) {
  const { id } = await params
  const episodeNum = Number.parseInt(id)
  const episode = getEpisodeById(episodeNum)
  const relatedEpisodes = getRelatedEpisodes(episodeNum, 3)
  const allEpisodes = generateEpisodes()

  if (!episode) {
    return (
      <main className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Episode not found</h1>
          <Link href="/" className="text-orange-400 hover:text-orange-500">
            Back to episodes
          </Link>
        </div>
      </main>
    )
  }

  const nextEpisodes = allEpisodes.slice(episodeNum, episodeNum + 3).filter((ep) => ep.id !== episodeNum)

  return (
    <main className="min-h-screen bg-slate-900">
      {/* Header */}
      <header className="border-b border-slate-700 bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Episodes</span>
          </Link>
          <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-orange-400 rounded-full flex items-center justify-center">
            <span className="text-white font-bold">🐕</span>
          </div>
        </div>
      </header>

      {/* Video Player */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <VideoPlayer videoSrc={`/videos/${episode.videoFile}`} title={episode.title} />
      </section>

      {/* Episode Details */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <p className="text-orange-400 font-semibold uppercase text-sm mb-2">
                {episode.aired} • Episode {episode.episode}
              </p>
              <h1 className="text-4xl font-bold text-white mb-2">{episode.title}</h1>
              <p className="text-slate-400">Thuyết Minh Tiếng Việt</p>
            </div>

            <p className="text-slate-300 leading-relaxed text-lg">{episode.description}</p>

            <div className="flex flex-wrap gap-3">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white gap-2">
                <Share2 className="w-5 h-5" /> Share
              </Button>
              <Button
                variant="outline"
                className="border-slate-600 text-slate-300 hover:text-white gap-2 bg-transparent"
              >
                <Bookmark className="w-5 h-5" /> Bookmark
              </Button>
            </div>

            {/* Episode Info Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              <div className="bg-slate-800 rounded-lg p-4">
                <p className="text-slate-400 text-sm mb-1">Season</p>
                <p className="text-white font-bold text-lg">{episode.season}</p>
              </div>
              <div className="bg-slate-800 rounded-lg p-4">
                <p className="text-slate-400 text-sm mb-1">Episode</p>
                <p className="text-white font-bold text-lg">{episode.episode}</p>
              </div>
              <div className="bg-slate-800 rounded-lg p-4">
                <p className="text-slate-400 text-sm mb-1">Category</p>
                <p className="text-white font-bold text-lg">Adventure</p>
              </div>
              <div className="bg-slate-800 rounded-lg p-4">
                <p className="text-slate-400 text-sm mb-1">Age</p>
                <p className="text-white font-bold text-lg">Family</p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-slate-800 rounded-lg p-6">
              <h3 className="text-white font-bold mb-4">Coming Up Next</h3>
              <div className="space-y-3">
                {nextEpisodes.map((ep) => (
                  <Link key={ep.id} href={`/episode/${ep.id}`} className="block group">
                    <div className="bg-slate-700 rounded overflow-hidden hover:ring-2 ring-orange-500 transition-all">
                      <img
                        src={`/courage-the-cowardly-dog-episode-.jpg?height=100&width=160&query=Courage the Cowardly Dog episode ${ep.id} thumbnail`}
                        alt={ep.title}
                        className="w-full aspect-video object-cover group-hover:opacity-80 transition-opacity"
                      />
                      <div className="p-2">
                        <p className="text-white text-sm font-medium group-hover:text-orange-400 transition-colors">
                          {ep.title}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-slate-800 rounded-lg p-6">
              <h3 className="text-white font-bold mb-4">Cast & Crew</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>
                  <span className="text-slate-400">Voice: </span>Marty Grab
                </li>
                <li>
                  <span className="text-slate-400">Created by: </span>John R. Dilworth
                </li>
                <li>
                  <span className="text-slate-400">Network: </span>Cartoon Network
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* More Episodes */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-white mb-6">More Episodes</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {allEpisodes.slice(episodeNum, episodeNum + 4).map((ep) => (
            <Link key={ep.id} href={`/episode/${ep.id}`} className="group">
              <div className="bg-slate-800 rounded-lg overflow-hidden hover:ring-2 ring-orange-500 transition-all">
                <img
                  src={`/courage-the-cowardly-dog-episode-.jpg?height=200&width=300&query=Courage the Cowardly Dog episode ${ep.id}`}
                  alt={ep.title}
                  className="w-full aspect-video object-cover group-hover:brightness-110 transition-all"
                />
                <div className="p-3">
                  <p className="text-white font-semibold group-hover:text-orange-400 transition-colors">{ep.title}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
