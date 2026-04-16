import { useState } from "react";

const t = {
  it: {
    tagline: "Casa al mare in Sardegna",
    welcome_title: "Benvenuti a Casa Adele",
    welcome_text: "Una casa fronte mare in Sardegna, pensata per farvi sentire a casa. Troverete tutto il necessario per un soggiorno rilassante e indimenticabile.",
    nav: ["Soggiorno", "Cucina", "Camere", "Bagno", "Esterni", "Info"],
    camera1: "Camera Matrimoniale — Primo Piano",
    camera2: "Camera da Letto — Piano Terra",
    sections: {
      soggiorno: { title: "Soggiorno", desc: "Uno spazio luminoso e accogliente dove rilassarsi, con vista aperta e tutto il comfort per il vostro soggiorno." },
      cucina: { title: "Cucina", desc: "Cucina completamente attrezzata per preparare i vostri pasti. Tutto quello che serve è a vostra disposizione." },
      camere: { title: "Camere", desc: "Due camere confortevoli: camera matrimoniale al primo piano e camera da letto al piano terra." },
      bagno: { title: "Bagno", desc: "Bagno moderno con tutto il necessario per la vostra igiene e benessere." },
      esterni: { title: "Giardino & Esterni", desc: "Spazi esterni curati con giardino, perfetti per pranzare all'aperto o godersi il tramonto." },
      info: {
        title: "Informazioni Utili",
        checkin: "Check-in", checkout: "Check-out",
        checkin_val: "dalle 15:00", checkout_val: "entro le 10:00",
        wifi: "Wi-Fi", wifi_val: "Disponibile — codice in casa",
        parking: "Parcheggio", parking_val: "Posto auto privato incluso",
        rules: "Regole della casa",
        rules_list: ["Non fumare all'interno", "Animali: da concordare", "Silenzio dopo le 23:00", "Raccolta differenziata"],
        contact: "Contatti",
        contact_text: "Per qualsiasi necessità siamo disponibili su WhatsApp:",
        whatsapp_btn: "Scrivici su WhatsApp",
      },
    },
  },
  en: {
    tagline: "Seaside home in Sardinia",
    welcome_title: "Welcome to Casa Adele",
    welcome_text: "A seaside home in Sardinia, designed to make you feel at home. You'll find everything you need for a relaxing and unforgettable stay.",
    nav: ["Living Room", "Kitchen", "Bedrooms", "Bathroom", "Garden", "Info"],
    camera1: "Double Bedroom — First Floor",
    camera2: "Bedroom — Ground Floor",
    sections: {
      soggiorno: { title: "Living Room", desc: "A bright and welcoming space to relax, with open views and all the comfort you need for your stay." },
      cucina: { title: "Kitchen", desc: "Fully equipped kitchen to prepare your meals. Everything you need is at your disposal." },
      camere: { title: "Bedrooms", desc: "Two comfortable bedrooms: double bedroom on the first floor and a bedroom on the ground floor." },
      bagno: { title: "Bathroom", desc: "Modern bathroom with everything you need for your hygiene and wellbeing." },
      esterni: { title: "Garden & Outdoors", desc: "Well-kept outdoor spaces with garden, perfect for dining al fresco or enjoying the sunset." },
      info: {
        title: "Useful Information",
        checkin: "Check-in", checkout: "Check-out",
        checkin_val: "from 3:00 PM", checkout_val: "by 10:00 AM",
        wifi: "Wi-Fi", wifi_val: "Available — code inside",
        parking: "Parking", parking_val: "Private parking included",
        rules: "House Rules",
        rules_list: ["No smoking indoors", "Pets: to be agreed", "Quiet after 11:00 PM", "Recycling mandatory"],
        contact: "Contact",
        contact_text: "For any needs we are available on WhatsApp:",
        whatsapp_btn: "Message us on WhatsApp",
      },
    },
  },
};

