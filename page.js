
export default function Home() {
 const services=['Generative AI','AI Agents','SAP AI Integration','Voice AI','RAG Assistants','Automation'];
 return (
  <main>
   <section className="hero">
    <div className="container">
     <h1 style={{fontSize:'56px'}}>CoreKonnect</h1>
     <h2>Connecting Businesses to Intelligent Futures</h2>
     <p>Premium AI services, GenAI solutions, enterprise automation, and intelligent transformation.</p>
     <a className="btn" href="#">Book Consultation</a>
    </div>
   </section>
   <section className="container">
    <h2>Our Services</h2>
    <div className="grid">
      {services.map(s=><div key={s} className="card"><h3>{s}</h3><p>Enterprise-grade AI implementation.</p></div>)}
    </div>
   </section>
  </main>
 )
}
