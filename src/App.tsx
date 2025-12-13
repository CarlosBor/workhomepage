import './App.css'

type LinkItem = {
  name: string
  url: string
  icon: string
  label?: string
}

const jobBoards: LinkItem[] = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/jobs/search/?currentJobId=4343084923&f_TPR=r604800&f_WT=3%2C1&geoId=101962740&keywords=react&origin=JOB_SEARCH_PAGE_JOB_FILTER', icon: '💼' },
  { name: 'InfoJobs', url: 'https://www.infojobs.net/jobsearch/search-results/list.xhtml?keyword=react&normalizedJobTitleIds=2512_866c7813-2c03-47d7-9bdc-192cfbace57c&provinceIds=51&cityIds=Bilbao&cityId=6693&searchByType=city&segmentId=&page=1&sortBy=RELEVANCE&onlyForeignCountry=false&countryIds=17&sinceDate=_7_DAYS', icon: '📋' },
  { name: 'Tecnoempleo', url: 'https://www.tecnoempleo.com/ofertas-trabajo/?te=react&pr=241', icon: '🧠' },
  { name: 'Domestika', url: 'https://www.domestika.org/en/search/jobs?query=react', icon: '🎨' },
  { name: 'Jooble', url: 'https://es.jooble.org/SearchResult?date=2&rgns=Bilbao%2C%20Vizcaya&ukw=react', icon: '🦘' },
  { name: 'Indeed', url: 'https://es.indeed.com/jobs?q=react&l=bilbao%2C+vizcaya+provincia', icon: '🔍' },
]

const consultancies: LinkItem[] = [
  { name: 'Inetum', url: 'https://www.inetum.com/en/jobs?search=Bilbao', icon: '🌐' },
  { name: 'Hays', url: 'https://www.hays.es/busqueda-empleo/front-end-developer-empleos-en-bilbao-spain?q=Front%20End%20Developer&location=Bilbao,%20Spain&specialismId=&subSpecialismId=&locationf=&industryf=&sortType=0&jobType=-1&flexiWorkType=-1&payTypefacet=-1&minPay=-1&maxPay=-1&jobSource=HaysGCJ&searchPageTitle=Front%20End%20Developer%20Empleos%20en%20Bilbao,%20Spain%20%7C%20Hays%20Selecci%C3%B3n%20Spain&searchPageDesc=%C2%BFBuscas%20un%20nuevo%20puesto%20de%20trabajo%20en%20Bilbao,%20Spain%3F%20Consulta%20nuestras%20%C3%BAltimas%20ofertas%20de%20empleo%20y%20solicita%20tu%20vacante%20con%20Hays.', icon: '🤝' },
]

const tealLink: LinkItem = {
  name: 'Teal',
  label: 'Application tracker',
  icon: '🗂️',
  url: 'https://app.tealhq.com/job-tracker',
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