const PHOTOS = {
  soggiorno: [
    "https://res.cloudinary.com/dovpg47yh/image/upload/v1776365603/5fc2548e-b8c7-4716-9d79-48db0bcbc8c1_nltzwj.jpg",
    "https://res.cloudinary.com/dovpg47yh/image/upload/v1776365603/60fc6205-9dd4-4980-bf24-39852d9aa49f_bjrodm.jpg",
    "https://res.cloudinary.com/dovpg47yh/image/upload/v1776365604/3eed81c1-0454-4173-8f9b-9ba6e1988165_ovjl6n.jpg",
    "https://res.cloudinary.com/dovpg47yh/image/upload/v1776365605/a4664094-eb5c-4f39-9562-bbb3373b2a30_rgpc3s.jpg",
  ],
  cucina: [
    "https://res.cloudinary.com/dovpg47yh/image/upload/v1776365604/3eed81c1-0454-4173-8f9b-9ba6e1988165_ovjl6n.jpg",
    "https://res.cloudinary.com/dovpg47yh/image/upload/v1776365607/0726fa91-4733-416a-9cb4-a56bc4f7e925_bbzvtb.jpg",
  ],
  bagno: [
    "https://res.cloudinary.com/dovpg47yh/image/upload/v1776365607/0726fa91-4733-416a-9cb4-a56bc4f7e925_bbzvtb.jpg",
    "https://res.cloudinary.com/dovpg47yh/image/upload/v1776365603/e3050c6d-d585-4246-affd-0374876d612d_yobkhp.jpg",
  ],
  esterni: [
    "https://res.cloudinary.com/dovpg47yh/image/upload/v1776365605/df071b51-9f96-4970-b59e-63e15006b62d_pybsup.jpg",
    "https://res.cloudinary.com/dovpg47yh/image/upload/v1776365606/f2b2da83-72a8-4110-a24a-4e6107f060af_rg41bi.jpg",
    "https://res.cloudinary.com/dovpg47yh/image/upload/v1776365606/e4933759-d5db-4c0a-9c37-02e41d631505_b67w68.jpg",
    "https://res.cloudinary.com/dovpg47yh/image/upload/v1776365608/d58590cf-f5b7-4f04-8692-e7e144a304fa_mpusm3.jpg",
  ],
  camera1: ["https://res.cloudinary.com/dovpg47yh/image/upload/v1776365606/575c8896-a1a8-4c84-9213-6bc17e9bcc35_wfsuac.jpg"],
  camera2: ["https://res.cloudinary.com/dovpg47yh/image/upload/v1776365607/1314ee03-e8e3-4719-8892-f9d826f2d858_zniivz.jpg"],
};

const GOLD = "#c9a84c";
const NAVY = "#0f2535";

