import { publications } from "@/data/publications";

export function Publications() {
  return (
    <section id="publications" className="space-y-6">
      <h2 className="mb-6">Publications</h2>

      <ol className="space-y-4 list-decimal list-inside">
        {publications.map((pub, i) => (
          <li key={i} className="space-y-1">
            <p className="font-medium">{pub.title}</p>
            <p className="text-sm text-muted-foreground">
              {pub.authors}, <em>{pub.venue}</em>, {pub.year}
            </p>
            {pub.link && (
              <a
                href={pub.link}
                target="_blank"
                className="text-sm underline"
              >
                View publication
              </a>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}
