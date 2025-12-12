import './App.css'

type LinkItem = {
  name: string
  url: string
  icon: string
  label?: string
}

const jobBoards: LinkItem[] = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com', icon: '💼' },
  { name: 'InfoJobs', url: 'https://www.infojobs.net', icon: '📋' },
  { name: 'Tecnoempleo', url: 'https://www.tecnoempleo.com', icon: '🧠' },
  { name: 'Domestika', url: 'https://www.domestika.org', icon: '🎨' },
  { name: 'Jooble', url: 'https://es.jooble.org', icon: '🦘' },
  { name: 'Indeed', url: 'https://www.indeed.com', icon: '🔍' },
]

const consultancies: LinkItem[] = [
  { name: 'Ibermática', url: 'https://www.ibermatica.com', icon: '🏢' },
  { name: 'Kyndryl', url: 'https://www.kyndryl.com', icon: '🧠' },
  { name: 'Accenture', url: 'https://www.accenture.com', icon: '🚀' },
  { name: 'Sopra Steria', url: 'https://www.soprasteria.es', icon: '🧭' },
  { name: 'Inetum', url: 'https://www.inetum.com', icon: '🌐' },
  { name: 'Sener', url: 'https://www.group.sener', icon: '⚙️' },
  { name: 'LKS', url: 'https://www.lksnext.com', icon: '📈' },
  { name: 'Hays', url: 'https://www.hays.es', icon: '🤝' },
]

const tealLink: LinkItem = {
  name: 'Teal',
  label: 'Application tracker',
  icon: '🗂️',
  url: 'https://www.tealhq.com',
}

function LinkSection({
  title,
  items,
  variant,
}: {
  title: string
  items: LinkItem[]
  variant: 'top' | 'middle' | 'bottom'
}) {
  return (
    <section className={`link-section ${variant}`}>
      <div className="section-heading">
        <span>{title}</span>
      </div>
      <div className="link-row">
        {items.map((item) => (
          <a
            key={item.name}
            className="link-card"
            href={item.url}
            target="_blank"
            rel="noreferrer"
          >
            <span className="link-content">
              <span className="link-icon" aria-hidden="true">
                {item.icon}
              </span>
              <span className="link-text">
                <span className="link-name">{item.name}</span>
                {item.label && <span className="link-label">{item.label}</span>}
              </span>
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}

function App() {
  return (
    <main className="homepage">
      <LinkSection title="Job Boards" items={jobBoards} variant="top" />
      <LinkSection title="Consultancies" items={consultancies} variant="middle" />
      <section className="link-section bottom">
        <div className="section-heading">
          <span>Workflow Boost</span>
        </div>
        <a
          className="link-card single"
          href={tealLink.url}
          target="_blank"
          rel="noreferrer"
        >
          <span className="link-content">
            <span className="link-icon" aria-hidden="true">
              {tealLink.icon}
            </span>
            <span className="link-text">
              <span className="link-name">{tealLink.name}</span>
              {tealLink.label && <span className="link-label">{tealLink.label}</span>}
            </span>
          </span>
        </a>
      </section>
    </main>
  )
}

export default App