function Gallery({ photos, onOpen }) {
  if (!photos?.length) return null;
  const [main, ...rest] = photos;
  const thumbs = rest.slice(0, 3);
  return (
    <div style={{ marginBottom: "1.5rem", borderRadius: "6px", overflow: "hidden" }}>
      <img src={main} alt="" onClick={() => onOpen(photos, 0)}
        style={{ width: "100%", height: "260px", objectFit: "cover", display: "block", cursor: "pointer", marginBottom: thumbs.length ? "3px" : 0 }} />
      {thumbs.length > 0 && (
        <div style={{ display: "grid", gridTemplateColumns: `repeat(${thumbs.length}, 1fr)`, gap: "3px" }}>
          {thumbs.map((src, i) => (
            <div key={i} style={{ position: "relative" }}>
              <img src={src} alt="" onClick={() => onOpen(photos, i + 1)}
                style={{ width: "100%", height: "110px", objectFit: "cover", display: "block", cursor: "pointer" }} />
              {i === 2 && rest.length > 3 && (
                <div onClick={() => onOpen(photos, 3)} style={{
                  position: "absolute", inset: 0, background: "rgba(15,37,53,0.6)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  cursor: "pointer", color: "#fff", fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.5rem", fontStyle: "italic",
                }}>+{rest.length - 2}</div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function Lightbox({ photos, index, onClose }) {
  const [cur, setCur] = useState(index);
  const prev = (e) => { e.stopPropagation(); setCur((c) => (c - 1 + photos.length) % photos.length); };
  const next = (e) => { e.stopPropagation(); setCur((c) => (c + 1) % photos.length); };
  return (
    <div onClick={onClose} style={{ position: "fixed", inset: 0, zIndex: 1000, background: "rgba(10,24,34,0.97)", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <img src={photos[cur]} alt="" onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: "92vw", maxHeight: "88vh", objectFit: "contain", borderRadius: "4px" }} />
      {photos.length > 1 && <>
        <button onClick={prev} style={{ position: "absolute", left: "1rem", background: "none", border: "none", color: GOLD, fontSize: "3rem", cursor: "pointer" }}>‹</button>
        <button onClick={next} style={{ position: "absolute", right: "1rem", background: "none", border: "none", color: GOLD, fontSize: "3rem", cursor: "pointer" }}>›</button>
      </>}
      <button onClick={onClose} style={{ position: "absolute", top: "1rem", right: "1.2rem", background: "none", border: "none", color: GOLD, fontSize: "2rem", cursor: "pointer" }}>×</button>
      <div style={{ position: "absolute", bottom: "1rem", color: "rgba(255,255,255,0.35)", fontSize: "0.75rem", letterSpacing: "0.1em" }}>{cur + 1} / {photos.length}</div>
    </div>
  );
}

function SectionHeader({ title }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "0.9rem" }}>
      <div style={{ width: "28px", height: "1px", background: GOLD }} />
      <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.55rem", fontStyle: "italic", fontWeight: 400, color: NAVY, margin: 0, letterSpacing: "0.02em" }}>{title}</h2>
    </div>
  );
}

function SectionDesc({ text }) {
  return <p style={{ color: "#5a6e7a", fontSize: "0.9rem", lineHeight: 1.75, marginBottom: "1.2rem", fontFamily: "'Jost', sans-serif", fontWeight: 300 }}>{text}</p>;
}

export default function App() {
  const [lang, setLang] = useState("it");
  const [activeNav, setActiveNav] = useState(0);
  const [lightbox, setLightbox] = useState(null);
  const T = t[lang];
  const s = T.sections;
  const navKeys = ["soggiorno", "cucina", "camere", "bagno", "esterni", "info"];

  const openLightbox = (photos, index) => setLightbox({ photos, index });
  const scrollTo = (id) => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" }); };

  return (
    <div style={{ fontFamily: "'Jost', sans-serif", background: "#faf8f4", minHeight: "100vh", color: NAVY }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Jost:wght@200;300;400&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #faf8f4; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-thumb { background: #c9a84c44; border-radius: 2px; }
        img { transition: opacity 0.3s; }
        img:hover { opacity: 0.92; }
      `}</style>

      {/* HERO */}
      <header style={{ background: NAVY, color: "#faf8f4", padding: "2.5rem 1.5rem 2rem", textAlign: "center", position: "relative" }}>
        <div style={{ position: "absolute", top: "1.2rem", right: "1.2rem", display: "flex", gap: "6px" }}>
          {["it","en"].map(l => (
            <button key={l} onClick={() => setLang(l)} style={{
              background: lang===l ? GOLD : "transparent", color: lang===l ? NAVY : GOLD,
              border: `1px solid ${GOLD}`, borderRadius: "2px", padding: "3px 10px",
              fontSize: "0.68rem", letterSpacing: "0.12em", cursor: "pointer",
              fontFamily: "'Jost', sans-serif", fontWeight: 300, textTransform: "uppercase",
            }}>{l.toUpperCase()}</button>
          ))}
        </div>

        <svg width="44" height="38" viewBox="0 0 44 38" fill="none" style={{ marginBottom: "0.9rem" }}>
          <polyline points="4,20 22,4 40,20" stroke={GOLD} strokeWidth="1.3" strokeLinejoin="round" fill="none"/>
          <rect x="8" y="20" width="28" height="16" stroke={GOLD} strokeWidth="1.3" fill="none"/>
          <path d="M18,36 L18,28 A4,4 0 0,1 26,28 L26,36" stroke={GOLD} strokeWidth="1.1" fill="none"/>
          <path d="M6,27 C9,24 12,30 15,27 C18,24 21,30 24,27 C27,24 30,30 33,27 C36,24 38,27 38,27" stroke={GOLD} strokeWidth="0.9" fill="none" strokeLinecap="round"/>
        </svg>

        <p style={{ fontSize: "0.62rem", letterSpacing: "0.22em", color: GOLD, textTransform: "uppercase", marginBottom: "0.4rem", fontWeight: 300 }}>{T.tagline}</p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.8rem", fontStyle: "italic", fontWeight: 300, letterSpacing: "0.04em" }}>Casa Adele</h1>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.6rem", marginTop: "1rem" }}>
          <div style={{ width: "40px", height: "1px", background: GOLD, opacity: 0.4 }} />
          <div style={{ width: "4px", height: "4px", background: GOLD, transform: "rotate(45deg)", opacity: 0.7 }} />
          <div style={{ width: "40px", height: "1px", background: GOLD, opacity: 0.4 }} />
        </div>
      </header>

      {/* NAV */}
      <nav style={{ position: "sticky", top: 0, zIndex: 100, background: "#fff", borderBottom: "1px solid #e8e0d4", display: "flex", overflowX: "auto" }}>
        {T.nav.map((label, i) => (
          <button key={i} onClick={() => { setActiveNav(i); scrollTo(navKeys[i]); }} style={{
            flex: "0 0 auto", padding: "0.75rem 1.1rem", background: "none", border: "none",
            borderBottom: activeNav===i ? `2px solid ${GOLD}` : "2px solid transparent",
            color: activeNav===i ? GOLD : "#5a6e7a",
            fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase",
            cursor: "pointer", fontFamily: "'Jost', sans-serif", fontWeight: activeNav===i ? 400 : 300,
            whiteSpace: "nowrap", transition: "all 0.2s",
          }}>{label}</button>
        ))}
      </nav>

      {/* MAIN */}
      <main style={{ maxWidth: "600px", margin: "0 auto", padding: "2rem 1.2rem 4rem" }}>

        {/* Welcome */}
        <div style={{ textAlign: "center", marginBottom: "2.5rem", paddingBottom: "2rem", borderBottom: "1px solid #e8e0d4" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.4rem", fontStyle: "italic", fontWeight: 300, color: NAVY, marginBottom: "0.8rem" }}>{T.welcome_title}</h2>
          <p style={{ color: "#5a6e7a", fontSize: "0.88rem", lineHeight: 1.8, maxWidth: "420px", margin: "0 auto", fontWeight: 300 }}>{T.welcome_text}</p>
        </div>

        {/* Soggiorno */}
        <div id="soggiorno" style={{ marginBottom: "3rem" }}>
          <SectionHeader title={s.soggiorno.title} />
          <SectionDesc text={s.soggiorno.desc} />
          <Gallery photos={PHOTOS.soggiorno} onOpen={openLightbox} />
        </div>

        {/* Cucina */}
        <div id="cucina" style={{ marginBottom: "3rem" }}>
          <SectionHeader title={s.cucina.title} />
          <SectionDesc text={s.cucina.desc} />
          <Gallery photos={PHOTOS.cucina} onOpen={openLightbox} />
        </div>

        {/* Camere */}
        <div id="camere" style={{ marginBottom: "3rem" }}>
          <SectionHeader title={s.camere.title} />
          <SectionDesc text={s.camere.desc} />
          <div style={{ marginBottom: "1.5rem" }}>
            <p style={{ fontSize: "0.68rem", letterSpacing: "0.14em", textTransform: "uppercase", color: GOLD, marginBottom: "0.6rem", fontWeight: 300 }}>{T.camera1}</p>
            <Gallery photos={PHOTOS.camera1} onOpen={openLightbox} />
          </div>
          <div>
            <p style={{ fontSize: "0.68rem", letterSpacing: "0.14em", textTransform: "uppercase", color: GOLD, marginBottom: "0.6rem", fontWeight: 300 }}>{T.camera2}</p>
            <Gallery photos={PHOTOS.camera2} onOpen={openLightbox} />
          </div>
        </div>

        {/* Bagno */}
        <div id="bagno" style={{ marginBottom: "3rem" }}>
          <SectionHeader title={s.bagno.title} />
          <SectionDesc text={s.bagno.desc} />
          <Gallery photos={PHOTOS.bagno} onOpen={openLightbox} />
        </div>

        {/* Esterni */}
        <div id="esterni" style={{ marginBottom: "3rem" }}>
          <SectionHeader title={s.esterni.title} />
          <SectionDesc text={s.esterni.desc} />
          <Gallery photos={PHOTOS.esterni} onOpen={openLightbox} />
        </div>

        {/* Info */}
        <div id="info" style={{ marginBottom: "3rem" }}>
          <SectionHeader title={s.info.title} />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.8rem", marginBottom: "1.2rem" }}>
            {[
              { label: s.info.checkin, val: s.info.checkin_val, icon: "🕒" },
              { label: s.info.checkout, val: s.info.checkout_val, icon: "🚪" },
              { label: s.info.wifi, val: s.info.wifi_val, icon: "📶" },
              { label: s.info.parking, val: s.info.parking_val, icon: "🚗" },
            ].map((item, i) => (
              <div key={i} style={{ background: "#fff", border: "1px solid #e8e0d4", borderRadius: "4px", padding: "1rem" }}>
                <div style={{ fontSize: "1.2rem", marginBottom: "0.3rem" }}>{item.icon}</div>
                <div style={{ fontSize: "0.62rem", letterSpacing: "0.13em", textTransform: "uppercase", color: GOLD, marginBottom: "0.25rem", fontWeight: 300 }}>{item.label}</div>
                <div style={{ fontSize: "0.84rem", color: NAVY, fontWeight: 300 }}>{item.val}</div>
              </div>
            ))}
          </div>

          <div style={{ background: "#fff", border: "1px solid #e8e0d4", borderRadius: "4px", padding: "1.2rem", marginBottom: "1.5rem" }}>
            <p style={{ fontSize: "0.62rem", letterSpacing: "0.13em", textTransform: "uppercase", color: GOLD, marginBottom: "0.8rem", fontWeight: 300 }}>{s.info.rules}</p>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {s.info.rules_list.map((r, i) => (
                <li key={i} style={{ display: "flex", alignItems: "center", gap: "0.6rem", padding: "0.4rem 0", borderBottom: i < s.info.rules_list.length-1 ? "1px solid #f0ebe3" : "none", fontSize: "0.86rem", color: "#3a5060", fontWeight: 300 }}>
                  <div style={{ width: "4px", height: "4px", background: GOLD, transform: "rotate(45deg)", flexShrink: 0 }} />{r}
                </li>
              ))}
            </ul>
          </div>

          <div style={{ textAlign: "center" }}>
            <p style={{ fontSize: "0.62rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#8a9eaa", marginBottom: "0.5rem" }}>{s.info.contact}</p>
            <p style={{ fontSize: "0.88rem", color: "#5a6e7a", marginBottom: "1.2rem", fontWeight: 300 }}>{s.info.contact_text}</p>
            <a href="https://wa.me/393401234567" target="_blank" rel="noreferrer" style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              background: "#25D366", color: "#fff", padding: "0.75rem 1.8rem",
              borderRadius: "3px", textDecoration: "none", fontSize: "0.85rem",
              fontFamily: "'Jost', sans-serif", letterSpacing: "0.05em", fontWeight: 400,
            }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              {s.info.whatsapp_btn}
            </a>
          </div>
        </div>
      </main>

      <footer style={{ background: NAVY, color: "rgba(255,255,255,0.3)", textAlign: "center", padding: "1.5rem", fontSize: "0.7rem", letterSpacing: "0.1em" }}>
        <div style={{ color: GOLD, marginBottom: "0.3rem", fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: "1.1rem" }}>Casa Adele</div>
        Sardegna · {new Date().getFullYear()}
      </footer>

      {lightbox && <Lightbox photos={lightbox.photos} index={lightbox.index} onClose={() => setLightbox(null)} />}
    </div>
  );
}
