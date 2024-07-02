// pages/show/[id].js
import Link from "next/link";

async function ShowDetails(context) {
  const { id } = context.params;
  const res = await fetch(
    `https://api.tvmaze.com/shows/${id}?embed[]=episodes&embed[]=cast`
  );
  const show = await res.json();
  return (
    <div className="container mx-auto px-4 py-4">
      <h1 className="text-3xl font-bold mb-3">{show.name}</h1>
      <div className="mb-4">
        <img
          src={show.image.original}
          alt={`Cover Image of ${show.name}`}
          className="rounded-lg shadow-md"
        />
      </div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold">Show Summary</h2>
        <p
          className="mt-2"
          dangerouslySetInnerHTML={{ __html: show.summary }}
        ></p>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Details</h2>
        <ul>
          <li>Type: {show.type}</li>
          <li>Language: {show.language}</li>
          <li>Genres: {show.genres.join(", ")}</li>
          <li>Status: {show.status}</li>
          <li>Runtime: {show.runtime} minutes</li>
          <li>Premiered: {show.premiered}</li>
          {show.ended && <li>Ended: {show.ended}</li>}
          <li>
            Schedule: {show.schedule.time} on {show.schedule.days.join(", ")}
          </li>
          <li>Rating: {show.rating.average}</li>
        </ul>
      </div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold">Cast</h2>
        <ul>
          {show._embedded.cast.map((member) => (
            <li key={member.person.id}>
              {member.person.name} as {member.character.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold">Episodes</h2>
        <ul>
          {show._embedded.episodes.map((episode) => (
            <li key={episode.id}>
              {episode.name} - Season {episode.season} Episode {episode.number}
            </li>
          ))}
        </ul>
      </div>
      <Link href="/">
        <p className="text-blue-500 hover:text-blue-700">Back to shows list</p>
      </Link>
    </div>
  );
}

export default ShowDetails;
