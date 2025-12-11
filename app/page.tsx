import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { Play, Star } from "lucide-react"
import { generateEpisodes } from "@/lib/episodes-data"

const episodes = generateEpisodes()

export const metadata = {
  title: "Courage the Cowardly Dog - Stream All Episodes",
  description:
    "Watch all 71 episodes of Courage the Cowardly Dog. A pink dog with a big heart facing mysterious adventures in Nowhere, Kansas.",
}

export default function Home() {
  const featuredEpisode = episodes[0]

  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-amber-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Header */}
      <header className="border-b border-amber-200 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-orange-400 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">🐕</span>
            </div>
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Courage TV</h1>
          </div>
          <nav className="flex items-center gap-6">
            <a
              href="#episodes"
              className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white font-medium"
            >
              Episodes
            </a>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">Watch Now</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Featured Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-orange-600 dark:text-orange-400 font-semibold uppercase text-sm tracking-wider">
                Featured Episode
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white text-pretty">
                Courage Faces His Biggest Fear Yet
              </h2>
            </div>
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              Join Courage as he protects Muriel and Eustace from mysterious happenings in Nowhere, Kansas. Will his
              courage save the day once again?
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white gap-2">
                <Play className="w-5 h-5" /> Play Episode
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-orange-300 text-slate-900 dark:text-white dark:border-slate-600 bg-transparent"
              >
                View All Episodes
              </Button>
            </div>
            <div className="flex items-center gap-2 pt-4">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-slate-600 dark:text-slate-400">4,827 reviews</span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative h-96 lg:h-full rounded-xl overflow-hidden shadow-2xl">
            <img
              src="/images/image.png"
              alt="Courage the Cowardly Dog - Featured"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Episodes Section */}
      <section id="episodes" className="max-w-7xl mx-auto px-4 py-16">
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">All 71 Episodes</h3>
          <p className="text-slate-600 dark:text-slate-400">Binge all seasons of Courage the Cowardly Dog</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {episodes.map((episode) => (
            <Link key={episode.id} href={`/episode/${episode.id}`}>
              <Card className="group cursor-pointer overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white dark:bg-slate-800 border-amber-200 dark:border-slate-700">
                <div className="aspect-video bg-gradient-to-br from-orange-200 to-pink-200 dark:from-orange-900 dark:to-pink-900 relative overflow-hidden">
                  <img
                    src={`/courage-the-cowardly-dog-episode-.jpg?height=200&width=300&query=Courage the Cowardly Dog episode ${episode.id}`}
                    alt={episode.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                    <Play className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity fill-white" />
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-xs text-orange-600 dark:text-orange-400 font-semibold uppercase mb-1">
                    {episode.aired}
                  </p>
                  <h4 className="font-bold text-slate-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                    {episode.title}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 line-clamp-2">{episode.description}</p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-20 border-t border-amber-200 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h5 className="font-bold text-slate-900 dark:text-white mb-4">Courage TV</h5>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Stream all 71 episodes of Courage the Cowardly Dog
              </p>
            </div>
            <div>
              <h5 className="font-bold text-slate-900 dark:text-white mb-4">Show</h5>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-slate-600 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-400"
                  >
                    Episodes
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-600 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-400"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-600 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-400"
                  >
                    Trivia
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-slate-900 dark:text-white mb-4">Legal</h5>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-slate-600 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-400"
                  >
                    Privacy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-600 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-400"
                  >
                    Terms
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-600 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-400"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-slate-900 dark:text-white mb-4">Follow</h5>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-slate-600 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-400"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-600 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-400"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-600 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-400"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-amber-200 dark:border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-slate-600 dark:text-slate-400">© 2025 Courage TV. All rights reserved.</p>
            <p className="text-sm text-slate-600 dark:text-slate-400">Made with ❤️</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
