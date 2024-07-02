// pages/index.js
import Link from "next/link";

async function Shows() {
  const response = await fetch("https://api.tvma3493849389438ze.com/shows");
  const shows = await response.json();

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold my-6">TV Shows</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {shows.map((show) => (
          <div
            key={show.id}
            className="mb-4 p-4 bg-gray-100 rounded-lg shadow-lg"
          >
            <Link
              href={`/shows/${show.id}`}
              className="text-xl font-semibold text-blue-600"
            >
              {show.name}
            </Link>
            <div className="text-sm text-gray-600">Type: {show.type}</div>
            <div className="text-sm text-gray-600">
              Language: {show.language}
            </div>
            <div className="text-sm text-gray-600">
              Genres: {show.genres.join(", ")}
            </div>
            <div className="text-sm text-gray-600">Status: {show.status}</div>
            <div className="text-sm text-gray-600">
              Runtime: {show.runtime} minutes
            </div>
            <div className="text-sm text-gray-600">
              Premiered: {show.premiered}
            </div>
            {show.ended && (
              <div className="text-sm text-gray-600">Ended: {show.ended}</div>
            )}
            <div className="text-sm text-gray-600">
              Schedule: {show.schedule.time} on {show.schedule.days.join(", ")}
            </div>
            <div className="text-sm text-gray-600">
              Rating: {show.rating.average}
            </div>
            {show.network && (
              <div className="text-sm text-gray-600">
                Network: {show.network.name} ({show.network.country.code})
              </div>
            )}
            {show.officialSite && (
              <div className="mt-2">
                <Link
                  href={`/shows/${show.id}`}
                  className="text-xl font-semibold text-blue-600"
                >
                  Read More
                </Link>
              </div>
            )}
            {show.image && (
              <div className="mt-2">
                <img
                  src={show.image.medium}
                  alt={`Cover image of ${show.name}`}
                  className="max-w-xs rounded-lg"
                />
              </div>
            )}
            <div className="mt-2">
              Summary:{" "}
              <span className="text-sm text-gray-600">
                {show.summary.replace(/<[^>]+>/g, "")}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shows;
