export function Teaching() {
  return (
    <section id="teaching" className="space-y-6">
      <h2 className="text-2xl font-semibold">Teaching</h2>

      <ul className="space-y-4">
        <li>
          <p className="font-medium">
            CNS 3201 — Internetworking Communication Systems
          </p>
          <p className="text-sm text-muted-foreground">
            Routing, switching, TCP/IP, network design
          </p>
        </li>

        <li>
          <p className="font-medium">
            CNS 3105 — Network Security
          </p>
          <p className="text-sm text-muted-foreground">
            Firewalls, IDS/IPS, VPNs, secure architectures
          </p>
        </li>
      </ul>
    </section>
  );
}
